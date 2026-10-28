import { readFile, writeFile, copyFile } from 'node:fs/promises';
const file = new URL('./dist/index.html', import.meta.url);
let html = await readFile(file, 'utf8');
const ring = 'M160 49C125 49 106 70 106 104V145C106 180 125 201 160 201S214 180 214 145V104C214 70 195 49 160 49ZM160 76C178 76 187 87 187 106V143C187 163 178 174 160 174S133 163 133 143V106C133 87 142 76 160 76Z';
const arrow = '<svg class="arrow-icon arrow-down" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 3.9H19A1.1 1.1 0 0 1 20.1 5V19H17.9V7.656L5.778 19.778L4.222 18.222L16.344 6.1H5Z" fill="currentColor"/></svg>';
const piece = (name, path, clip = '') => `<g class="cover-fragment fragment-${name}"><g${clip ? ` clip-path="url(#${clip})"` : ''}><path class="fragment-depth" fill-rule="evenodd" d="${path}" transform="translate(2.5 4)"/><path class="fragment-face" fill-rule="evenodd" d="${path}"/></g></g>`;
const hero = `<section class="hero hero-experiment" id="inicio" aria-labelledby="hero-title">
 <div class="cover-stage">
  <div class="cover-atmosphere" aria-hidden="true"></div>
  <div class="cover-intro">
   <span class="tiny cover-kicker">L0 / UM OUTRO OLHAR</span>
   <h1 id="hero-title">Olhe<br><em>de novo.</em></h1>
   <p>Tráfego, contexto e conexões.<br><span>Com Iago.</span></p>
  </div>
  <div class="cover-art" aria-hidden="true">
   <div class="cover-object">
    <svg class="cover-sculpture" viewBox="0 0 250 250" fill="none">
     <defs>
      <linearGradient id="fragment-light" x1="35" y1="45" x2="211" y2="207" gradientUnits="userSpaceOnUse"><stop stop-color="#ffb17d"/><stop offset=".24" stop-color="#ff7a3c"/><stop offset=".58" stop-color="#f15c29"/><stop offset="1" stop-color="#9e291c"/></linearGradient>
      <clipPath id="zero-upper"><path d="M95 40H225V125.1H95Z"/></clipPath>
      <clipPath id="zero-lower"><path d="M95 124.9H225V211H95Z"/></clipPath>
     </defs>
     ${piece('l', 'M37 55H64V176H116L100 202H37Z')}
     ${piece('upper', ring, 'zero-upper')}
     ${piece('lower', ring, 'zero-lower')}
     ${piece('slash', 'M126.6 181.4 185.4 66.6 197.4 73.6 138.6 188.4Z')}
    </svg>
   </div>
   <div class="cover-signature"><img src="/assets/brand/l0olf-principal.svg" alt="" width="430" height="152"><span>AS PARTES GANHAM SENTIDO.</span></div>
  </div>
  <p class="cover-point-copy" aria-hidden="true">Tudo começa<br>com <em>um ponto.</em></p>
  <div class="cover-footer">
   <a class="cover-explore" href="#olhar"><span>Role para mudar o olhar</span>${arrow}</a>
   <div class="cover-sequence" aria-hidden="true"><span class="is-current">01 / FRAGMENTOS</span><i></i><span>02 / CONEXÕES</span><i></i><span>03 / SENTIDO</span></div>
   <span class="tiny cover-edition">INDEPENDENTE. DIRETO. IAGO.</span>
  </div>
 </div>
</section>
`;
html = html.replace(/<section class="hero[\s\S]*?(?=<section class="perspective")/, hero);
html = html.replace('src="/assets/brand/l0olf-preta.svg" width="129"', 'src="/assets/brand/l0olf-principal.svg" width="129"');
if (!html.includes('/cover-motion.js')) html = html.replace('<script src="/brand.js" defer></script>', '<script src="/brand.js" defer></script>\n    <script src="/cover-motion.js" defer></script>');
await writeFile(file, html);
await copyFile(new URL('./cover-v3.css', import.meta.url), new URL('./dist/cover.css', import.meta.url));
