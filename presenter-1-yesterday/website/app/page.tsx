"use client";

import { useEffect, useState } from "react";

const totalSlides = 12;

const agents = [
  { name: "Cursor", mark: "C", tone: "coral", role: "IDE 原生 / 日常主力", line: "顺手，连续，低门槛" },
  { name: "Codex", mark: "✦", tone: "sky", role: "生态型 / 复杂任务", line: "综合能力，长任务" },
  { name: "OpenCode", mark: "⌘", tone: "lime", role: "开源 / 备用通道", line: "低成本，能切换" },
  { name: "DeepSeek Harness", mark: "D", tone: "violet", role: "Harness / 深度定制", line: "插件化，适合折腾" },
];

const schools = [
  ["01", "IDE 原生型", "Cursor / Copilot", "每天都在身边"],
  ["02", "终端 Agent 型", "Codex / OpenCode", "命令驱动复杂任务"],
  ["03", "云端异步型", "Cloud Agent / Devin", "交给后台跑"],
  ["04", "可编程 Harness", "Pi / DeepSeek Harness", "自己定义 Agent"],
  ["05", "应用生成型", "Replit / Bolt", "从想法到原型"],
];

export default function Home() {
  const [active, setActive] = useState(0);

  const go = (index: number) => setActive(Math.max(0, Math.min(totalSlides - 1, index)));

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        setActive((current) => Math.min(totalSlides - 1, current + 1));
      }
      if (["ArrowLeft", "ArrowUp", "PageUp"].includes(event.key)) {
        event.preventDefault();
        setActive((current) => Math.max(0, current - 1));
      }
      if (event.key === "Home") setActive(0);
      if (event.key === "End") setActive(totalSlides - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="deck-app">
      <header className="deck-bar">
        <a className="deck-brand" href="#slide-1"><span className="brand-slash">/</span><span>AI 编程<br /><b>观察站</b></span></a>
        <div className="deck-title">CODING AGENT / FIELD PRESENTATION</div>
        <div className="deck-counter"><span>{String(active + 1).padStart(2, "0")}</span><i>/</i>{String(totalSlides).padStart(2, "0")}</div>
      </header>

      <div className="slides-viewport" aria-live="polite">
        {active === 0 && <section className="deck-slide cover-slide" id="slide-1">
          <div className="slide-eyebrow"><span className="live-dot" /> FIELD NOTE / 2026</div>
          <div className="cover-main"><h1>Coding<br /><em>Agent</em></h1><p>不是排名，<br />而是分工。</p></div>
          <div className="cover-stamp">A PRACTICAL<br /><strong>MAP</strong><br />FOR BUILDERS</div>
          <div className="cover-orbit"><div className="cover-core">AGENT<br /><b>×</b><br />HARNESS</div><span>MODEL</span><span>TOOLS</span><span>CONTEXT</span><span>WORKFLOW</span></div>
          <div className="cover-footer"><span>Cursor · Codex · OpenCode · DeepSeek Harness</span><span>← / → 开始浏览</span></div>
        </section>}

        {active === 1 && <section className="deck-slide thesis-slide" id="slide-2">
          <div className="slide-topline"><span>01 / POINT OF VIEW</span><span>先讲结论</span></div>
          <div className="thesis-grid"><div><h2>Agent 越来越多，<br /><em>选择却不该更复杂。</em></h2><p className="big-copy">真正重要的问题不是“哪个最好”，而是：哪个适合日常，哪个扛复杂任务，哪个值得拿来改造。</p></div><div className="principles"><div><b>01</b><strong>按工作流分工</strong><span>不同 Agent 解决不同问题</span></div><div><b>02</b><strong>按真实任务验证</strong><span>不被演示和榜单带着走</span></div><div><b>03</b><strong>按组合而非单挑</strong><span>主力、备选、实验室各就各位</span></div></div></div>
          <div className="thesis-note">核心判断 / <b>Model 是能力，Harness 才是工作方式。</b></div>
        </section>}

        {active === 2 && <section className="deck-slide landscape-slide" id="slide-3">
          <div className="slide-topline"><span>02 / THE LANDSCAPE</span><span>五种流派</span></div>
          <div className="split-heading"><h2>先把地图<br /><em>画出来。</em></h2><p>IDE、CLI、云端平台和 Harness 不应该被放进同一张“谁更强”的榜单。</p></div>
          <div className="school-strip">{schools.map(([number, title, examples, description]) => <div className="school-block" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p><small>{examples}</small></div>)}</div>
          <div className="landscape-axis"><span>更接近产品</span><i /><span>更接近基础设施</span></div>
        </section>}

        {active === 3 && <section className="deck-slide cast-slide" id="slide-4">
          <div className="slide-topline"><span>03 / THE FOUR</span><span>四个主角</span></div>
          <div className="split-heading"><h2>四个工具，<br /><em>四种答案。</em></h2><p>你的现有组合已经覆盖个人开发者最重要的使用面。</p></div>
          <div className="cast-grid">{agents.map((agent, index) => <article className={`cast-card ${agent.tone}`} key={agent.name}><div className="cast-number">0{index + 1}</div><div className="cast-mark">{agent.mark}</div><h3>{agent.name}</h3><p>{agent.role}</p><strong>{agent.line}</strong></article>)}</div>
          <div className="cast-footer">主力 <b>+</b> 复杂任务 <b>+</b> 备选 <b>+</b> 实验室</div>
        </section>}

        {active === 4 && <section className="deck-slide compare-slide" id="slide-5">
          <div className="slide-topline"><span>04 / THE DAILY PAIR</span><span>主力组合</span></div>
          <div className="split-heading"><h2>Cursor + Codex<br /><em>一边顺手，一边扛事。</em></h2><p>这两个不是互相替代，而是把“日常开发”和“复杂任务”拆开。</p></div>
          <div className="compare-grid"><article className="compare-card coral"><div className="compare-top"><span className="large-mark">C</span><span>01 / DAILY</span></div><h3>Cursor</h3><p>把 Agent 放进编辑器里，强调连续、顺手和低门槛。</p><ul><li>项目上下文自然</li><li>日常编码效率高</li><li>适合快速迭代</li></ul><span className="compare-tag">日常主力</span></article><article className="compare-card sky"><div className="compare-top"><span className="large-mark">✦</span><span>02 / LONG TASKS</span></div><h3>Codex</h3><p>OpenAI 生态的综合型 Agent，更适合多步协作和全仓库任务。</p><ul><li>复杂任务能力强</li><li>生态覆盖广</li><li>本地、编辑器、云端可衔接</li></ul><span className="compare-tag">复杂任务</span></article></div>
        </section>}

        {active === 5 && <section className="deck-slide compare-slide alt-slide" id="slide-6">
          <div className="slide-topline"><span>05 / THE BACKUP + LAB</span><span>开源与定制</span></div>
          <div className="split-heading"><h2>OpenCode +<br />DeepSeek Harness<br /><em>给系统留后路。</em></h2><p>一个负责可获得性，一个负责可改造性。它们的价值不只在功能，也在控制权。</p></div>
          <div className="compare-grid"><article className="compare-card lime"><div className="compare-top"><span className="large-mark">⌘</span><span>03 / FALLBACK</span></div><h3>OpenCode</h3><p>开箱即用、成本友好、模型相对自由，适合作为备用通道。</p><div className="meter"><span style={{ width: "82%" }} /></div><small>可获得性 / 82</small><span className="compare-tag">备选</span></article><article className="compare-card violet"><div className="compare-top"><span className="large-mark">D</span><span>04 / HARNESS</span></div><h3>DeepSeek Harness</h3><p>Everything is a Plugin。适合研究上下文、工具和 Agent Loop。</p><div className="meter"><span style={{ width: "96%" }} /></div><small>可定制性 / 96</small><span className="compare-tag">实验室</span></article></div>
        </section>}

        {active === 6 && <section className="deck-slide pi-slide" id="slide-7">
          <div className="slide-topline"><span>06 / SIDE NOTE</span><span>同一赛道的另一种答案</span></div>
          <div className="pi-hero"><div className="pi-big">π</div><div><h2>Pi 更像一个<br /><em>Agent 工具箱。</em></h2><p>它不急着把所有功能做成默认配置，而是保留干净的 Agent 基础能力，让你自己搭建。</p></div></div>
          <div className="pi-columns"><div><span>它是什么</span><strong>极简、可扩展的<br />Agent Toolkit</strong></div><div><span>适合谁</span><strong>想理解 Agent Loop、<br />工具和上下文的人</strong></div><div><span>和 DSH 的区别</span><strong>Pi 偏积木<br />DSH 偏插件平台</strong></div></div>
          <div className="pi-footnote">简单了解即可，不必和四个主力放在同一权重里。</div>
        </section>}

        {active === 7 && <section className="deck-slide usecases-slide" id="slide-8">
          <div className="slide-topline"><span>07 / FROM TOOLS TO WORKFLOWS</span><span>技能与场景</span></div>
          <div className="usecases-heading"><div><h2>工具之外，<br /><em>还有工作流。</em></h2><p>OpenAI 官方 Use Cases 展示了另一条路径：把一次次对话沉淀成可重复使用的技能，让 Agent 逐渐贴合团队的工作方式。</p></div><a className="usecases-link" href="https://learn.chatgpt.com/use-cases" target="_blank" rel="noreferrer"><span>官方入口 / OPENAI</span><strong>浏览 Use Cases ↗</strong><small>查看可复用的工作流与技能示例</small></a></div>
          <div className="usecases-grid"><article><span>01 / DISCOVER</span><strong>Learn a new concept</strong><p>把复杂资料转成清晰、可复核的学习报告。</p></article><article><span>02 / SAVE</span><strong>Save workflows as skills</strong><p>把重复流程保存下来，形成自己的 Agent 能力。</p></article><article><span>03 / VERIFY</span><strong>Run verified operations</strong><p>让自动化任务可重复执行，并留下验证结果。</p></article><article><span>04 / ENGINEER</span><strong>Understand large codebases</strong><p>用固定方法梳理大型代码库和请求链路。</p></article></div>
          <div className="usecases-footnote">判断 / Agent 的长期价值，不只是“会不会写代码”，还在于能不能把好方法留下来。</div>
        </section>}

        {active === 8 && <section className="deck-slide matrix-slide" id="slide-9">
          <div className="slide-topline"><span>07 / DECISION MATRIX</span><span>如何选</span></div>
          <div className="split-heading"><h2>别问“谁最好”，<br /><em>先问“现在缺什么”。</em></h2><p>选择 Agent 的核心，是让工具的优势和团队的缺口对上。</p></div>
          <div className="matrix"><div className="matrix-head"><span>你的问题</span><span>优先选择</span><span>为什么</span></div><div><strong>想每天写得更顺</strong><b className="pill coral-pill">Cursor</b><span>编辑器内连续工作</span></div><div><strong>要做复杂的全仓库改造</strong><b className="pill sky-pill">Codex</b><span>多步骤、长任务更合适</span></div><div><strong>需要一个低成本备份</strong><b className="pill lime-pill">OpenCode</b><span>开源、可切换、门槛低</span></div><div><strong>想改造 Agent 本身</strong><b className="pill violet-pill">DeepSeek Harness</b><span>源码和插件都能动</span></div></div>
        </section>}

        {active === 9 && <section className="deck-slide stack-slide" id="slide-10">
          <div className="slide-topline"><span>08 / RECOMMENDED STACK</span><span>建议组合</span></div>
          <div className="stack-hero"><h2>不是全都要，<br /><em>而是各就各位。</em></h2><p>一套好用的 Agent 组合，应该像一支研发团队：角色不同，但协作清楚。</p></div>
          <div className="stack-rack"><div><span>01</span><small>日常开发</small><strong>Cursor</strong><em>稳定、顺手、低门槛</em></div><div><span>02</span><small>复杂任务</small><strong>Codex</strong><em>全仓库、多步骤、长任务</em></div><div><span>03</span><small>备用通道</small><strong>OpenCode</strong><em>开源、低成本、可切换</em></div><div><span>04</span><small>研究定制</small><strong>DeepSeek Harness</strong><em>源码、插件、工作流</em></div></div>
          <div className="stack-bottom">主力 <b>→</b> 扩展能力 <b>→</b> 保持可替代</div>
        </section>}

        {active === 10 && <section className="deck-slide route-slide" id="slide-11">
          <div className="slide-topline"><span>09 / WHAT NEXT</span><span>下一步怎么研究</span></div>
          <div className="split-heading"><h2>把“感觉不错”<br /><em>变成可比较。</em></h2><p>不需要一开始就做大采购，先把真实任务拿出来。</p></div>
          <div className="route-line"><div><b>01</b><strong>固定任务</strong><span>Bug / 新功能 / 重构 / 测试</span></div><div><b>02</b><strong>分别完成</strong><span>记录耗时、返工和上下文</span></div><div><b>03</b><strong>统一评分</strong><span>质量 / 成本 / 稳定性</span></div><div><b>04</b><strong>形成组合</strong><span>不做单一工具崇拜</span></div></div>
          <div className="route-callout"><span>评估原则</span><strong>真实任务 &gt; 演示效果</strong></div>
        </section>}

        {active === 11 && <section className="deck-slide end-slide" id="slide-12">
          <div className="slide-eyebrow"><span className="live-dot" /> END NOTE / 2026</div>
          <h2>把 Agent<br /><em>放到正确的位置。</em></h2>
          <div className="end-line" />
          <div className="end-summary"><p>Cursor 负责效率，Codex 负责能力，OpenCode 负责后路，DeepSeek Harness 负责想象力。</p><span>AI 编程观察站 / Coding Agent 研究笔记</span></div>
          <div className="end-sources"><span>参考入口</span><a href="https://cursor.com/" target="_blank" rel="noreferrer">Cursor</a><a href="https://github.com/openai/codex" target="_blank" rel="noreferrer">Codex</a><a href="https://github.com/anomalyco/opencode" target="_blank" rel="noreferrer">OpenCode</a><a href="https://github.com/deepseek-ai/deepseek-harness" target="_blank" rel="noreferrer">DeepSeek Harness</a><a href="https://github.com/earendil-works/pi" target="_blank" rel="noreferrer">Pi</a></div>
        </section>}
      </div>

      <footer className="deck-controls"><div className="progress-track"><span style={{ width: `${((active + 1) / totalSlides) * 100}%` }} /></div><div className="dot-nav" aria-label="幻灯片导航">{Array.from({ length: totalSlides }, (_, index) => <button key={index} className={active === index ? "is-active" : ""} onClick={() => go(index)} aria-label={`第 ${index + 1} 页`} />)}</div><div className="nav-buttons"><button onClick={() => go(active - 1)} disabled={active === 0} aria-label="上一页">←</button><button onClick={() => go(active + 1)} disabled={active === totalSlides - 1} aria-label="下一页">→</button></div></footer>
    </main>
  );
}
