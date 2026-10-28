import {readFile,writeFile,mkdir} from 'node:fs/promises';
const home=new URL('./dist/index.html',import.meta.url);
const html=await readFile(home,'utf8');
await mkdir(new URL('./review/cover-v1-backup/',import.meta.url),{recursive:true});
await writeFile(new URL('./review/cover-v1-backup/index.html',import.meta.url),html);
const originalLogo=await readFile(new URL('./dist/assets/brand/l0olf-principal.svg',import.meta.url),'utf8');
const coverLogo=originalLogo.replace('viewBox="0 0 430 152"','viewBox="16 16 398 120"').replace('#f6f1e7','#181411').replace('#ff6829','#f3eadb');
await writeFile(new URL('./dist/assets/brand/l0olf-cover.svg',import.meta.url),coverLogo);
const arrow='<svg class="arrow-icon arrow-down" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M5 3.9H19A1.1 1.1 0 0 1 20.1 5V19H17.9V7.656L5.778 19.778L4.222 18.222L16.344 6.1H5Z" fill="currentColor"/></svg>';
const cover=`<section class="hero hero-poster" id="inicio" aria-labelledby="hero-title">
 <div class="cover-stage">
  <div class="cover-statement"><span class="tiny">INDEPENDENTE. DIRETO. IAGO.</span><h1 id="hero-title">Tráfego é o meio.<br><em>O olhar faz a diferença.</em></h1></div>
  <div class="cover-description"><span class="tiny">UM PONTO DE VISTA.</span><p>Tráfego pago, performance<br>e automações. Com contexto.<br>Com intenção. Com Iago.</p></div>
  <div class="cover-wordmark"><img src="/assets/brand/l0olf-cover.svg" width="398" height="120" alt="L0olf" fetchpriority="high"></div>
  <div class="cover-footer"><span class="tiny">ESTRATÉGIA / MÍDIA / CONEXÕES</span><a class="cover-explore" href="#olhar"><span>Entre. Olhe além.</span>${arrow}</a><span class="tiny cover-edition">L0 / UM OUTRO OLHAR</span></div>
 </div>
</section>`;
let next=html.replace(/<section class="hero"[\s\S]*?<\/section>/,cover);
if(next===html)throw Error('Capa original não encontrada; migração não repetível.');
next=next.replace('<link rel="stylesheet" href="/brand.css">','<link rel="stylesheet" href="/brand.css">\n    <link rel="stylesheet" href="/cover.css">');
next=next.replace('<header class="header">','<header class="header cover-header">');
next=next.replace('<img src="/assets/brand/l0olf-principal.svg" width="129" height="46" alt="L0olf">','<img src="/assets/brand/l0olf-preta.svg" width="129" height="46" alt="L0olf">');
// All content from the next section onward is deliberately untouched.
if(html.slice(html.indexOf('<section class="perspective"'))!==next.slice(next.indexOf('<section class="perspective"')))throw Error('Conteúdo fora da capa foi modificado.');
await writeFile(home,next);
console.log('Capa 1 aplicada. Restante do HTML preservado integralmente.');
