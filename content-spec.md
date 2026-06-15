# Content Data Specification v1.1

> **面向对象**: Agent / AI 工具 / 人工编辑者
> **目标**: 规范化 MIS 知识点内容的编写、存储、转换流程，确保 HTML App 可无歧义地消费

---

## 1. 目录结构

```
项目根目录/
├── raw/                      ← 源文件（Agent 编辑入口）
│   ├── zh.md                 ← 中文版内容
│   ├── en.md          ← 双语版内容
│   └── ...                   ← 更多语言版本: en.md, ja.md 等
├── ref/                      ← 参考课件（PDF 原件）
│   ├── session-01.pdf        ← 第01章课件
│   ├── session-02.pdf        ← 第02章课件
│   └── ...                   ← 命名约定: session-{NN}.pdf
├── content/                  ← 构建输出（HTML App 直接读取）
│   ├── zh.json               ← 由 convert.js 从 raw/zh.md 生成
│   ├── en.json
│   └── ...
├── synonyms.json             ← 同义词词典（独立编辑）
├── convert.js                ← 转换脚本: raw/*.md → content/*.json
├── content-spec.md           ← 本规范文档
└── mis-review.html           ← 前端 App（加载 content/*.json + synonyms.json）
```

**命名规则：**
- 源文件: `raw/{lang}.md`，其中 `lang` 为语言标识 (`zh`, `en`, `en`, `ja` 等)
- 输出文件: `content/{lang}.json`，与源文件一一对应
- 课件文件: `ref/session-{NN}.pdf`，`NN` 为两位章节编号 (`01`~`14`)
- 语言标识决定 App 中显示的标签（见 `mis-review.html` 中的按钮配置）
- 文件名不含空格、不含中文，全部小写

---

## 2. 源文件格式 (Markdown Input)

### 2.1 章节边界

章节以二级标题标识，格式为：

```
## NN. 章节名称
```

- `NN` 为两位数字编号 (`01` ~ `14`)
- `章节名称` 为章节标题（中英文均可）
- 该行之前的所有内容（一级标题、描述段落）被归入前言，不参与解析
- 章节之间使用 `---` 分隔（可选，解析器会忽略）

### 2.2 知识点块边界

每个知识点块以三级标题标识：

```
### 块标题
```

- 块标题为该知识点的简短名称（中英文均可）
- 若某个章节的内容未以 `###` 开头，则自动生成一个标题为空的匿名块

### 2.3 块正文

块标题之后、下一个 `###` 或 `##` 之前的所有非空行属于该块的正文。

正文使用标准 Markdown 语法：
- 段落: 纯文本
- 无序列表: `- item`
- 有序列表: `1. item`
- 表格: `| col1 | col2 |`
- 行内格式: `**粗体**`, `*斜体*`, `` `代码` ``
- 引用: `> quote`

### 2.4 完整示例

```markdown
# 文档标题（可选，不会被解析为块）

## 01. Information Systems Overview

### IT vs IS

- **Information Technology (IT)**: all the hardware and software...
- **Information System (IS)**: a set of interrelated components...
- **Data vs Information**: Data = raw facts; Information = meaningful form.

### Three Dimensions of IS

1. **Organization**: people, structure, business processes...
2. **Management**: managers set organizational strategy...
3. **Technology**: hardware/software, data management...

| Dimension | Description |
|:---|:---|
| Organization | people, structure... |
| Management | strategy, decisions... |

---
## 02. IT Infrastructure
...
```

### 2.5 引用原始课件 (Ref Linking)

每个章节可关联一个 PDF 课件文件，App 会在章节标题旁显示 📎 跳转链接。

**约定：**
- PDF 文件放入 `ref/` 目录
- 命名格式: `session-{NN}.pdf`，其中 `NN` 为两位章节编号
  - 例: `ref/session-01.pdf` 对应 `## 01. Information Systems Overview`
- `convert.js` 运行时自动扫描 `ref/` 目录，为匹配的 session 填充 `ref` 字段
- 若 `ref/` 中不存在对应 PDF，则该 session 的 `ref` 字段为 `null`，App 不显示链接
- 新增课件后需重新运行 `node convert.js`（或在 `--watch` 模式下自动检测）

**Agent 无需在 Markdown 中写任何特殊语法**——只需将 PDF 按约定命名放入 `ref/` 即可。

### 2.6 格式约束（Agent 必须遵守）

| 规则 | 说明 |
|:---|:---|
| 章节标题仅用 `## NN. ...` | 不得使用 `## NN、` `## NN -` 等变体 |
| 块标题仅用 `### ...` | 不得使用 `####` 或更深层级 |
| 表格必须有表头分隔行 | `|:---|:---|` 至少三个连字符 |
| 不要在正文中使用 `##` 或 `###` | 会被误解析为边界 |
| 文件编码为 UTF-8 (无 BOM) | 确保中文正常显示 |
| 行尾使用 LF (`\n`) | 跨平台兼容 |

---

## 3. 输出格式 (JSON Output)

### 3.1 顶层结构

```json
{
  "meta": {
    "lang": "zh",
    "title": "MIS 期末知识点速查",
    "source": "raw/zh.md",
    "generated": "2026-06-15T12:00:00+08:00"
  },
  "sessions": [
    {
      "id": "01",
      "title": "Information Systems Overview",
      "ref": "ref/session-01.pdf",
      "blocks": [
        {
          "title": "IT vs IS",
          "body": "- **Information Technology (IT)**: ...\n- **Information System (IS)**: ...\n"
        }
      ]
    }
  ]
}
```

### 3.2 字段定义

| 路径 | 类型 | 说明 |
|:---|:---|:---|
| `meta.lang` | string | 语言标识，取自源文件名 |
| `meta.title` | string | 文档一级标题（去除 `# ` 前缀），无则取文件名 |
| `meta.source` | string | 源文件相对路径（raw/ 目录下） |
| `meta.generated` | string | ISO 8601 时间戳，脚本生成时刻 |
| `sessions[].id` | string | 章节编号，取自 `## NN.` 的 NN 部分 |
| `sessions[].title` | string | 章节名称，取自 `## NN. Title` 的 Title 部分 |
| `sessions[].ref` | string\|null | 关联的 PDF 课件路径；若 `ref/` 中存在 `session-{id}.pdf` 则为 `"ref/session-{id}.pdf"`，否则为 `null` |
| `sessions[].blocks[].title` | string | 知识点块标题，取自 `### Title`；匿名块为空字符串 |
| `sessions[].blocks[].body` | string | 原始 Markdown 正文（保留换行和格式，不做 HTML 转换） |

### 3.3 JSON 约束

- `body` 字段保留原始 Markdown，**不**嵌入 HTML
- 所有字符串必须合法转义（`"` → `\"`, `\n` → `\\n` 等）
- 文件编码为 UTF-8 (无 BOM)
- 输出文件为单行 JSON 或格式化 JSON（推荐格式化以便调试）

---

## 4. 转换脚本 (`convert.js`)

### 4.1 调用方式

```bash
node convert.js              # 转换 raw/ 下所有 .md → content/
node convert.js --watch      # 监听模式，文件变化时自动重新转换
node convert.js --lang zh    # 仅转换指定的语言文件
```

### 4.2 脚本职责

1. 扫描 `raw/` 目录下所有 `*.md` 文件
2. 对每个文件执行解析（与前端 `parseMarkdown` 逻辑一致）
3. 提取元信息（lang, title, source, timestamp）
4. 组装 JSON 结构
5. 写入 `dist/{lang}.json`

### 4.3 解析规则（与前端 App 保持一致）

```
对于每一行：
  if 匹配 /^##\s+\d{2}\./ → 新 session 开始
  if 匹配 /^###\s+/       → 新 block 开始
  else                    → 追加到当前 block.body
```

### 4.4 错误处理

- 某文件解析失败 → 跳过该文件，stderr 输出错误信息，继续处理其他文件
- 源文件为空 → 输出空 sessions 数组，不报错
- 无 `##` 章节 → 整个内容放入一个 id="00" 的匿名 session

---

## 5. 同义词词典 (`synonyms.json`)

独立于内容文件，由 `mis-review.html` 直接加载。

```json
{
  "erp": ["企业资源计划", "enterprise resource planning"],
  "企业资源计划": ["enterprise resource planning", "erp"],
  "scm": ["供应链管理", "supply chain management"]
}
```

- Key: 触发搜索的词汇（小写英文 / 中文）
- Value: 扩展搜索的同义词列表
- 双向条目均需显式定义（A→B 和 B→A 各自一条）
- 编辑后无需运行 `convert.js`，刷新页面即生效

---

## 6. Agent 工作流

### 6.1 新增一个语言版本

1. 在 `raw/` 下创建 `{lang}.md`
2. 按 §2 格式编写内容
3. 运行 `node convert.js`
4. 在 `mis-review.html` 的工具栏中添加对应按钮

### 6.2 更新内容

1. 编辑 `raw/{lang}.md`
2. 运行 `node convert.js`
3. 刷新浏览器

### 6.3 新增同义词

1. 编辑 `synonyms.json`，添加双向条目
2. 刷新浏览器（无需运行 convert.js）

### 6.4 验证

```bash
node convert.js              # 确保无报错
cat dist/zh.json | head -50  # 检查输出结构
```

---

## 7. 版本兼容

| 版本 | 日期 | 变更 |
|:---|:---|:---|
| 1.1 | 2026-06-15 | 重命名目录: content→raw(源), dist→content(输出); 新增 ref/ 课件目录及 session-ref 自动关联 |
| 1.0 | 2026-06-15 | 初始版本 |
