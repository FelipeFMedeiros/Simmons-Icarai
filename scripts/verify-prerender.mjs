import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const output = resolve(import.meta.dirname, '../dist');
const pages = [
    resolve(output, 'index.html'),
    ...(await readdir(resolve(output, '_prerender'))).map((name) => resolve(output, '_prerender', name)),
];

const titles = new Set();
const canonicals = new Set();
for (const page of pages) {
    const html = await readFile(page, 'utf8');
    const title = html.match(/<title>(.*?)<\/title>/)?.[1];
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/ )?.[1];
    assert.ok(title, `Missing title: ${page}`);
    assert.ok(canonical?.startsWith('https://simmonsicarai.com.br/'), `Missing canonical: ${page}`);
    titles.add(title);
    canonicals.add(canonical);
    assert.match(html, /<h1\b/, `Missing H1: ${page}`);
    assert.doesNotMatch(html, /\/src\/assets\//, `Unbuilt asset reference: ${page}`);
    const filename = page.split(/[\\/]/).at(-1);
    if (filename === 'loja.html' || (filename.startsWith('loja-') && filename !== 'loja-fisica.html')) {
        assert.ok((html.match(/<article\b/g) || []).length > 0, `Missing catalog products: ${page}`);
    }
}
assert.equal(titles.size, pages.length, 'Page titles must be unique');
assert.equal(canonicals.size, pages.length, 'Canonical URLs must be unique');

const sitemap = await readFile(resolve(output, 'sitemap.xml'), 'utf8');
assert.equal((sitemap.match(/<url>/g) || []).length, pages.length);
assert.match(await readFile(resolve(output, 'robots.txt'), 'utf8'), /Sitemap: https:\/\/simmonsicarai\.com\.br\/sitemap\.xml/);
assert.match(await readFile(resolve(output, '404.html'), 'utf8'), /<meta name="robots" content="noindex"/);
console.log(`Verified ${pages.length} pre-rendered pages, catalog counts, sitemap, and 404 response`);
