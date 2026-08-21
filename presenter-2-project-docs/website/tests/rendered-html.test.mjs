import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request("http://localhost/", { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}
test("server-renders the AI project docs web presentation", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>AI 项目文档入口说明｜Web 版<\/title>/i);
  assert.match(html, /AI 接手/);
  assert.match(html, /CLAUDE\.md/);
  assert.match(html, /Symfony 3\.3/);
  assert.doesNotMatch(html, /Your site is taking shape|react-loading-skeleton|codex-preview/);
});
test("keeps the docs deck structure and responsive styles", async () => {
  const [page, css] = await Promise.all([readFile(new URL("../app/page.tsx", import.meta.url), "utf8"), readFile(new URL("../app/globals.css", import.meta.url), "utf8")]);
  assert.match(page, /kind: "cover"/);
  assert.match(page, /AGENTS\.md/);
  assert.match(page, /\.claude\//);
  assert.match(page, /kind: "route"/);
  assert.match(css, /@media \(max-width: 520px\)/);
  assert.match(css, /\.doc-slide/);
});
