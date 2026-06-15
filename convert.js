#!/usr/bin/env node
/**
 * convert.js — raw/content.md → content/data.json
 *
 * 用法:
 *   node convert.js              转换 → content/data.json
 *   node convert.js --watch      监听模式
 */

const fs = require('fs');
const path = require('path');

const RAW_DIR = path.join(__dirname, 'raw');
const CONTENT_DIR = path.join(__dirname, 'content');
const REF_DIR = path.join(__dirname, 'ref');
const SRC_FILE = path.join(RAW_DIR, 'content.md');
const OUT_FILE = path.join(CONTENT_DIR, 'data.json');

// ===== 工具 =====

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function readFile(p) { return fs.readFileSync(p, 'utf-8'); }
function writeJSON(p, d) { fs.writeFileSync(p, JSON.stringify(d, null, 2), 'utf-8'); }

/** Extract <!-- ref: filename --> from a line, returns "ref/filename" or null */
function extractRef(t) {
  const m = t.match(/<!--\s*ref:\s*(.+?)\s*-->/i);
  return m ? 'ref/' + m[1].trim() : null;
}

// ===== 解析 =====

function parseBilingual(md) {
  const sessions = [];
  const lines = md.split('\n');
  let cur = null, block = null, langBuf = null, langTag = '';

  function splitTitle(s) {
    const idx = s.lastIndexOf(' | ');
    if (idx === -1) return { en: s.trim(), zh: s.trim() };
    return { en: s.slice(0, idx).trim(), zh: s.slice(idx + 3).trim() };
  }

  function flushLang() {
    if (!block || !langTag) return;
    block.body[langTag] = (langBuf || '').replace(/\n+$/, '\n');
    langBuf = null; langTag = '';
  }

  for (const line of lines) {
    const t = line.trim();

    // Language tag: [en] or [zh]
    if (/^\[en\]$/i.test(t)) { flushLang(); langTag = 'en'; langBuf = ''; continue; }
    if (/^\[zh\]$/i.test(t)) { flushLang(); langTag = 'zh'; langBuf = ''; continue; }
    if (/^\[\/en\]$/i.test(t) || /^\[\/zh\]$/i.test(t)) { flushLang(); continue; }

    // Session: "## NN. EN | ZH  <!-- ref: file.pdf -->"
    if (/^##\s+\d{2}\./.test(t)) {
      flushLang();
      if (cur) { if (block) cur.blocks.push(block); sessions.push(cur); }
      const m = t.match(/^##\s+(\d{2})\.\s+(.+)/);
      const raw = m ? m[2] : t.replace(/^##\s+/, '');
      const title = splitTitle(raw.replace(/\s*<!--.*?-->\s*/,''));
      cur = { id: m ? m[1] : '00', title, ref: extractRef(t), blocks: [] };
      block = null;
      continue;
    }

    // Block: "### EN | ZH  <!-- p=N -->"
    if (/^###\s+/.test(t)) {
      flushLang();
      if (cur) { if (block) cur.blocks.push(block); }
      const pm = t.match(/<!--\s*p[:=]\s*(\d+)\s*-->/i);
      block = {
        title: splitTitle(t.replace(/^###\s+/, '').replace(/\s*<!--.*?-->\s*/, '')),
        body: { en: '', zh: '' },
        page: pm ? parseInt(pm[1]) : null
      };
      continue;
    }

    // Skip horizontal rules and blank lines between sections
    if (/^---/.test(t)) continue;
    if (!block && !t) continue;

    // Content
    if (langTag && block) {
      langBuf += line + '\n';
    } else if (block && t && !langTag) {
      // Legacy: content before any language tag → treat as both
      if (!langBuf) langBuf = '';
      langBuf += line + '\n';
      // No flush until tag encountered — will be caught at next tag or block end
    } else if (cur && t && !block) {
      block = { title: splitTitle(''), body: { en: '', zh: '' } };
      if (!langTag) { block.body.en += line + '\n'; block.body.zh += line + '\n'; }
    }
  }

  flushLang();
  if (cur) { if (block) cur.blocks.push(block); sessions.push(cur); }

  // Clean up empty bodies: copy en↔zh if one side is empty
  for (const s of sessions) {
    for (const b of s.blocks) {
      if (!b.body.en.trim() && b.body.zh.trim()) b.body.en = b.body.zh;
      if (!b.body.zh.trim() && b.body.en.trim()) b.body.zh = b.body.en;
    }
  }

  return sessions;
}

// ===== 主流程 =====

function convert() {
  ensureDir(RAW_DIR);
  ensureDir(CONTENT_DIR);
  ensureDir(REF_DIR);

  if (!fs.existsSync(SRC_FILE)) {
    console.error('✗ 缺少 raw/content.md');
    process.exit(1);
  }

  console.log(`\n🔨 raw/content.md → content/data.json  (${new Date().toLocaleTimeString()})`);

  const sessions = parseBilingual(readFile(SRC_FILE));

  const output = {
    meta: { source: 'raw/content.md', generated: new Date().toISOString() },
    sessions
  };

  writeJSON(OUT_FILE, output);

  const blockCount = sessions.reduce((s, sess) => s + sess.blocks.length, 0);
  const refCount = sessions.filter(s => s.ref).length;
  console.log(`   → data.json  (${sessions.length} sessions, ${blockCount} blocks, ${refCount} refs)`);
  console.log(`\n✅ 完成\n`);
}

// ===== 入口 =====

const args = process.argv.slice(2);

if (args.includes('--watch') || args.includes('-w')) {
  console.log('👁 监听 raw/content.md 和 ref/ 变化... (Ctrl+C 退出)\n');
  convert();

  let timer;
  fs.watch(RAW_DIR, { recursive: false }, (_, fn) => {
    if (fn === 'content.md') {
      clearTimeout(timer);
      timer = setTimeout(() => { console.log('\n📄 raw/content.md 变化'); try { convert(); } catch(e) { console.error('✗', e.message); } }, 200);
    }
  });
  fs.watch(REF_DIR, { recursive: false }, (_, fn) => {
    if (fn && fn.endsWith('.pdf')) {
      clearTimeout(timer);
      timer = setTimeout(() => { console.log('\n📎 ref/ 变化'); try { convert(); } catch(e) { console.error('✗', e.message); } }, 300);
    }
  });
} else {
  convert();
  buildOffline();
}

function buildOffline() {
  const HTML_FILE = path.join(__dirname, 'mis-review.html');
  const OUT_FILE = path.join(__dirname, 'mis-review-offline.html');
  const SYN_FILE = path.join(__dirname, 'synonyms.json');

  if (!fs.existsSync(HTML_FILE)) { console.error('✗ 缺少 mis-review.html'); return; }

  const dataJSON = JSON.parse(readFile(path.join(CONTENT_DIR, 'data.json')));
  const synJSON = JSON.parse(readFile(SYN_FILE));

  const embed = '<script>window.__EMBEDDED__={synonyms:' + JSON.stringify(synJSON) + ',data:' + JSON.stringify(dataJSON) + '};</script>';
  let html = readFile(HTML_FILE);
  html = html.replace('</body>', embed + '\n</body>');
  fs.writeFileSync(OUT_FILE, html, 'utf-8');
  console.log(`📦 离线版 → mis-review-offline.html  (${(fs.statSync(OUT_FILE).size / 1024).toFixed(0)} KB)`);
}
