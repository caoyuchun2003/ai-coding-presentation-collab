import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the AI coding agent research page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>AI 编程观察站｜Coding Agent 不是排名，而是分工<\/title>/i);
  assert.match(html, /不是排名/);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton|codex-preview/);
});

test("keeps the page content and metadata aligned", async () => {
  const [page, layout, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /useState/);
  assert.match(page, /ArrowRight/);
  assert.match(page, /totalSlides = 12/);
  assert.match(page, /四个主角/);
  assert.match(page, /五种流派/);
  assert.match(page, /Cursor/);
  assert.match(page, /Codex/);
  assert.match(page, /OpenCode/);
  assert.match(page, /DeepSeek Harness/);
  assert.match(page, /Pi 更像一个/);
  assert.match(page, /Save workflows as skills/);
  assert.match(page, /https:\/\/learn\.chatgpt\.com\/use-cases/);
  assert.match(page, /建议组合/);
  assert.doesNotMatch(page, /给领导的一句话|小范围试点/);
  assert.match(page, /https:\/\/github\.com\/deepseek-ai\/deepseek-harness/);
  assert.match(layout, /lang="zh-CN"/);
  assert.match(layout, /Coding Agent 不是排名，而是分工/);
  assert.match(css, /@media \(max-width: 520px\)/);
  assert.match(css, /\.deck-slide/);
  assert.match(css, /\.deck-controls/);
});
