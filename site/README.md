# L0olf — site institucional

## Capa atual — tipografia e luz orgânica (23/10/2026)

A abertura usa `dist/intro.css`, `dist/intro.js` e `dist/intro-field.js`. No desktop, a frase segue o arranjo enviado pelo Iago: “Clique é só o” em Barlow começa à esquerda; “começo.” em Instrument Serif avança à direita, com uma estrela de oito pontas ao lado. O conjunto acompanha o parallax e sua escala considera largura e altura da tela. O celular também usa duas linhas e a estrela, com escala, recuo e espaçamentos próprios; a frase não é mais fragmentada em três partes. A estrela gira suavemente conforme a rolagem e respeita movimento reduzido. A luz em laranja e vinho forma uma atmosfera orgânica atrás do texto. A referência principal de atmosfera foi a abertura da Fromanother, preservando fontes, cores e conteúdo da L0olf.

O parallax separa fundo, bloco de texto e linhas do título. A frase auxiliar alterna contexto/estratégia/direção. O balão discreto acompanha o mouse sem cobrir a tipografia; no celular não aparece. A composição se reorganiza para telas estreitas e baixas, incluindo 320 × 568. WebGL desenha apenas o campo de luz, com resolução limitada e aproximadamente 30 quadros por segundo; sem suporte, permanece o fundo em CSS. A animação pausa fora da capa e em abas ocultas. Movimento reduzido exibe uma cena estática.

As demais seções foram preservadas. A correção anterior do radar mantém a luz ambiente fora do container e recorta somente o feixe dentro do círculo, evitando a borda retangular e a rolagem horizontal.

Capturas: `review/hero-star-composition.png`, `review/hero-mobile-two-lines-390.png`, `review/hero-mobile-two-lines-571.png` e `review/radar-halo-mobile.png`. Referências desktop/mobile em `review/hero-refs-oct23/`. A capa anterior está em `review/before-new-hero-refs/`; a versão limpa anterior às camadas está em `review/before-layered-cover/`. Scripts de migração antigos são apenas histórico, não etapas de build.

## Direção visual atual — gradientes quentes (23/10/2026)

A estrutura editorial, a capa tipográfica e os movimentos aprovados foram preservados. `dist/ember.css`, carregado depois de `brand.css` e `cover.css`, aplica fundos escuros em vinho e carvão, gradientes de laranja e vermelho e cores de texto adequadas às novas superfícies. O logo da capa usa a variante `assets/brand/l0olf-cover-dark.svg`. Não foram adicionadas bibliotecas nem animações.

A versão anterior está em `review/before-ember/`. Capturas da nova direção: `review/ember-*.png`. `ember-theme.mjs` foi a migração de cores e referências de arquivos; não é etapa de build. O site continua local para revisão.

## Revisão 03 — experiência de marca (23/10/2026)

A página principal agora usa `dist/brand.css` e `dist/brand.js`. Os estilos e scripts anteriores ficam disponíveis para histórico e para a página de privacidade; não são carregados na home. A versão anterior do HTML está em `review/before-brand/index.html`.

Abertura com tipografia e objeto original, capítulo de contexto fixo no desktop (três estados pelo scroll), composições assimétricas para as quatro áreas de atuação, radar e conexões guiados pela rolagem, manifesto e assinatura de encerramento. O contato foi concentrado no fechamento. Não foram adicionados cases ou resultados fictícios.

Em telas de até 700 px os capítulos seguem em fluxo normal, sem pin. A preferência do sistema por movimento reduzido e o botão “Movimento” desativam as cenas fixas e exibem todo o texto. Lenis continua local e é usado somente no desktop com movimento ativo. Fontes Barlow, Space Grotesk e Instrument Serif são locais, como na revisão editorial anterior.

Referências e capturas: `review/refs/index.html`. Execute `node review/build-reference-gallery.mjs` somente para reconstruir esse caderno. `brand-redesign.mjs` foi a migração inicial do HTML; não é etapa de build. O site segue estático e local em http://127.0.0.1:4173, sem publicação nesta revisão.

Versão navegável de revisão, preparada em 23/10/2026. Não publicada.

## Abrir localmente

Requer Node.js. Na pasta `site`, execute `node serve.mjs` e abra http://localhost:4173. O servidor só escuta no computador local. Para encerrar, Ctrl+C.

## Arquivos

- `dist/index.html`: textos, estrutura e contatos.
- `dist/style.css`: identidade visual e versões responsivas.
- `dist/main.js`: menu mobile e mensagem inicial do WhatsApp.
- `dist/privacidade/index.html`: política em revisão.
- `dist/assets/favicon.svg`: ícone original.
- `dist/_headers`: cabeçalhos para hospedagem estática compatível.
- `review/`: capturas de desktop e celular; não publicar essa pasta.

Sem build, banco, API, pacotes de terceiros ou créditos de IA na execução. Tipografia utiliza fontes do sistema (Arial/Helvetica/sans-serif), sem distribuir arquivos proprietários ou requisitar Google Fonts. Arte feita em CSS e SVG original; referências não foram copiadas para os assets.

## Publicação preparada

Opção pesquisada: Netlify Free, conta do próprio titular, hospedagem e subdomínio `nome-disponivel.netlify.app`, HTTPS. O nome L0olf ainda não foi reservado. Domínio próprio é opcional e cobrado separadamente pelo registrador. Não comprar domínio ou ativar planos pagos automaticamente.

Na conta Netlify Free, criar um projeto estático por upload da pasta `dist`. Nenhum comando de build é necessário. Caso use Git, diretório de publicação `site/dist` a partir da raiz deste workspace, ou `dist` se o repositório começar na pasta site. Evitar ativar formulários, Analytics, scripts e extensões. Conferir o badge automático dos novos projetos Free: desativar antes da publicação, se a configuração permitir, ou reavaliar o tratamento de dados e a interface. Não contornar restrições do plano.

Antes do deploy público:

1. Aprovar textos e visual e concluir política, critérios de retenção e medidas de segurança reais.
2. Confirmar hospedagem e URL final. Remover aviso de revisão e metatags `noindex,nofollow`; remover `X-Robots-Tag` de `_headers`; alterar `robots.txt` para permitir indexação.
3. Incluir canonical e `og:url` com URL real; gerar sitemap com `/` e `/privacidade/`. Criar imagem de compartilhamento raster e referenciá-la por URL absoluta. Não inserir URL inventada.
4. Conferir o site hospedado: HTTPS, todas as páginas, 404, links, teclado, celular, cabeçalhos, cookies e requisições externas. A hospedagem pode adicionar componentes ausentes na versão local.
5. Atualizar seção de hospedagem da política com fornecedor efetivo, registros, transferência internacional e condições contratuais verificadas.

Publicar o site não hospeda APIs, webhooks, processamento de mensagens ou callback de exclusão de dados. Esta versão não implementa integração WhatsApp/CRM e sua política não deve ser cadastrada como política de um aplicativo que trate outros dados.

## Manutenção

Editar os arquivos, conferir localmente e enviar novamente a pasta `dist`. Manter cópia da versão anterior para reversão. Alterações de ferramentas ou coleta de dados exigem revisar a política antes de ativá-las. Atualizar ano/data quando necessário. Não inserir senhas ou tokens no HTML/JS.

## Pendências de conteúdo

Público/nicho e processo de trabalho detalhado ainda não foram definidos; por isso o site fala em empresas e não promete cadência, prazos, diagnóstico gratuito, preços ou orçamento mínimo. Não há cases, depoimentos, foto ou marca de cliente. Cidade, endereço e e-mail pessoal não são exibidos. Identificação empresarial foi reproduzida conforme fornecida; não foi consultado cadastro oficial nem garantida aprovação da Meta.

## Revisão visual 02 — camadas e movimento

- Capa centralizada com seis camadas de parallax; fundo em velocidade reduzida e elementos de primeiro plano em velocidade maior que a página.
- Smooth scroll: Lenis 1.3.17, vendorizado em `dist/vendor/lenis.min.js`, licença MIT em `LENIS-LICENSE.txt`. Sem carregamento de CDN, rastreadores ou dependência de IA. A declaração anterior de ausência de pacotes de terceiros foi substituída por esta dependência local.
- Touch mantém rolagem nativa. Movimento reduzido desativa Lenis, parallax e efeitos de entrada; a preferência é acompanhada em tempo real.
- Serviços reestruturados em quatro cenas gráficas originais feitas em HTML/CSS/SVG. Nenhuma imagem de referência foi copiada.
- `dist/motion.css` contém a nova direção visual; `dist/main.js` contém navegação, parallax e inicialização do smooth scroll. O script `redesign.mjs` foi uma migração executada uma vez; não precisa ser executado para servir ou publicar o site.
- Referências consultadas: NOTHIN’ (https://www.cssdesignawards.com/sites/nothin/50235/), AUGE Experience (https://www.cssdesignawards.com/sites/auge-experience/50287/) e 1367 Studio (https://www.cssdesignawards.com/sites/1367-studio/50191/). Referências de escala, composição e movimento; sem copiar identidade ou conteúdo.
