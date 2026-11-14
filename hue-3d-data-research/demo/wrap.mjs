// Builds demo/index.html (a complete document for local serving) from page.html,
// which is a body fragment so it can also be published as-is where a host adds the skeleton.
import { readFileSync, writeFileSync } from 'node:fs';
const page = readFileSync(new URL('./page.html', import.meta.url), 'utf8');
const head = '<!doctype html>\n<html lang="vi">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n';
const split = page.indexOf('</style>') + '</style>'.length;
writeFileSync(new URL('./index.html', import.meta.url), `${head}${page.slice(0, split)}\n</head>\n<body>\n${page.slice(split).trim()}\n</body>\n</html>\n`);
console.log('index.html written');

// artifact.html: same fragment with the bundle inlined (for hosts that only allow inline scripts).
const bundle = readFileSync(new URL('./app.js', import.meta.url), 'utf8').replace(/<\/script/gi, '<\\/script');
const tag = '<script src="app.js"></script>';
if (!page.includes(tag)) throw new Error('script tag not found in page.html');
writeFileSync(new URL('./artifact.html', import.meta.url), page.replace(tag, () => `<script>\n${bundle}\n</script>`));
console.log('artifact.html written');
