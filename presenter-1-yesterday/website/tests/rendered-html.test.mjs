import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}
test("server-renders the unified AI project sharing site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>AI 项目分享｜我的 Coding Agent 工具栈与架构<\/title>/i);
  assert.match(html, /我的 Agent 工具栈/);
  assert.match(html, /项目文档入口/);
  assert.match(html, /Cursor/);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton|codex-preview/);
});
test("keeps both presentation sections and responsive styles", async () => {
  const [page, docs, css] = await Promise.all([readFile(new URL("../app/page.tsx", import.meta.url), "utf8"), readFile(new URL("../app/document-slides.ts", import.meta.url), "utf8"), readFile(new URL("../app/globals.css", import.meta.url), "utf8")]);
  assert.match(page, /const agentSlides/);
  assert.match(page, /AGENT ARCHITECTURE/);
  assert.match(page, /Agent Runtime/);
  assert.match(page, /Memory/);
  assert.match(page, /GPT Site/);
  assert.match(page, /Remote Control/);
  assert.match(page, /图片设计/);
  assert.match(page, /DEEPSEEK HARNESS/);
  assert.match(page, /EVERYTHING IS A PLUGIN/);
  assert.match(page, /const docsSlides/);
  assert.match(docs, /export const documentSlides/);
  assert.match(docs, /18 \/ QUICK REFERENCE/);
  assert.match(docs, /AGENTS\.MD CONTENT/);
  assert.equal((docs.match(/^    kicker:/gm) || []).length, 19);
  assert.match(page, /AGENTS\.md/);
  assert.match(page, /switchSection/);
  assert.match(css, /\.section-nav/);
  assert.match(css, /@media \(max-width: 520px\)/);
});
