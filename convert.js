#!/usr/bin/env node
/**
 * convert.js — raw/*.md → content/*.json
 *
 * 用法:
 *   node convert.js              转换所有 raw/*.md
 *   node convert.js --watch      监听模式
 *   node convert.js --lang zh    仅转换指定语言
 *
 * 解析规则与 mis-review.html 中的 parseMarkdown() 完全一致。
 */

const fs = require('fs');
const path = require('path');

const RAW_DIR = path.join(__dirname, 'raw');
const CONTENT_DIR = path.join(__dirname, 'content');
const REF_DIR = path.join(__dirname, 'ref');

// ===== 工具函数 =====

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

function writeJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

/** 扫描 ref/ 目录，返回已存在的 PDF 文件名集合 */
function scanRefs() {
  if (!fs.existsSync(REF_DIR)) return new Set();
  return new Set(
    fs.readdirSync(REF_DIR)
      .filter(f => /\.pdf$/i.test(f))
      .map(f => f.replace(/\.pdf$/i, ''))
  );
}

/** 为 session 生成 ref 信息 */
function buildRef(sessionId, refSet) {
  // 约定: ref/session-{id}.pdf  (如 ref/session-01.pdf)
  const base = `session-${sessionId}`;
  if (refSet.has(base)) {
    return `ref/session-${sessionId}.pdf`;
  }
  return null;
}

// ===== Markdown 解析 =====

function parseMarkdown(md) {
  const sessions = [];
  const lines = md.split('\n');
  let cur = null;
  let block = null;
  let docTitle = '';

  for (const line of lines) {
    const trimmed = line.trim();

    // Extract document title from first # heading
    if (!docTitle && /^#\s+/.test(trimmed) && !/^##\s+/.test(trimmed)) {
      docTitle = trimmed.replace(/^#\s+/, '').trim();
      continue;
    }

    // Session boundary: "## NN. ..."
    if (/^##\s+\d{2}\./.test(trimmed)) {
      if (cur) {
        if (block) { cur.blocks.push(block); block = null; }
        sessions.push(cur);
      }
      const m = trimmed.match(/^##\s+(\d{2})\.\s+(.+)/);
      cur = {
        id: m ? m[1] : '00',
        title: m ? m[2] : trimmed.replace(/^##\s+/, ''),
        blocks: [],
        ref: null   // will be filled post-parse
      };
      continue;
    }

    // Block boundary: "### ..."
    if (/^###\s+/.test(trimmed)) {
      if (cur && block) { cur.blocks.push(block); }
      block = {
        title: trimmed.replace(/^###\s+/, '').trim(),
        body: ''
      };
      continue;
    }

    // Skip horizontal rules and blank lines between sections
    if (/^---/.test(trimmed)) continue;
    if (!block && !trimmed) continue;

    // Content
    if (block) {
      block.body += line + '\n';
    } else if (cur && trimmed) {
      block = { title: '', body: line + '\n' };
    }
  }

  // Finalize
  if (cur) {
    if (block) cur.blocks.push(block);
    sessions.push(cur);
  }

  // If no sessions found, wrap entire content
  if (sessions.length === 0 && md.trim()) {
    sessions.push({
      id: '00',
      title: docTitle || 'Untitled',
      blocks: [{ title: '', body: md.trim() }],
      ref: null
    });
  }

  return { docTitle, sessions };
}

// ===== 核心：单个文件转换 =====

function convertOne(filePath, refSet) {
  const basename = path.basename(filePath);
  const lang = basename.replace(/\.md$/, '');
  const md = readFile(filePath);

  if (!md.trim()) {
    console.warn(`  ⚠ ${basename}: 文件为空，生成空 sessions`);
  }

  const { docTitle, sessions } = parseMarkdown(md);

  // Post-process: trim trailing newlines, attach refs
  for (const s of sessions) {
    for (const b of s.blocks) {
      b.body = b.body.replace(/\n+$/, '\n');
    }
    s.ref = buildRef(s.id, refSet);
  }

  const output = {
    meta: {
      lang,
      title: docTitle || lang,
      source: `raw/${basename}`,
      generated: new Date().toISOString()
    },
    sessions
  };

  const outPath = path.join(CONTENT_DIR, `${lang}.json`);
  writeJSON(outPath, output);

  const blockCount = sessions.reduce((sum, s) => sum + s.blocks.length, 0);
  const refCount = sessions.filter(s => s.ref).length;
  const refNote = refCount > 0 ? `  (${refCount} refs)` : '';
  console.log(`  ✓ ${basename} → ${lang}.json  (${sessions.length} sessions, ${blockCount} blocks${refNote})`);

  return { lang, sessions, blocks: blockCount };
}

// ===== 批量转换 =====

function convertAll(filterLang) {
  ensureDir(RAW_DIR);
  ensureDir(CONTENT_DIR);
  ensureDir(REF_DIR);

  const refSet = scanRefs();
  if (refSet.size > 0) {
    console.log(`📎 已检测到 ${refSet.size} 个 PDF 课件: ${[...refSet].join(', ')}`);
  }

  const files = fs.readdirSync(RAW_DIR)
    .filter(f => f.endsWith('.md'))
    .map(f => path.join(RAW_DIR, f));

  if (files.length === 0) {
    console.log('📭 raw/ 目录为空，请放入 .md 源文件');
    return;
  }

  const targets = filterLang
    ? files.filter(f => path.basename(f) === `${filterLang}.md`)
    : files;

  if (filterLang && targets.length === 0) {
    console.error(`✗ 未找到 raw/${filterLang}.md`);
    process.exit(1);
  }

  console.log(`\n🔨 raw/*.md → content/*.json  (${new Date().toLocaleTimeString()})`);
  console.log(`   源目录: ${RAW_DIR}`);
  console.log(`   输出目录: ${CONTENT_DIR}\n`);

  let total = 0;
  for (const f of targets) {
    try {
      convertOne(f, refSet);
      total++;
    } catch (err) {
      console.error(`  ✗ ${path.basename(f)}: ${err.message}`);
    }
  }

  console.log(`\n✅ 完成: ${total}/${targets.length} 个文件\n`);
}

// ===== 入口 =====

const args = process.argv.slice(2);
const watchMode = args.includes('--watch') || args.includes('-w');
const langIdx = args.indexOf('--lang');
const filterLang = langIdx >= 0 ? args[langIdx + 1] : null;

if (watchMode) {
  console.log('👁 监听 raw/ 和 ref/ 目录变化... (Ctrl+C 退出)\n');
  convertAll(filterLang);

  // Watch raw/ for md changes
  fs.watch(RAW_DIR, { recursive: false }, (eventType, filename) => {
    if (filename && filename.endsWith('.md')) {
      clearTimeout(watchTimer);
      watchTimer = setTimeout(() => {
        console.log(`\n📄 检测到 raw/ 变化: ${filename}`);
        if (filterLang && filename !== `${filterLang}.md`) return;
        try {
          const refSet = scanRefs();
          convertOne(path.join(RAW_DIR, filename), refSet);
          console.log('✅ 就绪\n');
        } catch (err) {
          console.error(`  ✗ ${err.message}\n`);
        }
      }, 200);
    }
  });

  // Watch ref/ for pdf changes (re-convert all to update refs)
  fs.watch(REF_DIR, { recursive: false }, (eventType, filename) => {
    if (filename && filename.endsWith('.pdf')) {
      clearTimeout(watchTimer);
      watchTimer = setTimeout(() => {
        console.log(`\n📎 检测到 ref/ 变化: ${filename}`);
        convertAll(filterLang);
      }, 300);
    }
  });

  var watchTimer;
} else {
  convertAll(filterLang);
}
