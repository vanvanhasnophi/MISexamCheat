# Agent Prompt — 知识点内容与同义词词典生成

> 面向外部 AI Agent。输出产物：`raw/content.md` + `synonyms.json`。
> 含**有条件输出**指令：Agent 需先判断自己能否写文件，再选择输出方式。

---

## 背景

用户正在构建一个知识检索 Web App，按章节和知识点块组织内容，支持中英文切换、同义词搜索、课件页码跳转。

## 源材料

用户会在对话中附带源材料（如课程 PPT 文本提取、教材笔记等）。请先完整阅读附件，理解其结构和主题。

## 产物

生成 **两个文件**：

| 文件 | 格式 | 说明 |
|:---|:---|:---|
| `raw/content.md` | 双语 Markdown | 中英文合并在同一文件，共享章节和块结构 |
| `synonyms.json` | JSON | 中英文同义词双向词典，从内容中提取 |

---

## 一、content.md 格式规范

```
# English Title | 中文标题

---
## 01. English Chapter Title | 中文章节标题  <!-- ref: lecture-01-slides.pdf -->

### English Block Title | 中文块标题  <!-- p=5 -->

[en]
English content. Use standard Markdown:
- list items
- **bold** for key terms
- `code` for abbreviations

Tables:
| Col1 | Col2 |
|:---|:---|
| Val1 | Val2 |
[/en]

[zh]
中文内容。使用标准 Markdown：
- 列表项
- **粗体** 强调关键术语
- `代码` 包裹技术缩写

表格：
| 列1 | 列2 |
|:---|:---|
| 值1 | 值2 |
[/zh]

---
## 02. ...
```

### 硬性约束

| 规则 | 说明 |
|:---|:---|
| 章节标题: `## NN. EN \| ZH` | `NN` 两位数字编号，` \| ` 分隔中英文 |
| 块标题: `### EN \| ZH` | ` \| ` 两侧各为对应语言标题 |
| 英文正文用 `[en]...[/en]` 包裹 | 独占行，`[/en]` 后留空行 |
| 中文正文用 `[zh]...[/zh]` 包裹 | 独占行，`[/zh]` 后留空行 |
| 表格必须有 `\|:---\|` 分隔行 | 至少三个连字符 |
| 正文内不要出现 `##` 或 `###` | 会被解析器误判为边界 |
| 章节间用 `---` 分隔 | 必须 |
| 文件编码 UTF-8 无 BOM | 确保多语言正常 |
| 每个块必须同时有 `[en]` 和 `[zh]` | 一一对应，缺一不可 |

### 课件链接与页码

| 注释 | 位置 | 说明 |
|:---|:---|:---|
| `<!-- ref: file.pdf -->` | 章节标题行 | 关联 `ref/` 目录中的 PDF 课件，使用原文件名 |
| `<!-- p=N -->` | 块标题行 | 标注该知识点在课件中首次出现的页码 |

- PDF 放入 `ref/` 目录，无需重命名
- 不加 `ref` = 无链接；不加 `p` = 不显示页码
- 链接格式：`ref/file.pdf#page=N`，浏览器自动跳转
- 每个块应标注其内容首次出现的页码

### 内容要求

- 中英文详细程度完全相同，章节和块一一对应
- 保留概念定义和方法论细节
- 案例简化为梗概（3~5 句：背景 → 关键问题 → 结果 → 教训）
- 保留图片引用（如 `Image source: example.com`）
- 保留完整表格
- 使用规范化的术语表述——同一概念在中英文中使用对应的标准术语

---

## 二、synonyms.json 格式规范

```json
{
  "缩写或术语": ["同义词1", "同义词2"],
  "中文全称": ["英文全称", "缩写"]
}
```

### 规则

| 规则 | 示例 |
|:---|:---|
| 双向显式定义 | `"erp": ["企业资源计划"]` 和 `"企业资源计划": ["erp"]` 各自一条 |
| Key 为小写英文或中文原文 | `"scm"` / `"供应链管理"` |
| Value 列出所有等同表述 | 至少包含中英文各一个 |
| 与内容中使用的术语一致 | 内容用"企业资源计划"，词典就不能用"企业资源规划" |
| JSON 合法 | 无尾逗号、双引号正确 |
| 条目数 | 50~120 条 |

### 术语提取范围

从 content.md 中提取：
- 领域缩写（ERP, SCM, CRM, DSS, TPS, ESS, OLAP, OLTP, BPR, TQM...）
- 核心概念（Porter's Five Forces, Value Chain, Bullwhip Effect, Normalization...）
- 方法论和框架（SDLC, Agile, Scrum, DevOps, UML, DFD, ERD, JAD, STROBE...）
- 技术术语（DBMS, Data Warehouse, Data Mining, NoSQL, Vector Database, RAG...）

---

## 输出条件判断

**→ 如果你能写文件（有 Write / Edit 类工具）：**
1. 将内容写入 `raw/content.md`
2. 将词典写入 `synonyms.json`

**→ 如果你不能写文件（仅能输出文本）：**
````
=== FILE: raw/content.md ===
（完整双语 Markdown）
=== END FILE ===

=== FILE: synonyms.json ===
（完整 JSON）
=== END FILE ===
````
