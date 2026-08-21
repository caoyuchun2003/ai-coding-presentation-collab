import{r as e}from"./rolldown-runtime-C60lm6uB.js";import{i as t,r as n}from"./framework-BgSIrAUN.js";var r=e(n(),1),i=[{kind:`cover`,kicker:`AI PROJECT DOCS / FIELD GUIDE`,label:`AI 项目文档入口说明 · 详细版`,title:`这个项目的
AI 文档，
应该先看什么？`,desc:`真实目录结构 · 真实 Markdown · 逐项讲解`,footer:`Symfony 3.3 · PHP 5.6.9 · Doctrine · 多套认证入口`},{kind:`compare`,kicker:`01 / WHY AN ENTRY POINT`,label:`为什么需要入口文档`,title:`没有入口，
AI 会先搞错。`,desc:`因为代码库同时包含现状、历史分析和未来规划。`,left:{title:`没有入口文档 · AI 可能混淆`,items:[`Symfony 与 Laravel`,`当前实现与迁移目标`,`Web / H5 / App / Agent 认证`,`不同接口响应格式`,`PHP 5.6 与其他项目版本`]},right:{title:`有入口和索引 · AI 先确认`,items:[`项目现在是什么`,`任务属于哪个模块`,`哪些规则不能违反`,`应该读哪个专题文档`,`怎样验证和记录结论`]}},{kind:`chain`,kicker:`02 / THE DOCUMENT CHAIN`,label:`四类资料的关系`,title:`四类资料，
一条导航链。`,desc:`它们不是四份重复说明，而是从兼容入口到正式交付的不同层级。`,items:[[`01`,`AGENTS.md`,`兼容入口`,`告诉所有 AI 从哪里开始`],[`02`,`CLAUDE.md`,`项目主规则`,`现状、环境、架构和铁律`],[`03`,`.claude/`,`本地分析库`,`清单、风险、上下文和日志`],[`04`,`docs/`,`正式交付`,`需求、测试和部署`]]},{kind:`code`,kicker:`03 / AGENTS.MD CONTENT`,label:`AGENTS.md：真实内容片段`,title:`短入口，
只指路。`,desc:`这个文件刻意保持简短，只维护“去哪里读”的信息。`,blocks:[[`01 / COMPATIBLE ENTRY`,`AGENTS.md`,`# AGENTS.md — AI 接手入口

> 本项目的 AI 入口文档统一维护在 \`CLAUDE.md\`。
> 无论你是 Codex、Claude、Cursor 还是其它 AI 助手，
> 请直接阅读根目录的 \`CLAUDE.md\`。

- 不要全量扫描代码库，先读 CLAUDE.md + 索引文档。
- 当前框架是 Symfony 3.3，不是 Laravel。
- 新系统按 docs/refactor/ 建 Laravel 13，旧代码仍按 Symfony 改。
- 改接口前必读 .claude/response-code-chaos-analysis.md。`]]},{kind:`facts`,kicker:`04 / AGENTS.MD PURPOSE`,label:`AGENTS.md：每一段解决什么问题？`,title:`单一事实来源，
避免规则分叉。`,desc:`核心设计：只维护一份完整规则，避免两份规则逐渐不一致。`,items:[[`统一维护在 CLAUDE.md`,`单一来源`,`只维护一份完整规则，避免同步失败`],[`适用于多种 AI`,`工具无关`,`文件名虽然不同，但规则不绑定单一工具`],[`不要全量扫描`,`先缩小范围`,`先用文档缩小范围，再按需检索代码`],[`Symfony 不是 Laravel`,`防写错系统`,`防止把目标架构直接写进旧系统`],[`改接口先读风险分析`,`入口提醒`,`把最关键的专题文档放到入口层提醒`]]},{kind:`code`,kicker:`05 / CLAUDE.MD — STATUS`,label:`CLAUDE.md：真实代码片段① 项目现状`,title:`先建立定位，
再谈细节。`,desc:`开头先建立项目定位和当前技术事实。`,blocks:[[`01 / PROJECT TRUTH`,`CLAUDE.md · 第 1–20 行`,`# CLAUDE.md — AI 接手入口

> 本文件是 AI 助手进入本项目的第一入口。
> 不要全量扫描代码库，先读本文件 + 文档索引。

## 0. 一句话定位
新思课堂业务后端：图书、作业、考试、教师端、
Smile 阅读、htAgent、短信登录等。

⚠️ 当前框架是 Symfony 3.3，不是 Laravel。
.claude/ 里的 laravel-* 是未落地的迁移规划。

PHP >= 5.5.9 · Symfony 3.3（单体，6 个 Bundle）
Doctrine ORM · FOSUserBundle + Symfony Guard`]]},{kind:`code`,kicker:`06 / CLAUDE.MD — ENV`,label:`CLAUDE.md：真实代码片段② 环境和命令`,title:`环境事实，
决定 AI 怎么写。`,desc:`环境事实会直接决定 AI 生成什么语法、执行什么命令。`,blocks:[[`02 / ENVIRONMENT`,`CLAUDE.md · 环境速查`,`## 0.1 本地环境速查

| 项        | 版本 / 路径              |
| PHP CLI   | PHP 5.6.9 nts            |
| 框架      | Symfony 3.3.14           |
| MySQL     | 远程内网 192.168.10.168  |

本项目用 PHP 5.6.9，与同机其他项目不同。
Symfony 命令入口是：php bin/console ...
不是 Laravel 的：php artisan ...

本机未安装 composer；不要默认执行 composer install。`]],items:[[`语法兼容`,`必须按 PHP 5.6 写`],[`命令选择`,`用 bin/console`],[`数据库边界`,`远程内网，先确认`],[`依赖安装`,`不要默认 composer`],[`验证版本`,`用项目指定 PHP`]]},{kind:`code`,kicker:`07 / CLAUDE.MD — INDEX & RULES`,label:`CLAUDE.md：真实代码片段③ 索引和铁律`,title:`主文件指路，
专题承载细节。`,desc:`主文件不承载全部细节，而是把任务导向专题文档。`,blocks:[[`03 / INDEX & IRON RULES`,`CLAUDE.md · 文档索引与铁律`,`## 1. 文档索引（按需读，别全读）

改接口：.claude/response-code-chaos-analysis.md
查接口：.claude/interface-list.csv
验证码：.claude/docs/non-slider-captcha-inventory.md
htAgent：.claude/docs/htagent/
历史操作：.claude/operations-log.md

## 3. 铁律
1. 响应格式极度混乱，不能套用别的接口格式。
2. 现在是 Symfony 3.3，不是 Laravel。
3. 多套登录并存，改认证先认清入口。
4. 百炼原始 SSE 不得直接透传前端。`]]},{kind:`code`,kicker:`08 / THE .CLAUDE TREE`,label:`.claude/：当前真实目录结构`,title:`一级目录、
各司其职。`,desc:`一级目录、专题目录和根文件都承担不同职责。`,blocks:[[`01 / DIRECTORY TREE`,`.claude/`,`.claude/
├─ backups/
│  └─ junshi_identity_before_20260819.sql
├─ docs/
│  ├─ aliyun-captcha-full-migration-plan.md
│  ├─ non-slider-captcha-inventory.md
│  ├─ smile-book-resource-structure.md
│  ├─ trae.md
│  └─ htagent/                 # 20 份专题资料
├─ htEbook-sync-package-20260618-1025/
│  ├─ 新增 / 公共、ZYX 专用
│  ├─ 修改 / 公共、AX 专用
│  └─ 说明.md
├─ context-*.json
├─ interface-*.csv
├─ laravel-*.md
├─ response-code-chaos-analysis.md
├─ operations-log.md
└─ review-report.md`]]},{kind:`list`,kicker:`09 / CONTEXT & INTERFACE FILES`,label:`.claude/ 根文件说明① 上下文与接口清单`,title:`快速定位范围、
路由和问题。`,desc:`用于快速定位项目范围、路由和单个问题。`,items:[[`上下文`,`context-initial.json`,`项目初始扫描摘要`],[`上下文`,`context-question-1.json`,`针对单个问题的深挖上下文`],[`上下文`,`context-htebook-functions.json`,`htEbook 功能扫描结果`],[`上下文`,`context-htebook-cross-projects.json`,`htEbook 跨项目关系`],[`接口`,`function-modules-and-interfaces.md`,`模块、Bundle 与接口分布`],[`接口`,`interface-list.csv`,`逐条完整接口清单`],[`接口`,`interface-module-counts.csv`,`接口按模块统计`]]},{kind:`list`,kicker:`10 / PLAN RISK LOG REVIEW`,label:`.claude/ 根文件说明② 规划、风险、日志与审查`,title:`规划、风险、
历史与质量。`,desc:`用于理解未来方案、历史原因和质量结论。注意：laravel-* 是迁移规划；response-code-chaos-analysis.md 描述当前风险。`,items:[[`规划`,`laravel-refactor-analysis.md`,`Laravel 迁移整体分析`],[`规划`,`laravel-auth-foundation-analysis.md`,`未来认证基座分析`],[`规划`,`laravel-auth-api-contract.md`,`未来认证接口契约`],[`风险`,`response-code-chaos-analysis.md`,`当前接口响应混乱风险`],[`日志`,`operations-log-codex-project-scan.md`,`某次项目扫描操作记录`],[`日志`,`operations-log.md`,`长期历史操作流水；有实质结论后追加末尾`],[`审查`,`review-report.md`,`阶段性审查与评分报告`]]},{kind:`cards`,kicker:`11 / FOLDER ROLES`,label:`.claude/ 文件夹说明`,title:`三个一级目录，
三种用途。`,desc:`分别服务备份、专题知识和跨项目同步。`,cards:[[`backups/`,`修改前本地备份`,`当前示例：junshi_identity_before_20260819.sql。需要回看原始数据或差异时使用。`],[`docs/`,`专题分析文档`,`验证码、Smile 图书、Trae、htAgent。按业务主题组织稳定分析结论。`],[`htEbook-sync-package/`,`跨项目同步包`,`新增/修改分开；再区分公共、AX、ZYX。保留同步范围、来源和交付结构。`]]},{kind:`list`,kicker:`12 / TOPIC DOCS`,label:`.claude/docs/：专题文件说明`,title:`按业务主题
组织分析。`,desc:`按业务主题组织，避免所有分析都堆在根目录。`,items:[[`验证码`,`aliyun-captcha-full-migration-plan.md`,`阿里云滑动验证码全场景迁移方案`],[`验证码`,`non-slider-captcha-inventory.md`,`传统图片验证码使用清单与迁移顺序`],[`图书`,`smile-book-resource-structure.md`,`Smile 图书资源和目录结构`],[`协作`,`trae.md`,`Trae 工具 / 协作相关记录`],[`智能体`,`htagent/`,`API、认证、数据库、测试完整专题`]]},{kind:`list`,kicker:`13 / HTAGENT — ENTRY & PLAN`,label:`.claude/docs/htagent/ 文件说明① 入口与规划`,title:`从 README
进入执行。`,desc:`从 README 进入，再按设计、实施、上线阶段阅读。`,items:[[`入口`,`README.md`,`专题导航入口`],[`规划`,`htagent-redesign-overview.md`,`重设计总体说明`],[`规划`,`htagent-api-redesign.md`,`API 重设计方案`],[`计划`,`htagent-development-tasklist.md`,`开发任务拆分`],[`计划`,`htagent-file-change-plan.md`,`预计修改文件清单`],[`检查`,`htagent-preflight-checklist.md`,`开发前检查清单`],[`上线`,`htagent-phase1-rollout-plan.md`,`首期上线与回滚计划`],[`复盘`,`htagent-final-review-summary.md`,`最终审查结论`]]},{kind:`list`,kicker:`14 / HTAGENT — CONTRACT`,label:`.claude/docs/htagent/ 文件说明② 契约与实现`,title:`契约、认证、
错误与落地。`,desc:`接口、认证、错误响应和 Symfony 3.3 实施细节。`,items:[[`契约`,`htagent-api-contract.md`,`后端 API 契约`],[`前端`,`htagent-frontend-api.md`,`前端调用方式`],[`认证`,`htagent-request-auth-flow.md`,`请求认证流程`],[`认证`,`htagent-auth-token-design.md`,`Token 设计`],[`错误`,`htagent-error-response-spec.md`,`统一错误响应规范`],[`实现`,`htagent-symfony33-implementation.md`,`Symfony 3.3 落地实现`],[`验收`,`htagent-frontend-checklist.md`,`前端联调与验收清单`]]},{kind:`list`,kicker:`15 / HTAGENT — DB & TEST`,label:`.claude/docs/htagent/ 文件说明③ 数据库与测试资产`,title:`设计变成
可执行资产。`,desc:`结构设计、DDL、测试样例和 Postman 资产。把“设计说明”变成可执行的建表与接口验证资产。`,items:[[`设计`,`htagent-db-schema-design.md`,`数据模型与表结构设计`],[`DDL`,`htagent-ddl-draft.md`,`DDL 草案`],[`样例`,`htagent-api-test-examples.md`,`接口请求和响应测试样例`],[`Postman`,`htagent.postman_collection.json`,`可导入的 Postman 请求集合`],[`Postman`,`htagent.postman_environment.json`,`Postman 环境变量模板`]]},{kind:`code`,kicker:`16 / OPERATIONS LOG`,label:`操作日志怎么记？`,title:`有实质结论，
就主动落库。`,desc:`可写关键代码线索（类方法、条件、改前改后），不要整段贴 Diff。完整实现看 Git / 专题文档。`,blocks:[[`01 / APPEND WITH KEY CODE`,`.claude/operations-log.md`,`## 2026-05-21 Codex：修复流式收尾 error 5002

- 动作：assistant 已返回，事务却 ROLLBACK。
- 原因：Doctrine charset=UTF8，模型回复含 4 字节字符。
- 关键代码（ChatService 落库前）：
  // before: $content 原样写入
  // after:  $content = preg_replace('/[\\x{10000}-\\x{10FFFF}]/u', '', $content);
- 涉及：ChatService.php · ht_agent_message
- 验证：php -l；流式结束不再 5002。

原则：3～5 行关键逻辑即可；大段代码不进日志。`]],items:[[`何时记`,`有实质结论后主动记`],[`记什么`,`日期·动作·关键代码·结论`],[`可写代码`,`类方法 / 条件 / 改前改后`],[`不写代码`,`整函数 · 完整 Diff`],[`连带落库`,`规则→专题 · Bug→bug 文档`]]},{kind:`route`,kicker:`17 / THE HANDOFF LOOP`,label:`新任务的正确接手流程`,title:`新任务接手，
按四步收口。`,desc:`从入口规则到专题知识，再回到代码和验证。最终判断依据：运行时行为 → 当前代码 → 测试结果 → 分析文档。`,items:[[`01`,`读入口`,`AGENTS.md / CLAUDE.md · 确认现状和禁区`],[`02`,`选专题`,`.claude/ · 按任务读取清单、风险和历史结论`],[`03`,`定位代码`,`路由 → Controller → Service → Entity / 配置`],[`04`,`验证留痕`,`命令 / Diff / 测试 → 追加 operations-log.md`]]},{kind:`end`,kicker:`18 / QUICK REFERENCE`,label:`一页速查：遇到问题应该看哪里？`,title:`先建立事实，
再让 AI 动手。`,items:[[`AGENTS.md`,`入口在哪里、哪些提醒必须先看到？`],[`CLAUDE.md`,`当前项目、环境、架构、铁律和落库规则？`],[`operations-log.md`,`某次改动为何发生、本次该怎么追加记录？`],[`.claude/docs/`,`验证码、Smile、htAgent 等专题如何落地？`],[`docs/`,`正式需求、测试、部署与团队交付是什么？`]],desc:`先建立当前事实，再按任务取上下文，最后用代码和验证收口。文档不是 AI 的附属品，而是 AI 进入真实项目时的第一层工程基础设施。`}],a=t(),o=[{kind:`intro`,kicker:`AI CODING / SHARING`,label:`分享介绍`,title:`AI 编程实践分享。
从工具到落地。`,desc:`实际使用的 Coding Agent、Agent 架构，以及 AI 如何接手真实项目。`,footer:`时间 / 地点：下午 3:00–4:00  ·  第四会议室`,items:[[`分享人`,`曹宇春 · 谢洋`,`两个人一起分享工具实践与项目落地`],[`PART I`,`Agent 工具与架构`,`Cursor · Codex · OpenCode · DeepSeek Harness · Pi；日常编码、复杂任务、多模态与 Agent 内部组成`],[`PART II`,`AI 如何接手真实项目`,`先读规则、上下文和专题资料，再开始改代码`],[`适合谁`,`产品、研发与技术管理者`,`了解工具差异，建立自己的 AI 编程工作流`]]},{kind:`cover`,kicker:`PART I / MY CODING AGENTS`,label:`我的 Agent 工具栈`,title:`我的 Coding Agent
工具栈与架构。`,desc:`Cursor · Codex · OpenCode · DeepSeek Harness · Pi / Model · Harness · Tools · Context`},{kind:`cards`,kicker:`01 / MY DAILY STACK`,label:`我为什么用多个 Agent`,title:`不是重复采购，
而是不同角色。`,desc:`我实际使用的几个 Agent，分别覆盖日常编码、复杂任务、备用通道和 Agent 工程。`,items:[[`01`,`日常主力`,`Cursor：编辑器里顺手完成连续开发`],[`02`,`复杂任务`,`Codex：GPT 与 Coding Agent 合并后的全能型 Agent；适合多步骤、全仓库和长任务`],[`03`,`备用通道`,`OpenCode：开箱即用，成本友好，可切换`],[`04`,`Agent 工程`,`DeepSeek Harness / Pi：理解和改造 Agent 内部组成，Agent 工程师必备`]]},{kind:`chain`,kicker:`02 / MY AGENT MAP`,label:`我使用的 Agent`,title:`先看工具，
再看它们怎么协作。`,desc:`每个工具都不是孤立的，真正的组合是：主力开发 + 全能 Agent + 备用能力 + 实验室。`,items:[[`01`,`Cursor`,`IDE 原生`,`日常编码和快速迭代`],[`02`,`Codex`,`GPT × Coding Agent`,`对话、Site、远程控制、图片生成，以及全仓库长任务`],[`03`,`OpenCode`,`开源通道`,`低成本备选和模型切换`],[`04`,`DeepSeek Harness`,`可改造平台`,`插件、上下文和 Agent Loop`],[`05`,`Pi`,`极简工具箱`,`用积木理解 Agent`]]},{kind:`cards`,kicker:`03 / GPT × CODEX`,label:`全能型能力`,title:`不是只会写代码，
而是完整的工作入口。`,desc:`我用 Codex 比较多的原因，是 GPT 的对话能力和 Coding Agent 能力合在了一起。`,items:[[`01`,`语音协作`,`像和同事一样连续讨论问题、追问和确认`],[`02`,`GPT Site`,`从一句需求生成可预览、可修改、可部署的网站`],[`03`,`Remote Control`,`让 Agent 操作电脑、浏览页面并验证结果`],[`04`,`图片设计`,`把产品想法先变成视觉草图、UI 方案和原型方向`]]},{kind:`chain`,kicker:`04 / VOICE COLLABORATION`,label:`语音功能`,title:`从打字交互，
变成实时协作。`,desc:`它不只是把文字读出来，而是可以像和同事交流一样持续沟通。`,items:[[`01`,`自然对话`,`直接说目标`,`不必先整理成命令`],[`02`,`连续上下文`,`追问和补充`,`可以随时调整方向`],[`03`,`任务跟进`,`布置和询问`,`讨论进度与结果`],[`04`,`人工收口`,`最后确认`,`高风险操作仍由人决定`]]},{kind:`route`,kicker:`05 / GPT SITES`,label:`GPT Site 建站`,title:`从一个想法，
到一个能用的网站。`,desc:`描述需求，生成预览，持续修改，最后发布分享；适合内部页面、看板、报告和轻量应用。`,url:`https://chatgpt.com/sites`,items:[[`01`,`描述需求`,`对象、内容、风格和功能`,`先把想法说清楚`],[`02`,`生成预览`,`网站或轻量应用`,`马上看到结果`],[`03`,`持续修改`,`布局、内容和交互`,`边看边改`],[`04`,`发布分享`,`生成站点地址`,`从原型走向交付`]]},{kind:`cards`,kicker:`06 / GPT IMAGE FOR DESIGN`,label:`产品设计`,title:`先把想法看见，
再决定怎么实现。`,desc:`图片能力可以用于产品设计前期：探索风格、生成 UI 草图、修改截图，再交给 Codex 落地。`,items:[[`01`,`概念探索`,`同一需求快速生成多种视觉方向`],[`02`,`UI 草图`,`把用户故事变成首页、看板或移动端方案`],[`03`,`方案迭代`,`修改颜色、布局、组件和品牌风格`],[`04`,`交给 Codex`,`选定方向后继续生成真实网站和原型`]]},{kind:`usecases`,kicker:`07 / OFFICIAL USE CASES`,label:`工作流案例`,title:`AI 的下一个能力，
是学会复用。`,desc:`OpenAI Use Cases 把真实任务拆成可学习、可复用的工作方式，帮助人和 Agent 一起建立稳定流程。`,url:`https://learn.chatgpt.com/use-cases`,items:[[`01`,`从任务出发`,`不是罗列功能，而是展示不同工作目标如何被完成。`],[`02`,`沉淀方法`,`把一次成功的对话整理成可重复的步骤。`],[`03`,`连接 Agent`,`技能、上下文和工具组合起来，能力才会稳定。`],[`04`,`适合借鉴`,`从案例中挑一个真实工作流，改成团队自己的版本。`]]},{kind:`chain`,kicker:`08 / DEEPSEEK HARNESS`,label:`Agent 领域的 Laravel`,title:`不是拿来用，
而是拿来构建。`,desc:`DeepSeek Harness 基于插件系统，把 Agent 的关键组成拆开，让开发者可以替换、组合和改造。`,items:[[`01`,`Model Adapter`,`模型接入`,`不同模型可以按需替换`],[`02`,`Tool Registry`,`工具注册`,`把文件、Shell、网页和 API 接进来`],[`03`,`Session / Memory`,`状态记忆`,`保存会话、上下文和历史结论`],[`04`,`Agent Loop`,`运行循环`,`连 Agent 怎么思考和推进都可以改`]]},{kind:`cards`,kicker:`09 / EVERYTHING IS A PLUGIN`,label:`为什么值得研究`,title:`从使用 Agent，
到构建 Agent。`,desc:`它让 Agent 的内部结构变得可见、可改、可重组，但灵活性也带来更高的工程复杂度。`,items:[[`01`,`可见`,`把模型、工具、会话和 Agent Loop 显性化`],[`02`,`可替换`,`不必把模型和工具能力写死在产品里`],[`03`,`可组合`,`像搭建应用一样按需组装 Agent`],[`04`,`有代价`,`插件依赖、配置和调试都更复杂`]]},{kind:`matrix`,kicker:`10 / AGENT ARCHITECTURE`,label:`Agent 架构`,title:`Agent 不只是模型，
而是一套工作系统。`,desc:`我更喜欢用一家公司来理解 Agent：模型负责专业判断，Runtime 提供组织环境，Harness 负责总协调。`,items:[[`Model`,`高级工程师`,`负责理解、推理和生成，但需要组织提供环境与权限`],[`Agent Runtime`,`公司运营体系`,`管理会话、状态、权限、资源和执行环境`],[`Harness`,`集团总办`,`拆解目标、调度工具、收集结果并推动循环`],[`Tools`,`专业部门 / 外部服务`,`读写文件、执行命令、浏览网页和调用 API`],[`Context`,`当前项目资料`,`需求、代码、规则和任务背景`],[`Memory`,`公司档案 / 知识库`,`沉淀历史经验、长期规则和项目结论`],[`Workflow`,`制度与流程`,`规定协作、验收、审批和人工收口`]]},{kind:`end`,kicker:`11 / MY TAKEAWAY`,label:`我的判断`,title:`选 Agent 的重点，
是理解整套架构。`,desc:`工具会变化，但模型、Harness、工具、上下文和工作流这几个层次会持续存在。`,items:[[`日常`,`Cursor`,`把 Agent 放在编辑器里`],[`能力`,`Codex`,`GPT + Codex，多生态、多模态，适合复杂任务`],[`弹性`,`OpenCode`,`保留低成本和可替代性`],[`理解`,`Harness / Pi`,`研究 Agent 为什么这样工作`]],note:`我的结论 / 不是哪个 Agent 最强，而是哪套架构最适合当前工作。`}],s=i;function c({slide:e}){let t=e.title.split(`
`);return(0,a.jsx)(`div`,{className:`unified-heading`,children:(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`h1`,{children:t.map((e,n)=>(0,a.jsxs)(`span`,{children:[n>0&&(0,a.jsx)(`br`,{}),(0,a.jsx)(`em`,{className:n===t.length-1?`accent`:``,children:e})]},e))}),e.desc&&(0,a.jsxs)(`p`,{children:[e.desc,e.kind===`route`&&e.url&&(0,a.jsxs)(a.Fragment,{children:[` `,(0,a.jsx)(`a`,{className:`inline-route-link`,href:e.url,target:`_blank`,rel:`noreferrer`,children:`进入 GPT Sites ↗`})]})]})]})})}function l({slide:e}){return e.kind===`cover`?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(`div`,{className:`unified-kicker`,children:[(0,a.jsx)(`span`,{className:`orange-dot`}),` `,e.kicker]}),(0,a.jsx)(c,{slide:e}),(0,a.jsxs)(`div`,{className:`cover-graphic`,children:[(0,a.jsxs)(`div`,{children:[`PROJECT`,(0,a.jsx)(`br`,{}),(0,a.jsx)(`b`,{children:`MAP`})]}),(0,a.jsx)(`span`,{children:`MODEL`}),(0,a.jsx)(`span`,{children:`TOOLS`}),(0,a.jsx)(`span`,{children:`CONTEXT`}),(0,a.jsx)(`span`,{children:`WORKFLOW`})]}),(0,a.jsxs)(`div`,{className:`unified-footer`,children:[(0,a.jsx)(`span`,{children:e.footer||e.desc}),(0,a.jsx)(`span`,{children:`← / → 开始浏览`})]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(`div`,{className:`unified-topline`,children:[(0,a.jsx)(`span`,{children:e.kicker}),(0,a.jsx)(`span`,{children:e.label})]}),(0,a.jsx)(c,{slide:e}),e.kind===`intro`&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`div`,{className:`intro-event`,children:e.footer}),(0,a.jsx)(`div`,{className:`content-intro`,children:e.items?.map(([e,t,n])=>(0,a.jsxs)(`article`,{children:[(0,a.jsx)(`span`,{children:e}),(0,a.jsx)(`strong`,{children:t}),(0,a.jsx)(`p`,{children:n})]},e))})]}),e.kind===`usecases`&&(0,a.jsxs)(`div`,{className:`content-usecases`,children:[(0,a.jsxs)(`article`,{className:`usecases-link-card`,children:[(0,a.jsx)(`span`,{children:`OFFICIAL RESOURCE / OPENAI`}),(0,a.jsxs)(`strong`,{children:[`ChatGPT`,(0,a.jsx)(`br`,{}),`Use Cases`]}),(0,a.jsx)(`p`,{children:`从分析、写作到研究和编码，看看真实工作流如何被拆解、复用和沉淀。`}),(0,a.jsx)(`a`,{href:e.url,target:`_blank`,rel:`noreferrer`,children:`打开官方案例 ↗`})]}),(0,a.jsx)(`div`,{className:`usecases-points`,children:e.items?.map(([e,t,n])=>(0,a.jsxs)(`article`,{children:[(0,a.jsx)(`span`,{children:e}),(0,a.jsx)(`strong`,{children:t}),(0,a.jsx)(`p`,{children:n})]},e))})]}),e.kind===`compare`&&(0,a.jsxs)(`div`,{className:`content-compare`,children:[(0,a.jsxs)(`article`,{children:[(0,a.jsx)(`h3`,{children:e.left?.title}),(0,a.jsx)(`ul`,{children:e.left?.items.map(e=>(0,a.jsx)(`li`,{children:e},e))})]}),(0,a.jsxs)(`article`,{children:[(0,a.jsx)(`h3`,{children:e.right?.title}),(0,a.jsx)(`ul`,{children:e.right?.items.map(e=>(0,a.jsx)(`li`,{children:e},e))})]})]}),e.kind===`cards`&&(0,a.jsx)(`div`,{className:`content-cards ${e.cards?.length===3?`three`:``}`,children:(e.items||e.cards)?.map(([e,t,n])=>(0,a.jsxs)(`article`,{children:[(0,a.jsx)(`span`,{children:e}),(0,a.jsx)(`strong`,{children:t}),(0,a.jsx)(`p`,{children:n})]},t))}),e.kind===`chain`&&(0,a.jsx)(`div`,{className:`content-chain`,children:e.items?.map(([e,t,n,r])=>(0,a.jsxs)(`article`,{children:[(0,a.jsx)(`b`,{children:e}),(0,a.jsx)(`strong`,{children:t}),(0,a.jsx)(`span`,{children:n}),(0,a.jsx)(`p`,{children:r})]},t))}),e.kind===`matrix`&&(0,a.jsxs)(`div`,{className:`content-matrix`,children:[(0,a.jsxs)(`div`,{className:`matrix-head`,children:[(0,a.jsx)(`span`,{children:`工具 / 事实`}),(0,a.jsx)(`span`,{children:`定位`}),(0,a.jsx)(`span`,{children:`说明`})]}),e.items?.map(([e,t,n])=>(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`strong`,{children:e}),(0,a.jsx)(`b`,{children:t}),(0,a.jsx)(`span`,{children:n})]},e))]}),e.kind===`facts`&&(0,a.jsx)(`div`,{className:`content-facts ${e.items&&e.items.length>4?`five`:``}`,children:e.items?.map(([e,t,n])=>(0,a.jsxs)(`article`,{children:[(0,a.jsx)(`span`,{children:e}),(0,a.jsx)(`strong`,{children:t}),(0,a.jsx)(`p`,{children:n})]},t))}),e.kind===`list`&&(0,a.jsx)(`div`,{className:`content-list`,children:e.items?.map(([e,t,n])=>(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`b`,{children:e}),(0,a.jsx)(`strong`,{children:t}),(0,a.jsx)(`span`,{children:n})]},t))}),e.kind===`route`&&(0,a.jsx)(`div`,{className:`content-route`,children:e.items?.map(([e,t,n,r])=>(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`b`,{children:e}),(0,a.jsx)(`strong`,{children:t}),(0,a.jsx)(`span`,{children:n}),r&&(0,a.jsx)(`small`,{children:r})]},e))}),e.kind===`code`&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`div`,{className:`content-code ${e.blocks?.length===1?`single`:``}`,children:e.blocks?.map(e=>{let[t,n,r]=e.length===3?e:[``,e[0],e[1]];return(0,a.jsxs)(`article`,{children:[(0,a.jsx)(`span`,{children:t}),(0,a.jsx)(`h3`,{children:n}),(0,a.jsx)(`pre`,{children:r})]},n)})}),e.items&&(0,a.jsx)(`div`,{className:`content-code-impact`,children:e.items.map(([e,t])=>(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`strong`,{children:e}),(0,a.jsx)(`span`,{children:t})]},e))})]}),e.kind===`end`&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`div`,{className:`content-cards end-cards`,children:e.items?.map(e=>{let[t,n,r]=e;return(0,a.jsxs)(`article`,{children:[(0,a.jsx)(`span`,{children:t}),r&&(0,a.jsx)(`strong`,{children:n}),(0,a.jsx)(`p`,{children:r||n})]},t)})}),(0,a.jsx)(`div`,{className:`end-note`,children:e.note||`内容收口 / 先建立当前事实，再按任务取上下文。`})]})]})}function u(){let[e,t]=(0,r.useState)(`agent`),[n,i]=(0,r.useState)(0),c=(0,r.useMemo)(()=>e===`agent`?o:s,[e]),u=c[n],d=e=>i(t=>Math.max(0,Math.min(c.length-1,t+e))),f=e=>{t(e),i(0)};return(0,r.useEffect)(()=>{let e=e=>{[`ArrowRight`,`ArrowDown`,`PageDown`,` `].includes(e.key)&&(e.preventDefault(),d(1)),[`ArrowLeft`,`ArrowUp`,`PageUp`].includes(e.key)&&(e.preventDefault(),d(-1)),e.key===`Home`&&i(0),e.key===`End`&&i(c.length-1)};return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[c.length]),(0,a.jsxs)(`main`,{className:`unified-app ${u.kind}`,children:[(0,a.jsxs)(`header`,{className:`unified-bar`,children:[(0,a.jsxs)(`a`,{className:`unified-brand`,href:`#slide-1`,children:[(0,a.jsx)(`span`,{children:`AI`}),(0,a.jsx)(`b`,{children:`项目分享`})]}),(0,a.jsxs)(`nav`,{className:`section-nav`,children:[(0,a.jsx)(`button`,{className:e===`agent`?`active`:``,onClick:()=>f(`agent`),children:`01 / 我的 Agent 工具栈`}),(0,a.jsx)(`button`,{className:e===`docs`?`active`:``,onClick:()=>f(`docs`),children:`02 / AI 接手真实项目`})]}),(0,a.jsxs)(`div`,{className:`unified-counter`,children:[(0,a.jsx)(`span`,{children:String(n+1).padStart(2,`0`)}),(0,a.jsx)(`i`,{children:`/`}),String(c.length).padStart(2,`0`)]})]}),(0,a.jsx)(`section`,{className:`unified-stage`,children:(0,a.jsx)(`div`,{className:`unified-slide`,children:(0,a.jsx)(l,{slide:u})})}),(0,a.jsxs)(`footer`,{className:`unified-controls`,children:[(0,a.jsx)(`div`,{className:`progress-track`,children:(0,a.jsx)(`span`,{style:{width:`${(n+1)/c.length*100}%`}})}),(0,a.jsx)(`div`,{className:`dot-nav`,children:c.map((e,t)=>(0,a.jsx)(`button`,{className:n===t?`active`:``,onClick:()=>i(t),"aria-label":`第 ${t+1} 页`},t))}),(0,a.jsxs)(`div`,{className:`nav-buttons`,children:[(0,a.jsx)(`button`,{onClick:()=>d(-1),disabled:n===0,"aria-label":`上一页`,children:`←`}),(0,a.jsx)(`button`,{onClick:()=>d(1),disabled:n===c.length-1,"aria-label":`下一页`,children:`→`})]})]})]})}export{u as default};