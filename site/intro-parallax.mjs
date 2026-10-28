import {readFile,writeFile} from 'node:fs/promises';
const file = new URL('./dist/index.html',import.meta.url);
let html = await readFile(file,'utf8');
const path = 'M5 3.9H19A1.1 1.1 0 0 1 20.1 5V19H17.9V7.656L5.778 19.778L4.222 18.222L16.344 6.1H5Z';
const arrow = direction => `<svg class="arrow-icon arrow-${direction}" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="${path}" fill="currentColor"/></svg>`;
const hero = `<section class="hero hero-intro" id="inicio" aria-labelledby="hero-title">
 <div class="intro-light" aria-hidden="true"></div>
 <div class="intro-contour" aria-hidden="true"></div>
 <div class="intro-copy">
  <span class="intro-kicker">L0OLF / UM OUTRO OLHAR</span>
  <h1 id="hero-title">Clique é só<br><em>o começo.</em></h1>
  <p class="intro-phrase"><span class="intro-sr-only">Com mais contexto, estratégia e direção.</span><span class="intro-phrase-visual" aria-hidden="true">Com mais <span class="intro-word-slot"><em class="intro-word">contexto.</em></span></span></p>
  <p class="intro-description">Tráfego, performance e automações.<br>Com Iago, do clique ao contexto.</p>
 </div>
 <div class="intro-footer"><span class="tiny">ESTRATÉGIA / MÍDIA / CONEXÕES</span><a class="intro-explore" href="#olhar"><span>Entre. Olhe além.</span>${arrow('down')}</a><span class="tiny">INDEPENDENTE. DIRETO. IAGO.</span></div>
 <div class="intro-note" aria-hidden="true"><span>Olhe além.</span>${arrow('ne')}</div>
</section>
`;
html = html.replace(/<section class="hero[\s\S]*?(?=<section class="perspective")/,hero);
html = html.replace('    <link rel="stylesheet" href="/cover.css">\n','');
if (!html.includes('/intro.css')) html = html.replace('<link rel="stylesheet" href="/ember.css">','<link rel="stylesheet" href="/ember.css">\n    <link rel="stylesheet" href="/intro.css">');
if (!html.includes('/intro.js')) html = html.replace('<script src="/brand.js" defer></script>','<script src="/brand.js" defer></script>\n    <script src="/intro.js" defer></script>');
await writeFile(file,html);
