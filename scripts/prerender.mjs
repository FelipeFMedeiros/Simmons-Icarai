import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { createServer } from 'vite';

const root = resolve(import.meta.dirname, '..');
const output = resolve(root, 'dist');
let siteUrl;
let socialImageUrl;
let pages;
let localBusinessData;

const escapeHtml = (value) => value.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[char]);

function metadata(page) {
    const canonical = siteUrl + page.path;
    const image = socialImageUrl;
    const tags = [
        `<title>${escapeHtml(page.title)}</title>`,
        `<meta name="description" content="${escapeHtml(page.description)}" />`,
        `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
        '<meta property="og:type" content="website" />',
        '<meta property="og:locale" content="pt_BR" />',
        `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
        `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
        `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
        `<meta property="og:image" content="${escapeHtml(image)}" />`,
        '<meta name="twitter:card" content="summary_large_image" />',
        `<meta name="twitter:title" content="${escapeHtml(page.title)}" />`,
        `<meta name="twitter:description" content="${escapeHtml(page.description)}" />`,
        `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
    ];
    if (page.localBusiness) {
        tags.push(`<script id="local-business" type="application/ld+json">${JSON.stringify(localBusinessData).replace(/</g, '\\u003c')}</script>`);
    }
    return tags.join('\n        ');
}

const template = await readFile(resolve(output, 'index.html'), 'utf8');
const manifest = JSON.parse(await readFile(resolve(output, '.vite/manifest.json'), 'utf8'));
const marker = /<!-- SEO:START -->[\s\S]*?<!-- SEO:END -->/;
if (!marker.test(template) || !template.includes('<div id="root"></div>')) {
    throw new Error('Built index.html is missing the SEO block or React root');
}

function builtAssetUrls(html) {
    return html.replace(/\/src\/assets\/[^"'\s<>)]*/g, (sourceUrl) => {
        const built = manifest[sourceUrl.slice(1)];
        if (!built?.file) throw new Error(`Asset missing from Vite manifest: ${sourceUrl}`);
        return `/${built.file}`;
    });
}

const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
});

try {
    ({ siteUrl, socialImageUrl, seoPages: pages, localBusinessData } = await vite.ssrLoadModule('/src/data/seo.ts'));
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
    for (const page of pages) {
        const content = builtAssetUrls(render(page.path));
        const html = template
            .replace(marker, metadata(page))
            .replace('<div id="root"></div>', `<div id="root">${content}</div>`);
        const destination = resolve(output, page.file);
        await mkdir(resolve(destination, '..'), { recursive: true });
        await writeFile(destination, html, 'utf8');
    }

    const notFound = builtAssetUrls(render('/pagina-nao-encontrada'));
    const notFoundHtml = template
        .replace(marker, '<title>Página não encontrada | Simmons Icaraí</title>\n        <meta name="robots" content="noindex" />')
        .replace('<div id="root"></div>', `<div id="root">${notFound}</div>`);
    await writeFile(resolve(output, '404.html'), notFoundHtml, 'utf8');

    const sitemap = '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
        pages.map((page) => `  <url><loc>${escapeHtml(siteUrl + page.path)}</loc></url>`).join('\n') +
        '\n</urlset>\n';
    await writeFile(resolve(output, 'sitemap.xml'), sitemap, 'utf8');
    console.log(`Prerendered ${pages.length} indexable pages and 404.html`);
} finally {
    await vite.close();
}
