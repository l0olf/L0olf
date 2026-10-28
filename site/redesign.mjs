import fs from 'node:fs';
const file='site/dist/index.html';
let html=fs.readFileSync(file,'utf8');
html=html.replace('<link rel="stylesheet" href="/style.css">','<link rel="stylesheet" href="/style.css">\n    <link rel="stylesheet" href="/motion.css">\n    <script src="/vendor/lenis.min.js" defer></script>');
const hero=`<section class="hero scene" aria-labelledby="hero-title">
  <div class="scene-back" data-depth="0.52" aria-hidden="true"><div class="scene-glow"></div><span class="ghost-word">L0OLF</span><div class="scene-grid"></div></div>
  <div class="hero-orbit" data-depth="0.3" aria-hidden="true"><div class="torus"></div></div>
  <div class="hero-spark" data-depth="0.42" aria-hidden="true"><svg viewBox="0 0 200 200"><path d="M100 8 119 69 175 29 135 85 195 104 135 122 175 178 119 138 100 198 81 138 25 178 65 122 5 104 65 85 25 29 81 69Z"/></svg></div>
  <div class="hero-copy" data-depth="0.06">
    <div class="hero-label"><span class="live-dot"></span> L0OLF®? / TRÁFEGO PAGO COM IAGO</div>
    <h1 id="hero-title"><span>CLIQUE É SÓ</span><br><em>O COMEÇO.</em><span class="title-dot" aria-hidden="true">↗</span></h1>
    <p>O anúncio chama. E depois?<br>Eu conecto tráfego pago, análise e automações<br class="desktop-break"> para olhar além do clique. E entender o seu negócio.</p>
    <div class="hero-actions"><a class="pill orange-pill" data-whatsapp href="https://wa.me/5514999051272">Bora falar do seu negócio <span aria-hidden="true">↗</span></a><a class="hero-secondary" href="#servicos">Explorar o trabalho <span aria-hidden="true">↓</span></a></div>
  </div>
  <div class="floating-note" data-depth="-0.23" aria-hidden="true"><span class="note-pin">✳</span><span>LEMBRETE Nº 01</span><strong>Não confunda<br>movimento<br>com direção.</strong><div class="note-line"></div><small>MENOS ACHISMO. MAIS CONTEXTO.</small></div>
  <div class="hero-object" data-depth="-0.36" aria-hidden="true"><div class="object-face">↗</div><span>OLHAR ALÉM.</span></div>
  <div class="hero-bottom wrap"><span>ESTRATÉGIA / MÍDIA / CONEXÕES</span><a class="scroll-cue" href="#olhar"><span class="scroll-line" aria-hidden="true"></span> ROLE PARA DESCOBRIR</a><span>INDEPENDENTE. DIRETO. IAGO.</span></div>
</section>`;
html=html.replace(/<section class="hero wrap"[\s\S]*?<\/section>/,hero.replace('L0OLF®?','L0OLF'));
const services=`<section class="section wrap work-section" id="servicos">
 <div class="section-head"><div><span class="eyebrow muted">02 / AS PEÇAS DO TRABALHO</span><h2>Não é uma lista<br>de <span class="outline-word">ferramentas.</span></h2></div><p>É o que a gente faz<br>com cada uma delas.<span class="section-arrow" aria-hidden="true">↙</span></p></div>
 <div class="service-stack">
  <article class="work-panel work-meta">
   <div class="panel-art attention-art" aria-hidden="true"><span class="art-kicker">01 / INTERROMPER O AUTOMÁTICO</span><div class="attention-eye"><div class="eye-inner"><span>↗</span></div></div><div class="art-ribbon">PARE. OLHE. ENTENDA.</div><span class="art-footer">UMA MENSAGEM PRECISA ENCONTRAR ALGUÉM.</span></div>
   <div class="panel-copy"><span class="panel-index">01 <span>↗</span></span><h3>Meta Ads<span>.</span></h3><p class="panel-lead">No meio de tanta coisa,<br>por que parar no seu anúncio?</p><p>Essa é a pergunta. Planejo e gerencio campanhas no Instagram e Facebook conectando público, mensagem e oferta. O objetivo da campanha precisa fazer sentido para o negócio.</p><div class="panel-tags"><span>PLANEJAMENTO</span><span>PÚBLICOS</span><span>CAMPANHAS</span></div></div>
  </article>
  <article class="work-panel work-google">
   <div class="panel-art search-art" aria-hidden="true"><span class="art-kicker">02 / QUANDO A INTENÇÃO JÁ EXISTE</span><div class="search-words">QUERO<br>PRECISO<br><span>ENCONTREI.</span></div><div class="search-lens"><span>↗</span></div><div class="search-query"><span>O QUE SEU CLIENTE PROCURA?</span><svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/></svg></div></div>
   <div class="panel-copy"><span class="panel-index">02 <span>↗</span></span><h3>Google Ads<span>.</span></h3><p class="panel-lead">Tem alguém procurando.<br>Sua oferta faz sentido ali?</p><p>Estruturo campanhas a partir das buscas relevantes para sua empresa. Da palavra pesquisada à página de destino, cada etapa precisa continuar a mesma conversa.</p><div class="panel-tags"><span>BUSCAS</span><span>INTENÇÃO</span><span>DESTINO</span></div></div>
  </article>
  <article class="work-panel work-performance">
   <div class="panel-art performance-art" aria-hidden="true"><span class="art-kicker">03 / NÚMERO SOLTO NÃO EXPLICA</span><div class="signal-rings"><i></i><i></i><i></i><span>+</span></div><div class="signal-label signal-one">CLIQUE</div><div class="signal-label signal-two">CONTATO</div><div class="signal-label signal-three">NEGÓCIO</div><span class="art-footer">OLHAR PARA AS CONEXÕES ENTRE OS SINAIS.</span></div>
   <div class="panel-copy"><span class="panel-index">03 <span>↗</span></span><h3>Performance<span>.</span></h3><p class="panel-lead">Tá clicando. Mas o que<br>acontece depois?</p><p>Analiso campanhas e sinais do funil para entender o que merece investigação, teste ou ajuste. Sem tratar clique como venda. Sem tirar conclusão de um número sozinho.</p><div class="panel-tags"><span>ANÁLISE</span><span>CONTEXTO</span><span>DECISÃO</span></div></div>
  </article>
  <article class="work-panel work-automation">
   <div class="panel-art connection-art" aria-hidden="true"><span class="art-kicker">04 / AS PONTAS PRECISAM SE CONECTAR</span><svg class="connection-path" viewBox="0 0 500 400"><path d="M70 140H250V270H430"/><path class="flow-path" d="M70 140H250V270H430"/></svg><div class="connection-node node-a"><svg viewBox="0 0 40 40"><path d="M8 8h24v18H19l-8 7v-7H8z"/><path d="M14 15h12M14 20h8"/></svg></div><div class="connection-node node-b">✳</div><div class="connection-node node-c"><svg viewBox="0 0 40 40"><path d="m11 20 6 6 13-14"/></svg></div><div class="connection-caption">MENOS REPETIÇÃO.<br><strong>MAIS CONEXÃO.</strong></div></div>
   <div class="panel-copy"><span class="panel-index">04 <span>↗</span></span><h3>Automações<span>.</span></h3><p class="panel-lead">Se é sempre o mesmo<br>copia e cola, vamos olhar.</p><p>Conecto ferramentas e etapas da operação para reduzir tarefas repetitivas. Primeiro, entender o processo. Depois, avaliar o que é viável automatizar nos sistemas que você usa.</p><div class="panel-tags"><span>FLUXOS</span><span>FERRAMENTAS</span><span>OPERAÇÃO</span></div></div>
  </article>
 </div>
</section>`;
html=html.replace(/<section class="section wrap" id="servicos">[\s\S]*?<\/section>/,services);
html=html.replace('content="L0olf — Seu negócio merece mais que cliques."','content="L0olf — Clique é só o começo."');
html=html.replace('<body>','<body class="v2">');
fs.writeFileSync(file,html);
