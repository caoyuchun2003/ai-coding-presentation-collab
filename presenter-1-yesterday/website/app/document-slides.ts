export type DocumentSlide = {
  kind: "cover" | "compare" | "cards" | "chain" | "code" | "facts" | "list" | "track" | "route" | "end";
  kicker: string;
  label: string;
  title: string;
  desc?: string;
  footer?: string;
  cards?: string[][];
  blocks?: string[][];
  items?: string[][];
  left?: { title: string; items: string[] };
  right?: { title: string; items: string[] };
};

export const documentSlides: DocumentSlide[] = [
  {
    kind: "cover",
    kicker: "AI PROJECT DOCS / FIELD GUIDE",
    label: "AI 项目文档入口说明 · 详细版",
    title: "这个项目的\nAI 文档，\n应该先看什么？",
    desc: "真实目录结构 · 真实 Markdown · 逐项讲解",
    footer: "Symfony 3.3 · PHP 5.6.9 · Doctrine · 多套认证入口",
  },
  {
    kind: "compare",
    kicker: "01 / WHY AN ENTRY POINT",
    label: "为什么需要入口文档",
    title: "没有入口，\nAI 会先搞错。",
    desc: "因为代码库同时包含现状、历史分析和未来规划。",
    left: {
      title: "没有入口文档 · AI 可能混淆",
      items: ["Symfony 与 Laravel", "当前实现与迁移目标", "Web / H5 / App / Agent 认证", "不同接口响应格式", "PHP 5.6 与其他项目版本"],
    },
    right: {
      title: "有入口和索引 · AI 先确认",
      items: ["项目现在是什么", "任务属于哪个模块", "哪些规则不能违反", "应该读哪个专题文档", "怎样验证和记录结论"],
    },
  },
  {
    kind: "chain",
    kicker: "02 / THE DOCUMENT CHAIN",
    label: "四类资料的关系",
    title: "四类资料，\n一条导航链。",
    desc: "它们不是四份重复说明，而是从兼容入口到正式交付的不同层级。",
    items: [
      ["01", "AGENTS.md", "兼容入口", "告诉所有 AI 从哪里开始"],
      ["02", "CLAUDE.md", "项目主规则", "现状、环境、架构和铁律"],
      ["03", ".claude/", "本地分析库", "清单、风险、上下文和日志"],
      ["04", "docs/", "正式交付", "需求、测试和部署"],
    ],
  },
  {
    kind: "code",
    kicker: "03 / AGENTS.MD CONTENT",
    label: "AGENTS.md：真实内容片段",
    title: "短入口，\n只指路。",
    desc: "这个文件刻意保持简短，只维护“去哪里读”的信息。",
    blocks: [["01 / COMPATIBLE ENTRY", "AGENTS.md", "# AGENTS.md — AI 接手入口\n\n> 本项目的 AI 入口文档统一维护在 `CLAUDE.md`。\n> 无论你是 Codex、Claude、Cursor 还是其它 AI 助手，\n> 请直接阅读根目录的 `CLAUDE.md`。\n\n- 不要全量扫描代码库，先读 CLAUDE.md + 索引文档。\n- 当前框架是 Symfony 3.3，不是 Laravel。\n- 新系统按 docs/refactor/ 建 Laravel 13，旧代码仍按 Symfony 改。\n- 改接口前必读 .claude/response-code-chaos-analysis.md。"]],
  },
  {
    kind: "facts",
    kicker: "04 / AGENTS.MD PURPOSE",
    label: "AGENTS.md：每一段解决什么问题？",
    title: "单一事实来源，\n避免规则分叉。",
    desc: "核心设计：只维护一份完整规则，避免两份规则逐渐不一致。",
    items: [
      ["统一维护在 CLAUDE.md", "单一来源", "只维护一份完整规则，避免同步失败"],
      ["适用于多种 AI", "工具无关", "文件名虽然不同，但规则不绑定单一工具"],
      ["不要全量扫描", "先缩小范围", "先用文档缩小范围，再按需检索代码"],
      ["Symfony 不是 Laravel", "防写错系统", "防止把目标架构直接写进旧系统"],
      ["改接口先读风险分析", "入口提醒", "把最关键的专题文档放到入口层提醒"],
    ],
  },
  {
    kind: "code",
    kicker: "05 / CLAUDE.MD — STATUS",
    label: "CLAUDE.md：真实代码片段① 项目现状",
    title: "先建立定位，\n再谈细节。",
    desc: "开头先建立项目定位和当前技术事实。",
    blocks: [["01 / PROJECT TRUTH", "CLAUDE.md · 第 1–20 行", "# CLAUDE.md — AI 接手入口\n\n> 本文件是 AI 助手进入本项目的第一入口。\n> 不要全量扫描代码库，先读本文件 + 文档索引。\n\n## 0. 一句话定位\n新思课堂业务后端：图书、作业、考试、教师端、\nSmile 阅读、htAgent、短信登录等。\n\n⚠️ 当前框架是 Symfony 3.3，不是 Laravel。\n.claude/ 里的 laravel-* 是未落地的迁移规划。\n\nPHP >= 5.5.9 · Symfony 3.3（单体，6 个 Bundle）\nDoctrine ORM · FOSUserBundle + Symfony Guard"]],
  },
  {
    kind: "code",
    kicker: "06 / CLAUDE.MD — ENV",
    label: "CLAUDE.md：真实代码片段② 环境和命令",
    title: "环境事实，\n决定 AI 怎么写。",
    desc: "环境事实会直接决定 AI 生成什么语法、执行什么命令。",
    blocks: [["02 / ENVIRONMENT", "CLAUDE.md · 环境速查", "## 0.1 本地环境速查\n\n| 项        | 版本 / 路径              |\n| PHP CLI   | PHP 5.6.9 nts            |\n| 框架      | Symfony 3.3.14           |\n| MySQL     | 远程内网 192.168.10.168  |\n\n本项目用 PHP 5.6.9，与同机其他项目不同。\nSymfony 命令入口是：php bin/console ...\n不是 Laravel 的：php artisan ...\n\n本机未安装 composer；不要默认执行 composer install。"]],
    items: [["语法兼容", "必须按 PHP 5.6 写"], ["命令选择", "用 bin/console"], ["数据库边界", "远程内网，先确认"], ["依赖安装", "不要默认 composer"], ["验证版本", "用项目指定 PHP"]],
  },
  {
    kind: "code",
    kicker: "07 / CLAUDE.MD — INDEX & RULES",
    label: "CLAUDE.md：真实代码片段③ 索引和铁律",
    title: "主文件指路，\n专题承载细节。",
    desc: "主文件不承载全部细节，而是把任务导向专题文档。",
    blocks: [["03 / INDEX & IRON RULES", "CLAUDE.md · 文档索引与铁律", "## 1. 文档索引（按需读，别全读）\n\n改接口：.claude/response-code-chaos-analysis.md\n查接口：.claude/interface-list.csv\n验证码：.claude/docs/non-slider-captcha-inventory.md\nhtAgent：.claude/docs/htagent/\n历史操作：.claude/operations-log.md\n\n## 3. 铁律\n1. 响应格式极度混乱，不能套用别的接口格式。\n2. 现在是 Symfony 3.3，不是 Laravel。\n3. 多套登录并存，改认证先认清入口。\n4. 百炼原始 SSE 不得直接透传前端。"]],
  },
  {
    kind: "code",
    kicker: "08 / THE .CLAUDE TREE",
    label: ".claude/：当前真实目录结构",
    title: "一级目录、\n各司其职。",
    desc: "一级目录、专题目录和根文件都承担不同职责。",
    blocks: [["01 / DIRECTORY TREE", ".claude/", ".claude/\n├─ backups/\n│  └─ junshi_identity_before_20260819.sql\n├─ docs/\n│  ├─ aliyun-captcha-full-migration-plan.md\n│  ├─ non-slider-captcha-inventory.md\n│  ├─ smile-book-resource-structure.md\n│  ├─ trae.md\n│  └─ htagent/                 # 20 份专题资料\n├─ htEbook-sync-package-20260618-1025/\n│  ├─ 新增 / 公共、ZYX 专用\n│  ├─ 修改 / 公共、AX 专用\n│  └─ 说明.md\n├─ context-*.json\n├─ interface-*.csv\n├─ laravel-*.md\n├─ response-code-chaos-analysis.md\n├─ operations-log.md\n└─ review-report.md"]],
  },
  {
    kind: "list",
    kicker: "09 / CONTEXT & INTERFACE FILES",
    label: ".claude/ 根文件说明① 上下文与接口清单",
    title: "快速定位范围、\n路由和问题。",
    desc: "用于快速定位项目范围、路由和单个问题。",
    items: [["上下文", "context-initial.json", "项目初始扫描摘要"], ["上下文", "context-question-1.json", "针对单个问题的深挖上下文"], ["上下文", "context-htebook-functions.json", "htEbook 功能扫描结果"], ["上下文", "context-htebook-cross-projects.json", "htEbook 跨项目关系"], ["接口", "function-modules-and-interfaces.md", "模块、Bundle 与接口分布"], ["接口", "interface-list.csv", "逐条完整接口清单"], ["接口", "interface-module-counts.csv", "接口按模块统计"]],
  },
  {
    kind: "list",
    kicker: "10 / PLAN RISK LOG REVIEW",
    label: ".claude/ 根文件说明② 规划、风险、日志与审查",
    title: "规划、风险、\n历史与质量。",
    desc: "用于理解未来方案、历史原因和质量结论。注意：laravel-* 是迁移规划；response-code-chaos-analysis.md 描述当前风险。",
    items: [["规划", "laravel-refactor-analysis.md", "Laravel 迁移整体分析"], ["规划", "laravel-auth-foundation-analysis.md", "未来认证基座分析"], ["规划", "laravel-auth-api-contract.md", "未来认证接口契约"], ["风险", "response-code-chaos-analysis.md", "当前接口响应混乱风险"], ["日志", "operations-log-codex-project-scan.md", "某次项目扫描操作记录"], ["日志", "operations-log.md", "长期历史操作流水；有实质结论后追加末尾"], ["审查", "review-report.md", "阶段性审查与评分报告"]],
  },
  {
    kind: "cards",
    kicker: "11 / FOLDER ROLES",
    label: ".claude/ 文件夹说明",
    title: "三个一级目录，\n三种用途。",
    desc: "分别服务备份、专题知识和跨项目同步。",
    cards: [["backups/", "修改前本地备份", "当前示例：junshi_identity_before_20260819.sql。需要回看原始数据或差异时使用。"], ["docs/", "专题分析文档", "验证码、Smile 图书、Trae、htAgent。按业务主题组织稳定分析结论。"], ["htEbook-sync-package/", "跨项目同步包", "新增/修改分开；再区分公共、AX、ZYX。保留同步范围、来源和交付结构。"]],
  },
  {
    kind: "list",
    kicker: "12 / TOPIC DOCS",
    label: ".claude/docs/：专题文件说明",
    title: "按业务主题\n组织分析。",
    desc: "按业务主题组织，避免所有分析都堆在根目录。",
    items: [["验证码", "aliyun-captcha-full-migration-plan.md", "阿里云滑动验证码全场景迁移方案"], ["验证码", "non-slider-captcha-inventory.md", "传统图片验证码使用清单与迁移顺序"], ["图书", "smile-book-resource-structure.md", "Smile 图书资源和目录结构"], ["协作", "trae.md", "Trae 工具 / 协作相关记录"], ["智能体", "htagent/", "API、认证、数据库、测试完整专题"]],
  },
  {
    kind: "list",
    kicker: "13 / HTAGENT — ENTRY & PLAN",
    label: ".claude/docs/htagent/ 文件说明① 入口与规划",
    title: "从 README\n进入执行。",
    desc: "从 README 进入，再按设计、实施、上线阶段阅读。",
    items: [["入口", "README.md", "专题导航入口"], ["规划", "htagent-redesign-overview.md", "重设计总体说明"], ["规划", "htagent-api-redesign.md", "API 重设计方案"], ["计划", "htagent-development-tasklist.md", "开发任务拆分"], ["计划", "htagent-file-change-plan.md", "预计修改文件清单"], ["检查", "htagent-preflight-checklist.md", "开发前检查清单"], ["上线", "htagent-phase1-rollout-plan.md", "首期上线与回滚计划"], ["复盘", "htagent-final-review-summary.md", "最终审查结论"]],
  },
  {
    kind: "list",
    kicker: "14 / HTAGENT — CONTRACT",
    label: ".claude/docs/htagent/ 文件说明② 契约与实现",
    title: "契约、认证、\n错误与落地。",
    desc: "接口、认证、错误响应和 Symfony 3.3 实施细节。",
    items: [["契约", "htagent-api-contract.md", "后端 API 契约"], ["前端", "htagent-frontend-api.md", "前端调用方式"], ["认证", "htagent-request-auth-flow.md", "请求认证流程"], ["认证", "htagent-auth-token-design.md", "Token 设计"], ["错误", "htagent-error-response-spec.md", "统一错误响应规范"], ["实现", "htagent-symfony33-implementation.md", "Symfony 3.3 落地实现"], ["验收", "htagent-frontend-checklist.md", "前端联调与验收清单"]],
  },
  {
    kind: "list",
    kicker: "15 / HTAGENT — DB & TEST",
    label: ".claude/docs/htagent/ 文件说明③ 数据库与测试资产",
    title: "设计变成\n可执行资产。",
    desc: "结构设计、DDL、测试样例和 Postman 资产。把“设计说明”变成可执行的建表与接口验证资产。",
    items: [["设计", "htagent-db-schema-design.md", "数据模型与表结构设计"], ["DDL", "htagent-ddl-draft.md", "DDL 草案"], ["样例", "htagent-api-test-examples.md", "接口请求和响应测试样例"], ["Postman", "htagent.postman_collection.json", "可导入的 Postman 请求集合"], ["Postman", "htagent.postman_environment.json", "Postman 环境变量模板"]],
  },
  {
    kind: "code",
    kicker: "16 / OPERATIONS LOG",
    label: "操作日志怎么记？",
    title: "有实质结论，\n就主动落库。",
    desc: "可写关键代码线索（类方法、条件、改前改后），不要整段贴 Diff。完整实现看 Git / 专题文档。",
    blocks: [["01 / APPEND WITH KEY CODE", ".claude/operations-log.md", "## 2026-05-21 Codex：修复流式收尾 error 5002\n\n- 动作：assistant 已返回，事务却 ROLLBACK。\n- 原因：Doctrine charset=UTF8，模型回复含 4 字节字符。\n- 关键代码（ChatService 落库前）：\n  // before: $content 原样写入\n  // after:  $content = preg_replace('/[\\x{10000}-\\x{10FFFF}]/u', '', $content);\n- 涉及：ChatService.php · ht_agent_message\n- 验证：php -l；流式结束不再 5002。\n\n原则：3～5 行关键逻辑即可；大段代码不进日志。"]],
    items: [["何时记", "有实质结论后主动记"], ["记什么", "日期·动作·关键代码·结论"], ["可写代码", "类方法 / 条件 / 改前改后"], ["不写代码", "整函数 · 完整 Diff"], ["连带落库", "规则→专题 · Bug→bug 文档"]],
  },
  {
    kind: "route",
    kicker: "17 / THE HANDOFF LOOP",
    label: "新任务的正确接手流程",
    title: "新任务接手，\n按四步收口。",
    desc: "从入口规则到专题知识，再回到代码和验证。最终判断依据：运行时行为 → 当前代码 → 测试结果 → 分析文档。",
    items: [["01", "读入口", "AGENTS.md / CLAUDE.md · 确认现状和禁区"], ["02", "选专题", ".claude/ · 按任务读取清单、风险和历史结论"], ["03", "定位代码", "路由 → Controller → Service → Entity / 配置"], ["04", "验证留痕", "命令 / Diff / 测试 → 追加 operations-log.md"]],
  },
  {
    kind: "end",
    kicker: "18 / QUICK REFERENCE",
    label: "一页速查：遇到问题应该看哪里？",
    title: "先建立事实，\n再让 AI 动手。",
    items: [["AGENTS.md", "入口在哪里、哪些提醒必须先看到？"], ["CLAUDE.md", "当前项目、环境、架构、铁律和落库规则？"], ["operations-log.md", "某次改动为何发生、本次该怎么追加记录？"], [".claude/docs/", "验证码、Smile、htAgent 等专题如何落地？"], ["docs/", "正式需求、测试、部署与团队交付是什么？"]],
    desc: "先建立当前事实，再按任务取上下文，最后用代码和验证收口。文档不是 AI 的附属品，而是 AI 进入真实项目时的第一层工程基础设施。",
  },
];
