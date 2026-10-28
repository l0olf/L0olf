# Hospedagem e privacidade — consulta em 23/10/2026

## Hospedagem

**Netlify Free: opção preparada.** A fonte oficial permite projetos comerciais e informa ausência de exigência de cartão: https://www.netlify.com/blog/introducing-netlify-free-plan/ . Essa publicação é de 2024; seus limites antigos NÃO foram usados. A página atual https://www.netlify.com/pricing/ informa 300 créditos/mês, 15 créditos por deploy de produção, 20 créditos por GB de transferência e 2 créditos por 10 mil requisições. Não são créditos de IA e o site não executa IA. HTTPS e domínio customizado são suportados; registro de domínio não está incluído. Confirmar condições na conta no momento do deploy. Ao esgotar créditos, o site é pausado conforme https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/how-credits-work/ . Não ativar upgrade automático. Novos projetos Free podem ter badge automático: https://docs.netlify.com/manage/projects/powered-by-netlify-badge/ . Verificar configuração e impacto antes de publicar.

**Cloudflare Pages: alternativa investigada, não escolhida definitivamente.** Fontes oficiais confirmam HTTPS e plano gratuito com 500 builds/mês, 20 mil arquivos e 25 MiB por arquivo: https://www.cloudflare.com/products/pages/ e https://developers.cloudflare.com/pages/platform/limits/ . A pesquisa realizada não obteve uma confirmação oficial suficientemente explícita sobre uso comercial e exigência de cartão para concluir a recomendação. Não tratar comentários de fóruns como termos contratuais.

**Vercel Hobby: excluído.** Termos restringem uso a pessoal ou não comercial: https://vercel.com/legal/terms e https://vercel.com/docs/plans/hobby . Não serve para este projeto comercial no plano gratuito.

O site estático funciona sem servidor de aplicação. Infraestrutura futura para API/integrações deve ser dimensionada separadamente.

## Mapa de dados confirmado

| Contexto | Dados/origem | Uso | Armazenamento/acesso | Pendência |
|---|---|---|---|---|
| Navegação local | Requisição HTTP necessária para servir arquivos | Entregar páginas | Servidor local, sem logs implementados | Avaliar provedor no deploy |
| Código do site | Nenhum formulário, cookie, localStorage, pixel, analytics, embed ou fonte remota | Apresentação comercial | Assets locais | Verificar injeções do provedor |
| Contato iniciado pelo visitante | Telefone, perfil disponível e conteúdo enviado no WhatsApp | Responder e discutir contratação | WhatsApp; somente Iago acessa, segundo confirmação | Retenção; confirmar backups e medidas de segurança |
| Solicitações de privacidade | Solicitação e dados mínimos para localizar conversa | Atender direitos | WhatsApp comercial, autorizado como canal | Procedimento operacional e registro de atendimento |
| Integração CRM/Meta/WhatsApp | Fora do escopo desta política, por solicitação do titular | Não implementada no site | Não aplicável ao site | Política e mecanismo próprios se futura integração exigir |

Bases legais precisam corresponder às finalidades. Procedimentos pré-contratuais a pedido do titular: art. 7º, V. Atendimento de obrigação legal: art. 7º, II. Exercício regular de direitos, quando efetivamente necessário: art. 7º, VI. Não assumir consentimento para todo tratamento nem interesse legítimo sem análise.

Fontes oficiais: LGPD https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm ; orientações da ANPD https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados ; política do WhatsApp https://www.whatsapp.com/legal/privacy-policy ; política do provedor considerado https://www.netlify.com/privacy/ .

Direitos, transparência e limitação do tratamento são exigências legais aplicáveis; o prazo de seis meses para revisão de contatos é uma proposta operacional, NÃO um prazo geral obrigatório da LGPD. Revisão da política não garante conformidade jurídica automática.

## Meta

Tentadas fontes oficiais https://developers.facebook.com/terms/ e https://developers.facebook.com/docs/development/create-an-app/app-dashboard/data-deletion-callback/ . O acesso retornou indisponibilidade e HTTP 429; não foi possível confirmar exigências específicas do aplicativo nesta sessão. Documentação de Meta Horizon/VR encontrada em busca foi descartada por não ser a integração em questão. Não foi criada página de exclusão como se substituísse callback técnico. Não há alegação de parceria ou aprovação. Publicar landing page não garante verificação empresarial ou aprovação de app.

## Atualização após confirmações

Iago autorizou o WhatsApp como canal de privacidade, confirmou acesso individual às conversas e armazenamento apenas no WhatsApp, e adotou revisão após seis meses sem interação para contatos sem contratação. Retenção atualizada na política. Email pessoal e cidade foram omitidos conforme preferência. Hospedagem ainda não ativada; política será fechada com os dados técnicos efetivos no deploy. Acesso individual é a única medida operacional de segurança afirmada; não foram inventados backups, criptografia de dispositivos ou autenticação em duas etapas.
