SITE DO PSICÓLOGO BRENO AUGUSTO - v16

PUBLICAR (Cloudflare Pages, gratuito)
- Publique esta pasta inteira. O atualizar-valores.py vai junto, sem problema: não contém nada sigiloso.
- Sem domínio próprio, o site usa o endereço *.pages.dev. As tags canonical, og:url e og:image foram removidas porque exigem URL absoluta.
  Quando houver endereço definitivo, adicione em cada página, dentro do <head>:
    <link rel="canonical" href="https://SEU-ENDERECO/PAGINA.html">
    <meta property="og:url" content="https://SEU-ENDERECO/PAGINA.html">
    <meta property="og:image" content="https://SEU-ENDERECO/assets/imagens/og-image.jpg">
    <meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
    <meta name="twitter:card" content="summary_large_image">
  (assets/imagens/og-image.jpg já existe, 1200x630.)

DURAÇÃO E VALOR DA SESSÃO
- Abra atualizar-valores.py, altere os valores no topo e rode: python3 atualizar-valores.py
- Atualiza home, contato e funcionamento de uma vez (trechos marcados com data-v="duracao" e data-v="valor").

FONTES
- DM Sans e Playfair Display (licença OFL) estão em assets/fontes/, sem depender do Google.

FOTO
- assets/imagens/foto-breno.png (1080x1082). Para trocar, substitua o arquivo.

REVISAR
- privacidade.html é um rascunho baseado no que o site faz; revisar antes de publicar.
- Horários, cancelamento e pagamento são combinados pelo WhatsApp e ficam fora do site, por decisão do Breno.
