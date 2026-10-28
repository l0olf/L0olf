import {readFile,writeFile} from 'node:fs/promises';
const file = new URL('./dist/index.html',import.meta.url);
let html = await readFile(file,'utf8');
if (!html.includes('/ember.css')) html = html.replace('<link rel="stylesheet" href="/cover.css">','<link rel="stylesheet" href="/cover.css">\n    <link rel="stylesheet" href="/ember.css">');
html = html.replace('src="/assets/brand/l0olf-preta.svg" width="129"','src="/assets/brand/l0olf-principal.svg" width="129"');
html = html.replace('src="/assets/brand/l0olf-cover.svg"','src="/assets/brand/l0olf-cover-dark.svg"');
html = html.replace('name="theme-color" content="#181411"','name="theme-color" content="#260e17"');
await writeFile(file,html);
const logo = (await readFile(new URL('./dist/assets/brand/l0olf-principal.svg',import.meta.url),'utf8'))
 .replace('viewBox="0 0 430 152"','viewBox="16 16 398 120"')
 .replace('#f6f1e7','#fff0e2').replace('#ff6829','#ffb88d');
await writeFile(new URL('./dist/assets/brand/l0olf-cover-dark.svg',import.meta.url),logo);
