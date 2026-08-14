/* ============================================================================
   SCRIPT.JS — MOTOR DE RENDERIZAÇÃO
   ----------------------------------------------------------------------------
   Este arquivo lê o objeto CONFIG (de js/config.js) e monta a página inteira
   em tempo de execução. Normalmente NÃO é necessário editar este arquivo —
   as personalizações ficam todas em config.js.
   ============================================================================ */

(function () {
  "use strict";

  /* ----------------------------------------------------------------------
     ÍCONES (SVG inline — sem bibliotecas de ícones externas)
  ---------------------------------------------------------------------- */
  const ICONES = {
    whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.47 14.38c-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.66.15-.2.29-.76.94-.93 1.14-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-1.02 2.43 0 1.43 1.05 2.82 1.19 3.01.15.2 2.06 3.14 4.99 4.4.7.3 1.24.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.97-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.2-.55-.34z"/><path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.51 3.58 1.4 5.07L2 22l5.06-1.33A9.95 9.95 0 0 0 12.02 22C17.54 22 22 17.52 22 12S17.54 2 12.02 2zm0 18.1c-1.67 0-3.23-.46-4.56-1.26l-.33-.2-3.01.79.8-2.94-.21-.31A8.1 8.1 0 0 1 3.9 12c0-4.48 3.65-8.12 8.12-8.12s8.12 3.64 8.12 8.12-3.65 8.1-8.12 8.1z"/></svg>`,
    telefone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1.1.5 1.1 1.1V20c0 .6-.5 1.1-1.1 1.1C10.9 21.1 3 13.2 3 3.6 3 3 3.5 2.5 4.1 2.5h3.3c.6 0 1.1.5 1.1 1.1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.2 1L6.6 10.8z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="1" fill="currentColor" stroke="none"/></svg>`,
    pin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.4"/></svg>`,
    relogio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>`,
    seta: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h13M13 6l6 6-6 6"/></svg>`,
    estrela: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.6l2.9 6.1 6.6.7-4.9 4.5 1.3 6.6L12 17.3l-5.9 3.2 1.3-6.6-4.9-4.5 6.6-.7z"/></svg>`,
    fechar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 5l14 14M19 5L5 19"/></svg>`,
    lupa: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.8-4.8"/></svg>`,
    diploma: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3l8 4-8 4-8-4z"/><path d="M6 10.5V16c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-5.5"/></svg>`,
    ambiente: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 21V9.5L12 3l8 6.5V21"/><path d="M9 21v-6h6v6"/></svg>`,
    acompanhamento: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 11.5a8.4 8.4 0 1 1-3.8-7"/><path d="M21 3v5.5h-5.5"/></svg>`,
    mapa: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 4L3 6.5v13L9 17m0-13l6 2m-6-2v13m6-11l6-2.5v13L15 17m0-13v13"/></svg>`,
  };
  const ICONE_PADRAO_DIFERENCIAL = "lupa";

  /* ----------------------------------------------------------------------
     UTILITÁRIOS
  ---------------------------------------------------------------------- */
  function $(seletor, escopo) { return (escopo || document).querySelector(seletor); }
  function $all(seletor, escopo) { return Array.from((escopo || document).querySelectorAll(seletor)); }

  // Substitui marcadores {clinica} e {endereco} por dados reais do CONFIG
  function interpolar(texto) {
    if (!texto) return "";
    return texto
      .replace(/\{clinica\}/g, CONFIG.clinica.nome)
      .replace(/\{endereco\}/g, `${CONFIG.contato.endereco.linha1}, ${CONFIG.contato.endereco.linha2}`);
  }

  function apenasNumeros(texto) { return (texto || "").replace(/\D/g, ""); }

  function linkWhatsapp(mensagem) {
    const numero = apenasNumeros(CONFIG.contato.whatsapp);
    return `https://wa.me/${numero}?text=${encodeURIComponent(interpolar(mensagem))}`;
  }

  function escapeHtml(str) {
    return (str || "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  // Retorna o HTML de uma imagem real (se caminho preenchido) ou de um
  // placeholder elegante gerado em CSS (se o campo estiver vazio).
  function resolverImagem(caminho, textoAlternativo, rotuloPlaceholder) {
    if (caminho) {
      return `<img src="${escapeHtml(caminho)}" alt="${escapeHtml(textoAlternativo || "")}" loading="lazy">`;
    }
    return `<div class="imagem-espaco" role="img" aria-label="${escapeHtml(textoAlternativo || "Imagem ilustrativa")}">
      <span class="imagem-espaco__rotulo">${escapeHtml(rotuloPlaceholder || "SUBSTITUA ESTA IMAGEM")}</span>
    </div>`;
  }

  /* ----------------------------------------------------------------------
     SEO / METADADOS / JSON-LD
  ---------------------------------------------------------------------- */
  function aplicarMeta() {
    const m = CONFIG.meta;
    const c = CONFIG.clinica;
    document.title = m.titulo;
    document.documentElement.lang = m.idioma || "pt-BR";

    const setMeta = (attr, key, content) => {
      let tag = document.querySelector(`meta[${attr}="${key}"]`);
      if (!tag) { tag = document.createElement("meta"); tag.setAttribute(attr, key); document.head.appendChild(tag); }
      tag.setAttribute("content", content);
    };
    setMeta("name", "description", m.descricao);
    if (m.palavrasChave) setMeta("name", "keywords", m.palavrasChave);
    setMeta("property", "og:title", m.titulo);
    setMeta("property", "og:description", m.descricao);
    setMeta("property", "og:type", "business.business");
    setMeta("property", "og:locale", m.idioma || "pt-BR");
    if (m.urlCanonica) setMeta("property", "og:url", m.urlCanonica);
    if (m.imagemCompartilhamento) setMeta("property", "og:image", m.imagemCompartilhamento);
    setMeta("name", "twitter:card", "summary_large_image");

    if (m.urlCanonica) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) { link = document.createElement("link"); link.setAttribute("rel", "canonical"); document.head.appendChild(link); }
      link.setAttribute("href", m.urlCanonica);
    }

    // JSON-LD — Dados estruturados para negócio local (SEO)
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "name": c.nome,
      "description": m.descricao,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": CONFIG.contato.endereco.linha1,
        "addressLocality": c.cidade,
        "addressRegion": c.estado,
        "postalCode": CONFIG.contato.endereco.cep,
        "addressCountry": "BR",
      },
      "telephone": CONFIG.contato.telefoneExibicao,
      "email": CONFIG.contato.email,
      "sameAs": [CONFIG.contato.instagramUrl].filter(Boolean),
      "areaServed": c.cidade,
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
  }

  /* ----------------------------------------------------------------------
     CORES — aplica a paleta de config.js como variáveis CSS
  ---------------------------------------------------------------------- */
  function aplicarCores() {
    const mapa = {
      fundo: "--cor-fundo", fundoAlternativo: "--cor-fundo-alt", superficie: "--cor-superficie",
      tinta: "--cor-tinta", tintaSuave: "--cor-tinta-suave", noturno: "--cor-noturno",
      textoNoturno: "--cor-texto-noturno", destaque: "--cor-destaque", destaqueSuave: "--cor-destaque-suave",
      bronze: "--cor-bronze", bronzeSuave: "--cor-bronze-suave", borda: "--cor-borda",
    };
    Object.entries(CONFIG.cores || {}).forEach(([chave, valor]) => {
      if (mapa[chave] && valor) document.documentElement.style.setProperty(mapa[chave], valor);
    });
  }

  /* ----------------------------------------------------------------------
     ANALYTICS (opcional — só carrega se IDs forem preenchidos em config.js)
  ---------------------------------------------------------------------- */
  function iniciarAnalytics() {
    const { googleAnalyticsId, metaPixelId } = CONFIG.analytics || {};
    if (googleAnalyticsId) {
      const s1 = document.createElement("script");
      s1.async = true;
      s1.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      document.head.appendChild(s1);
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag("js", new Date());
      window.gtag("config", googleAnalyticsId);
    }
    if (metaPixelId) {
      /* eslint-disable */
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
      n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
      document,'script','https://connect.facebook.net/en_US/fbevents.js');
      window.fbq('init', metaPixelId);
      window.fbq('track', 'PageView');
      /* eslint-enable */
    }
  }

  // Ponto único para registrar cliques de conversão (WhatsApp / agendamento).
  // Já preparado para GA4 e Meta Pixel — só funciona quando os IDs acima existirem.
  function rastrearEvento(nome, detalhes) {
    if (window.gtag) window.gtag("event", nome, detalhes || {});
    if (window.fbq) window.fbq("trackCustom", nome, detalhes || {});
  }
  window.addEventListener("click", (ev) => {
    const alvo = ev.target.closest("[data-whatsapp-cta]");
    if (alvo) rastrearEvento("whatsapp_click", { origem: alvo.dataset.whatsappCta });
  });

  /* ----------------------------------------------------------------------
     RENDER: HEADER
  ---------------------------------------------------------------------- */
  function renderHeader() {
    const c = CONFIG.clinica;
    const logo = c.logoImagem
      ? `<img src="${escapeHtml(c.logoImagem)}" alt="${escapeHtml(c.nome)}">`
      : escapeHtml(c.logoTexto);

    const itensNav = [
      ["Procedimentos", "#procedimentos"],
      ["Diferenciais", "#diferenciais"],
      ["Sobre", "#sobre"],
      ["Equipe", "#equipe"],
      ["Avaliações", "#avaliacoes"],
      ["FAQ", "#faq"],
      ["Localização", "#localizacao"],
    ];
    const nav = itensNav.map(([txt, href]) => `<a href="${href}">${txt}</a>`).join("");

    $("#cabecalho").innerHTML = `
      <div class="container cabecalho__linha">
        <a href="#topo" class="marca">${logo}</a>
        <nav class="nav-principal" aria-label="Navegação principal">${nav}</nav>
        <div class="cabecalho__acoes">
          <a class="botao botao--secundario" href="tel:${apenasNumeros(CONFIG.contato.telefoneExibicao)}">${CONFIG.contato.telefoneExibicao}</a>
          <a class="botao botao--primario" data-whatsapp-cta="header" href="${linkWhatsapp(CONFIG.hero.mensagemWhatsapp)}" target="_blank" rel="noopener">${ICONES.whatsapp}<span>Agendar</span></a>
          <button class="botao-menu" id="botao-menu" aria-label="Abrir menu" aria-expanded="false" aria-controls="menu-movel">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <div class="menu-movel" id="menu-movel">
        <div class="menu-movel__inner">
          <ul>${itensNav.map(([txt, href]) => `<li><a href="${href}" data-fecha-menu>${txt}</a></li>`).join("")}</ul>
          <div class="container">
            <a class="botao botao--primario botao--bloco" data-whatsapp-cta="menu_mobile" href="${linkWhatsapp(CONFIG.hero.mensagemWhatsapp)}" target="_blank" rel="noopener">${ICONES.whatsapp}<span>Agendar no WhatsApp</span></a>
          </div>
        </div>
      </div>`;

    const botaoMenu = $("#botao-menu");
    const menu = $("#menu-movel");
    botaoMenu.addEventListener("click", () => {
      const aberto = menu.classList.toggle("aberto");
      botaoMenu.classList.toggle("aberto", aberto);
      botaoMenu.setAttribute("aria-expanded", String(aberto));
    });
    $all("[data-fecha-menu]", menu).forEach((a) => a.addEventListener("click", () => {
      menu.classList.remove("aberto"); botaoMenu.classList.remove("aberto"); botaoMenu.setAttribute("aria-expanded", "false");
    }));

    const cabecalho = $("#cabecalho");
    const aoRolar = () => cabecalho.classList.toggle("esta-rolado", window.scrollY > 8);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
  }

  /* ----------------------------------------------------------------------
     RENDER: HERO
  ---------------------------------------------------------------------- */
  function renderHero() {
    const h = CONFIG.hero;
    const titulo = h.tituloDestaque
      ? h.titulo.replace(h.tituloDestaque, `<em class="destaque-texto">${h.tituloDestaque}</em>`)
      : h.titulo;
    const selo = h.selo && h.selo.numero
      ? `<div class="hero__selo"><strong>${escapeHtml(h.selo.numero)}</strong><span>${escapeHtml(h.selo.legenda)}</span></div>`
      : "";

    $("#hero").innerHTML = `
      <div class="container hero__grid">
        <div class="revelar">
          <p class="eyebrow">${escapeHtml(h.elegibilidade)}</p>
          <h1 class="hero__titulo">${titulo}</h1>
          <p class="hero__subtitulo">${escapeHtml(h.subtitulo)}</p>
          <div class="hero__acoes">
            <a class="botao botao--primario" data-whatsapp-cta="hero_primario" href="${linkWhatsapp(h.mensagemWhatsapp)}" target="_blank" rel="noopener">${ICONES.whatsapp}<span>${escapeHtml(h.ctaPrimario)}</span></a>
            <a class="botao botao--secundario" href="#procedimentos"><span>${escapeHtml(h.ctaSecundario)}</span>${ICONES.seta}</a>
          </div>
        </div>
        <div class="hero__figura moldura-precisao revelar">
          <span class="canto-b"></span><span class="canto-c"></span>
          ${resolverImagem(h.imagem, CONFIG.clinica.nome, "hero.jpg — foto principal da clínica")}
          <span class="anotacao hero__anotacao-topo">AVAL. 01 / INDIVIDUAL</span>
          ${selo}
        </div>
      </div>`;
  }

  /* ----------------------------------------------------------------------
     RENDER: DIFERENCIAIS
  ---------------------------------------------------------------------- */
  function renderDiferenciais() {
    const itens = CONFIG.diferenciais.map((d) => `
      <div class="diferencial revelar">
        <div class="diferencial__icone">${ICONES[d.icone] || ICONES[ICONE_PADRAO_DIFERENCIAL]}</div>
        <h3 class="diferencial__titulo">${escapeHtml(d.titulo)}</h3>
        <p class="diferencial__descricao">${escapeHtml(d.descricao)}</p>
      </div>`).join("");

    $("#diferenciais").innerHTML = `
      <div class="container">
        <div class="cabecalho-secao revelar">
          <p class="eyebrow">Por que aqui</p>
          <h2 class="titulo-secao">O que sustenta cada atendimento</h2>
        </div>
      </div>
      <div class="container">
        <div class="diferenciais__grade">${itens}</div>
      </div>`;
  }

  /* ----------------------------------------------------------------------
     RENDER: PROCEDIMENTOS (com filtro por categoria)
  ---------------------------------------------------------------------- */
  function renderProcedimentos() {
    const categorias = ["Todos", ...new Set(CONFIG.procedimentos.map((p) => p.categoria))];
    const filtros = categorias.map((cat, i) => `<button class="filtro ${i === 0 ? "ativo" : ""}" data-filtro="${escapeHtml(cat)}">${escapeHtml(cat)}</button>`).join("");

    const cartoes = CONFIG.procedimentos.map((p) => {
      const msg = `Olá! Gostaria de saber mais sobre ${p.nome}.`;
      return `
      <article class="cartao-procedimento revelar" data-categoria="${escapeHtml(p.categoria)}">
        <div class="cartao-procedimento__imagem">${resolverImagem(p.imagem, p.nome, `procedimentos/${p.id}.jpg`)}</div>
        <div class="cartao-procedimento__corpo">
          <span class="cartao-procedimento__categoria">${escapeHtml(p.categoria)}</span>
          <h3 class="cartao-procedimento__nome">${escapeHtml(p.nome)}</h3>
          <p class="cartao-procedimento__descricao">${escapeHtml(p.descricaoCurta)}</p>
          <p class="cartao-procedimento__objetivo">${escapeHtml(p.objetivo)}</p>
          ${p.preco ? `<p class="cartao-procedimento__preco">${escapeHtml(p.preco)}</p>` : ""}
          <div class="cartao-procedimento__rodape">
            <a class="botao botao--secundario" data-whatsapp-cta="procedimento_${escapeHtml(p.id)}" href="${linkWhatsapp(msg)}" target="_blank" rel="noopener">
              <span>Falar sobre este procedimento</span>${ICONES.seta}
            </a>
          </div>
        </div>
      </article>`;
    }).join("");

    $("#procedimentos").innerHTML = `
      <div class="container">
        <div class="cabecalho-secao revelar">
          <p class="eyebrow">O que oferecemos</p>
          <h2 class="titulo-secao">Procedimentos conduzidos com avaliação prévia</h2>
          <p class="subtitulo-secao">Cada indicação parte de uma avaliação individual — nenhum protocolo é padrão.</p>
        </div>
        <div class="filtros-procedimentos" role="tablist" aria-label="Filtrar procedimentos por categoria">${filtros}</div>
        <div class="grade-procedimentos" id="grade-procedimentos">${cartoes}</div>
      </div>`;

    $all("[data-filtro]").forEach((btn) => btn.addEventListener("click", () => {
      $all("[data-filtro]").forEach((b) => b.classList.remove("ativo"));
      btn.classList.add("ativo");
      const filtro = btn.dataset.filtro;
      $all(".cartao-procedimento", $("#grade-procedimentos")).forEach((card) => {
        const mostra = filtro === "Todos" || card.dataset.categoria === filtro;
        card.style.display = mostra ? "" : "none";
      });
    }));
  }

  /* ----------------------------------------------------------------------
     RENDER: DEPOIMENTOS
  ---------------------------------------------------------------------- */
  function renderDepoimentos() {
    const cartoes = CONFIG.depoimentos.map((d) => `
      <div class="cartao-depoimento revelar">
        <div class="cartao-depoimento__estrelas" aria-hidden="true">${ICONES.estrela.repeat(d.nota)}</div>
        <p class="cartao-depoimento__texto">${escapeHtml(d.comentario)}</p>
        <div class="cartao-depoimento__rodape">
          <div class="cartao-depoimento__avatar">${escapeHtml(d.iniciais)}</div>
          <div>
            <p class="cartao-depoimento__nome">${escapeHtml(d.nome)}</p>
            <p class="cartao-depoimento__proc">${escapeHtml(d.procedimento)}</p>
          </div>
        </div>
      </div>`).join("");

    $("#avaliacoes").innerHTML = `
      <div class="container">
        <div class="cabecalho-secao revelar">
          <p class="eyebrow">Avaliações</p>
          <h2 class="titulo-secao">Quem já passou pela avaliação</h2>
        </div>
        <div class="trilha-depoimentos">${cartoes}</div>
        <p class="aviso-depoimentos">Depoimentos demonstrativos — substitua pelos relatos reais de pacientes em config.js.</p>
      </div>`;
  }

  /* ----------------------------------------------------------------------
     RENDER: GALERIA + LIGHTBOX
  ---------------------------------------------------------------------- */
  function renderGaleria() {
    const itens = CONFIG.galeria.map((g, i) => `
      <button class="item-galeria revelar" data-galeria-idx="${i}" aria-label="Ampliar imagem: ${escapeHtml(g.legenda)}">
        ${resolverImagem(g.imagem, g.legenda, `galeria/${i + 1}.jpg`)}
        <span class="item-galeria__legenda">${escapeHtml(g.legenda)}</span>
      </button>`).join("");

    $("#galeria").innerHTML = `
      <div class="container">
        <div class="cabecalho-secao revelar">
          <p class="eyebrow">Resultados e ambiente</p>
          <h2 class="titulo-secao">Um retrato de como cuidamos de cada detalhe</h2>
          <p class="subtitulo-secao">Fotos do espaço e dos procedimentos. Substitua livremente pelas imagens reais da clínica.</p>
        </div>
        <div class="grade-galeria">${itens}</div>
      </div>
      <div class="caixa-luz" id="caixa-luz" role="dialog" aria-modal="true" aria-label="Visualização ampliada">
        <button class="caixa-luz__fechar" id="caixa-luz-fechar" aria-label="Fechar">${ICONES.fechar}</button>
        <div id="caixa-luz-conteudo"></div>
      </div>`;

    const caixa = $("#caixa-luz");
    const conteudo = $("#caixa-luz-conteudo");
    function abrir(idx) {
      const g = CONFIG.galeria[idx];
      conteudo.innerHTML = g.imagem
        ? `<img src="${escapeHtml(g.imagem)}" alt="${escapeHtml(g.legenda)}"><p class="caixa-luz__legenda">${escapeHtml(g.legenda)}</p>`
        : `<div class="imagem-espaco" style="width:min(600px,80vw);aspect-ratio:4/3;"><span class="imagem-espaco__rotulo">${escapeHtml(g.legenda)}</span></div>`;
      caixa.classList.add("aberta");
    }
    $all("[data-galeria-idx]").forEach((btn) => btn.addEventListener("click", () => abrir(Number(btn.dataset.galeriaIdx))));
    $("#caixa-luz-fechar").addEventListener("click", () => caixa.classList.remove("aberta"));
    caixa.addEventListener("click", (e) => { if (e.target === caixa) caixa.classList.remove("aberta"); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") caixa.classList.remove("aberta"); });
  }

  /* ----------------------------------------------------------------------
     RENDER: SOBRE
  ---------------------------------------------------------------------- */
  function renderSobre() {
    const s = CONFIG.sobre;
    const paragrafos = s.paragrafos.map((p) => `<p class="sobre__paragrafo">${escapeHtml(interpolar(p))}</p>`).join("");

    $("#sobre").innerHTML = `
      <div class="container sobre__grade">
        <div class="sobre__figura moldura-precisao revelar">
          <span class="canto-b"></span><span class="canto-c"></span>
          ${resolverImagem(s.imagem, CONFIG.clinica.nome, "sobre.jpg — ambiente ou equipe da clínica")}
        </div>
        <div class="revelar">
          <p class="eyebrow">Sobre a clínica</p>
          <h2 class="titulo-secao">${escapeHtml(s.titulo)}</h2>
          ${paragrafos}
          <p class="sobre__filosofia">${escapeHtml(s.filosofia)}</p>
        </div>
      </div>`;
  }

  /* ----------------------------------------------------------------------
     RENDER: EQUIPE
  ---------------------------------------------------------------------- */
  function renderEquipe() {
    const cartoes = CONFIG.equipe.map((p) => `
      <div class="cartao-equipe revelar">
        <div class="cartao-equipe__foto">${resolverImagem(p.foto, p.nome, "equipe/foto.jpg")}</div>
        <h3 class="cartao-equipe__nome">${escapeHtml(p.nome)}</h3>
        <p class="cartao-equipe__cargo">${escapeHtml(p.cargo)}</p>
        <p class="cartao-equipe__bio">${escapeHtml(p.apresentacao)}</p>
      </div>`).join("");

    $("#equipe").innerHTML = `
      <div class="container">
        <div class="cabecalho-secao revelar">
          <p class="eyebrow">Equipe</p>
          <h2 class="titulo-secao">Quem conduz sua avaliação</h2>
        </div>
        <div class="grade-equipe">${cartoes}</div>
      </div>`;
  }

  /* ----------------------------------------------------------------------
     RENDER: COMO FUNCIONA (fundo escuro)
  ---------------------------------------------------------------------- */
  function renderComoFunciona() {
    const passos = CONFIG.comoFunciona.map((p) => `
      <div class="passo revelar">
        <h3 class="passo__titulo">${escapeHtml(p.titulo)}</h3>
        <p class="passo__descricao">${escapeHtml(p.descricao)}</p>
      </div>`).join("");

    $("#como-funciona").innerHTML = `
      <div class="container">
        <div class="cabecalho-secao revelar">
          <p class="eyebrow">Como funciona</p>
          <h2 class="titulo-secao">Do primeiro contato ao plano de cuidado</h2>
        </div>
        <div class="passos">${passos}</div>
      </div>`;
  }

  /* ----------------------------------------------------------------------
     RENDER: FAQ
  ---------------------------------------------------------------------- */
  function renderFaq() {
    const itens = CONFIG.faq.map((f, i) => `
      <div class="item-faq revelar" data-faq-idx="${i}">
        <button class="item-faq__pergunta" aria-expanded="false">
          <span>${escapeHtml(f.pergunta)}</span>
          <span class="item-faq__icone" aria-hidden="true"></span>
        </button>
        <div class="item-faq__resposta">
          <div class="item-faq__resposta-inner"><p>${escapeHtml(interpolar(f.resposta))}</p></div>
        </div>
      </div>`).join("");

    $("#faq").innerHTML = `
      <div class="container">
        <div class="cabecalho-secao cabecalho-secao--centro revelar">
          <p class="eyebrow">Dúvidas frequentes</p>
          <h2 class="titulo-secao">Perguntas antes de agendar</h2>
        </div>
        <div class="lista-faq">${itens}</div>
      </div>`;

    $all(".item-faq").forEach((item) => {
      $(".item-faq__pergunta", item).addEventListener("click", () => {
        const jaAberto = item.classList.contains("aberto");
        $all(".item-faq").forEach((i) => { i.classList.remove("aberto"); $(".item-faq__pergunta", i).setAttribute("aria-expanded", "false"); });
        if (!jaAberto) { item.classList.add("aberto"); $(".item-faq__pergunta", item).setAttribute("aria-expanded", "true"); }
      });
    });
  }

  /* ----------------------------------------------------------------------
     RENDER: LOCALIZAÇÃO
  ---------------------------------------------------------------------- */
  function renderLocalizacao() {
    const end = CONFIG.contato.endereco;
    const horarios = CONFIG.contato.horarios.map((h) => `<div class="info-item"><span class="info-item__rotulo"></span><span class="info-item__valor">${escapeHtml(h.dias)} · ${escapeHtml(h.horario)}</span></div>`).join("");

    const mapa = end.mapaEmbedUrl
      ? `<iframe src="${escapeHtml(end.mapaEmbedUrl)}" loading="lazy" allowfullscreen title="Mapa de localização"></iframe>`
      : `<div class="mapa-recipiente__marcador">
           ${ICONES.mapa}
           <a class="botao botao--secundario" href="${escapeHtml(end.mapaUrl)}" target="_blank" rel="noopener"><span>Ver rota no mapa</span>${ICONES.seta}</a>
         </div>`;

    $("#localizacao").innerHTML = `
      <div class="container localizacao__grade">
        <div class="revelar">
          <p class="eyebrow">Localização e contato</p>
          <h2 class="titulo-secao">Venha nos conhecer</h2>
          <div class="info-localizacao" style="margin-top:32px;">
            <div class="info-item">
              <span class="info-item__icone">${ICONES.pin}</span>
              <div><p class="info-item__rotulo">Endereço</p><p class="info-item__valor">${escapeHtml(end.linha1)}<br>${escapeHtml(end.linha2)} — ${escapeHtml(end.cep)}</p></div>
            </div>
            <div class="info-item">
              <span class="info-item__icone">${ICONES.relogio}</span>
              <div><p class="info-item__rotulo">Horário de atendimento</p><p class="info-item__valor">${CONFIG.contato.horarios.map((h) => `${escapeHtml(h.dias)}: ${escapeHtml(h.horario)}`).join("<br>")}</p></div>
            </div>
            <div class="info-item">
              <span class="info-item__icone">${ICONES.telefone}</span>
              <div><p class="info-item__rotulo">Telefone / WhatsApp</p><p class="info-item__valor"><a href="${linkWhatsapp(CONFIG.hero.mensagemWhatsapp)}" target="_blank" rel="noopener" data-whatsapp-cta="localizacao">${escapeHtml(CONFIG.contato.telefoneExibicao)}</a></p></div>
            </div>
            <div class="info-item">
              <span class="info-item__icone">${ICONES.instagram}</span>
              <div><p class="info-item__rotulo">Instagram</p><p class="info-item__valor"><a href="${escapeHtml(CONFIG.contato.instagramUrl)}" target="_blank" rel="noopener">${escapeHtml(CONFIG.contato.instagramUsuario)}</a></p></div>
            </div>
          </div>
        </div>
        <div class="mapa-recipiente revelar">${mapa}</div>
      </div>`;
  }

  /* ----------------------------------------------------------------------
     RENDER: CTA FINAL
  ---------------------------------------------------------------------- */
  function renderCtaFinal() {
    const c = CONFIG.ctaFinal;
    $("#cta-final").innerHTML = `
      <div class="container cta-final revelar">
        <h2 class="cta-final__titulo">${escapeHtml(c.titulo)}</h2>
        <p class="cta-final__subtitulo">${escapeHtml(c.subtitulo)}</p>
        <div class="cta-final__acoes">
          <a class="botao botao--bronze" data-whatsapp-cta="cta_final" href="${linkWhatsapp(c.mensagemWhatsapp)}" target="_blank" rel="noopener">${ICONES.whatsapp}<span>${escapeHtml(c.botao)}</span></a>
        </div>
      </div>`;
  }

  /* ----------------------------------------------------------------------
     RENDER: RODAPÉ
  ---------------------------------------------------------------------- */
  function renderFooter() {
    const c = CONFIG.clinica;
    $("#rodape").innerHTML = `
      <div class="container">
        <div class="rodape__grade">
          <div>
            <p class="rodape__marca">${escapeHtml(c.logoTexto)}</p>
            <p class="rodape__slogan">${escapeHtml(c.slogan)}</p>
          </div>
          <div>
            <p class="rodape__titulo-coluna">Navegação</p>
            <div class="rodape__links">
              <a href="#procedimentos">Procedimentos</a>
              <a href="#sobre">Sobre</a>
              <a href="#equipe">Equipe</a>
              <a href="#faq">Dúvidas</a>
            </div>
          </div>
          <div>
            <p class="rodape__titulo-coluna">Contato</p>
            <div class="rodape__links">
              <a href="${linkWhatsapp(CONFIG.hero.mensagemWhatsapp)}" target="_blank" rel="noopener" data-whatsapp-cta="rodape">WhatsApp</a>
              <a href="${escapeHtml(CONFIG.contato.instagramUrl)}" target="_blank" rel="noopener">Instagram</a>
              <a href="tel:${apenasNumeros(CONFIG.contato.telefoneExibicao)}">${escapeHtml(CONFIG.contato.telefoneExibicao)}</a>
            </div>
          </div>
          <div>
            <p class="rodape__titulo-coluna">Endereço</p>
            <div class="rodape__links">
              <span>${escapeHtml(CONFIG.contato.endereco.linha1)}</span>
              <span>${escapeHtml(CONFIG.contato.endereco.linha2)}</span>
            </div>
          </div>
        </div>
        <p class="rodape__aviso">${escapeHtml(CONFIG.footer.aviso)}</p>
        <div class="rodape__base">
          <span>© ${new Date().getFullYear()} ${escapeHtml(c.nome)}. Todos os direitos reservados.</span>
          <span>${escapeHtml(CONFIG.footer.textoLegal)}</span>
        </div>
      </div>`;
  }

  /* ----------------------------------------------------------------------
     BOTÃO FLUTUANTE DO WHATSAPP
  ---------------------------------------------------------------------- */
  function renderWhatsappFlutuante() {
    $("#whatsapp-flutuante").outerHTML = `
      <a id="whatsapp-flutuante" class="whatsapp-flutuante" data-whatsapp-cta="flutuante"
         href="${linkWhatsapp(CONFIG.hero.mensagemWhatsapp)}" target="_blank" rel="noopener"
         aria-label="Conversar no WhatsApp">${ICONES.whatsapp}</a>`;
  }

  /* ----------------------------------------------------------------------
     ANIMAÇÃO DE ENTRADA (IntersectionObserver)
  ---------------------------------------------------------------------- */
  function iniciarRevelacoes() {
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visivel");
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    $all(".revelar").forEach((el) => observador.observe(el));
  }

  /* ----------------------------------------------------------------------
     INICIALIZAÇÃO
  ---------------------------------------------------------------------- */
  function iniciar() {
    aplicarCores();
    aplicarMeta();
    iniciarAnalytics();

    renderHeader();
    renderHero();
    renderDiferenciais();
    renderProcedimentos();
    renderDepoimentos();
    renderGaleria();
    renderSobre();
    renderEquipe();
    renderComoFunciona();
    renderFaq();
    renderLocalizacao();
    renderCtaFinal();
    renderFooter();
    renderWhatsappFlutuante();

    iniciarRevelacoes();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
