/* ============================================================================
   CONFIG.JS — ARQUIVO ÚNICO DE PERSONALIZAÇÃO
   ----------------------------------------------------------------------------
   Este é o ÚNICO arquivo que precisa ser editado para adaptar o site a um
   novo cliente. Todo o resto do projeto (HTML, CSS, JS) lê os dados daqui.

   Não é necessário saber programar para editar este arquivo — basta trocar
   o texto entre aspas "assim" e salvar. Leia o GUIA-RAPIDO.md se for a
   primeira vez.

   Dica: procure por "ALTERE AQUI" para achar rapidamente cada bloco.
   ============================================================================ */

const CONFIG = {

  /* ---------------------------------------------------------------------
     1. IDENTIDADE DA CLÍNICA
  --------------------------------------------------------------------- */
  clinica: {
    // ALTERE AQUI O NOME DA CLÍNICA
    nome: "Clínica Lumière",
    nomeCurto: "Lumière",

    // Texto usado como logo (se não houver arquivo de logo em imagem)
    // ALTERE AQUI A LOGO
    logoTexto: "Lumière",
    logoImagem: "", // ex: "images/logo.svg" — deixe vazio para usar o logo em texto

    // Frase curta usada no header/rodapé (opcional)
    slogan: "Estética avançada e cuidado individualizado",

    // Usados para SEO local — ver seção "meta" abaixo
    cidade: "Bauru",
    bairro: "Vila Aviação",
    estado: "SP",
    especialidade: "estética facial e corporal avançada",
  },

  /* ---------------------------------------------------------------------
     2. CORES — ALTERE AQUI AS CORES
     ---------------------------------------------------------------------
     Cada cor abaixo alimenta uma variável CSS (ver css/styles.css).
     Use códigos hexadecimais. Se não for mexer, deixe como está —
     a paleta padrão já foi calibrada para transmitir sofisticação.
  --------------------------------------------------------------------- */
  cores: {
    fundo: "#F2EFE7",          // off-white quente (fundo principal)
    fundoAlternativo: "#E8E2D3", // tom levemente mais escuro (seções alternadas)
    superficie: "#FBFAF6",     // cartões e elementos elevados
    tinta: "#23241F",          // texto principal
    tintaSuave: "#5B5B51",     // texto secundário
    noturno: "#1B1F1A",        // fundo escuro (seções de contraste)
    textoNoturno: "#EEE9DA",   // texto sobre fundo escuro
    destaque: "#4A5D50",       // verde-clínico (cor primária de destaque)
    destaqueSuave: "#7C8F79",  // verde mais claro (hovers, ícones)
    bronze: "#A8825A",         // bronze/champagne (cor secundária, detalhes premium)
    bronzeSuave: "#CBAE85",    // bronze claro
    borda: "#D9D2BF",          // linhas e divisórias
  },

  /* ---------------------------------------------------------------------
     3. CONTATO — ALTERE AQUI O WHATSAPP / TELEFONE / INSTAGRAM
     ---------------------------------------------------------------------
     Use o número de WhatsApp completo, com código do país e DDD,
     apenas números (sem espaços, traços ou parênteses).
     Exemplo: 55 (Brasil) + 14 (DDD) + 999998888 = 5514999998888
  --------------------------------------------------------------------- */
  contato: {
    whatsapp: "5514999998888",
    telefoneExibicao: "(14) 99999-8888",
    email: "contato@clinicalumiere.com.br",

    // ALTERE AQUI O INSTAGRAM
    instagramUsuario: "@clinicalumiere",
    instagramUrl: "https://instagram.com/clinicalumiere",

    endereco: {
      linha1: "Rua Treze de Maio, 1245",
      linha2: "Vila Aviação — Bauru/SP",
      cep: "17012-000",
      // Link do Google Maps (Compartilhar > Copiar link) — usado no botão "Ver rota"
      mapaUrl: "https://maps.google.com/?q=Rua+Treze+de+Maio+1245+Bauru+SP",
      // Link de incorporação (Google Maps > Compartilhar > Incorporar mapa > copiar apenas a URL do src)
      mapaEmbedUrl: "",
    },

    horarios: [
      { dias: "Segunda a Sexta", horario: "09h às 19h" },
      { dias: "Sábado", horario: "09h às 13h" },
      { dias: "Domingo", horario: "Fechado" },
    ],
  },

  /* ---------------------------------------------------------------------
     4. HERO (PRIMEIRA DOBRA)
  --------------------------------------------------------------------- */
  hero: {
    elegibilidade: "Avaliação individual, sem compromisso",
    titulo: "Cuidado estético que começa pela escuta",
    tituloDestaque: "pela escuta", // parte do título que recebe a cor de destaque
    subtitulo:
      "Protocolos personalizados para pele e corpo, conduzidos por profissionais que explicam cada etapa antes de qualquer decisão.",
    ctaPrimario: "Agendar avaliação no WhatsApp",
    ctaSecundario: "Conhecer os procedimentos",
    mensagemWhatsapp: "Olá! Vi o site da {clinica} e gostaria de agendar uma avaliação.",
    imagem: "", // ex: "images/hero/hero.jpg" — vazio usa a arte de apresentação
    selo: { numero: "12", legenda: "anos de prática clínica" }, // ALTERE ou remova (numero: "")
  },

  /* ---------------------------------------------------------------------
     5. DIFERENCIAIS (3 a 5 itens)
  --------------------------------------------------------------------- */
  diferenciais: [
    {
      icone: "lupa",
      titulo: "Avaliação individual",
      descricao:
        "Nenhum protocolo é sugerido antes de entender pele, histórico e objetivo de cada pessoa.",
    },
    {
      icone: "diploma",
      titulo: "Equipe qualificada",
      descricao:
        "Profissionais com formação técnica atualizada e acompanhamento contínuo dos resultados.",
    },
    {
      icone: "ambiente",
      titulo: "Ambiente pensado a detalhe",
      descricao:
        "Salas privativas, materiais de uso único e um espaço planejado para conforto real.",
    },
    {
      icone: "acompanhamento",
      titulo: "Acompanhamento entre sessões",
      descricao:
        "Contato direto pelo WhatsApp para dúvidas e ajustes ao longo de todo o tratamento.",
    },
  ],

  /* ---------------------------------------------------------------------
     6. PROCEDIMENTOS — ALTERE AQUI OS PROCEDIMENTOS
     ---------------------------------------------------------------------
     Para ADICIONAR um procedimento nvo: copie um bloco { ... } inteiro,
     cole antes do colchete de fechamento "]" e edite os campos.
     Para REMOVER: apague o bloco { ... } correspondente (com a vírgula).
  --------------------------------------------------------------------- */
  procedimentos: [
    {
      id: "limpeza-de-pele",
      nome: "Limpeza de pele profunda",
      categoria: "Facial",
      descricaoCurta:
        "Higienização, esfoliação e extração conduzidas para equilibrar a pele.",
      objetivo: "Indicada como manutenção periódica da saúde da pele.",
      imagem: "", // ex: "images/procedimentos/limpeza-de-pele.jpg"
      preco: "", // ex: "A partir de R$ 180" — deixe vazio para omitir
    },
    {
      id: "harmonizacao-facial",
      nome: "Harmonização facial",
      categoria: "Facial",
      descricaoCurta:
        "Procedimentos combinados, definidos caso a caso após avaliação com o profissional.",
      objetivo: "O plano é construído junto com você, sem protocolos padronizados.",
      imagem: "",
      preco: "",
    },
    {
      id: "peeling",
      nome: "Peeling químico",
      categoria: "Facial",
      descricaoCurta:
        "Renovação da camada superficial da pele com ativos selecionados para cada caso.",
      objetivo: "Indicação e concentração definidas na avaliação inicial.",
      imagem: "",
      preco: "",
    },
    {
      id: "drenagem-linfatica",
      nome: "Drenagem linfática",
      categoria: "Corporal",
      descricaoCurta: "Técnica manual voltada à sensação de leveza e bem-estar.",
      objetivo: "Recomendada dentro de um plano contínuo de cuidado corporal.",
      imagem: "",
      preco: "",
    },
    {
      id: "tratamento-corporal",
      nome: "Tratamento corporal localizado",
      categoria: "Corporal",
      descricaoCurta:
        "Tecnologias específicas aplicadas conforme avaliação individual de cada região.",
      objetivo: "O protocolo e o número de sessões variam por pessoa.",
      imagem: "",
      preco: "",
    },
    {
      id: "microagulhamento",
      nome: "Microagulhamento",
      categoria: "Facial",
      descricaoCurta:
        "Estímulo mecânico controlado, associado a ativos indicados para cada tipo de pele.",
      objetivo: "Frequência definida conforme resposta individual ao tratamento.",
      imagem: "",
      preco: "",
    },
  ],

  /* ---------------------------------------------------------------------
     7. DEPOIMENTOS (CONTEÚDO DEMONSTRATIVO — SUBSTITUA POR AVALIAÇÕES REAIS)
  --------------------------------------------------------------------- */
  depoimentos: [
    {
      nome: "Paciente demonstrativo A.",
      iniciais: "A.",
      nota: 5,
      procedimento: "Avaliação e limpeza de pele",
      comentario:
        "[Depoimento demonstrativo] Gostei de ter tudo explicado antes de começar, sem pressa nenhuma na avaliação.",
    },
    {
      nome: "Paciente demonstrativo B.",
      iniciais: "B.",
      nota: 5,
      procedimento: "Harmonização facial",
      comentario:
        "[Depoimento demonstrativo] Equipe atenciosa e ambiente muito bem cuidado. Me senti segura em todo o processo.",
    },
    {
      nome: "Paciente demonstrativo C.",
      iniciais: "C.",
      nota: 5,
      procedimento: "Tratamento corporal",
      comentario:
        "[Depoimento demonstrativo] Combinaram o plano comigo antes de qualquer sessão. Isso fez diferença na decisão.",
    },
  ],

  /* ---------------------------------------------------------------------
     8. GALERIA / RESULTADOS
     ---------------------------------------------------------------------
     tipo: "ambiente" | "procedimento" | "antes-depois"
     Para "antes-depois", preencha imagemAntes e imagemDepois.
     IMPORTANTE: use apenas imagens com autorização do paciente.
  --------------------------------------------------------------------- */
  galeria: [
    { tipo: "ambiente", legenda: "Recepção", imagem: "" },
    { tipo: "ambiente", legenda: "Sala de procedimentos", imagem: "" },
    { tipo: "procedimento", legenda: "Avaliação facial", imagem: "" },
    { tipo: "ambiente", legenda: "Sala de espera", imagem: "" },
    { tipo: "procedimento", legenda: "Protocolo corporal", imagem: "" },
    { tipo: "ambiente", legenda: "Recepção — detalhe", imagem: "" },
  ],

  /* ---------------------------------------------------------------------
     9. SOBRE A CLÍNICA (CONTEÚDO DEMONSTRATIVO — SUBSTITUA)
  --------------------------------------------------------------------- */
  sobre: {
    titulo: "Uma clínica pensada para durar no tempo",
    paragrafos: [
      "[Texto demonstrativo] A {clinica} nasceu da vontade de oferecer estética avançada sem abrir mão da escuta individual — cada plano de cuidado é construído a partir da avaliação de cada pessoa, não de um protocolo padrão.",
      "[Texto demonstrativo] A equipe acompanha atualizações técnicas com regularidade e revisa os protocolos utilizados, priorizando segurança e transparência em cada etapa do atendimento.",
    ],
    filosofia:
      "Explicar antes de indicar, e acompanhar depois de aplicar.",
    imagem: "", // ex: "images/hero/sobre.jpg"
  },

  /* ---------------------------------------------------------------------
     10. EQUIPE — ALTERE AQUI A EQUIPE
  --------------------------------------------------------------------- */
  equipe: [
    {
      nome: "Nome do(a) profissional",
      cargo: "Especialidade / função",
      apresentacao:
        "[Texto demonstrativo] Breve apresentação da formação e da abordagem de trabalho do profissional.",
      foto: "", // ex: "images/equipe/profissional-1.jpg"
    },
    {
      nome: "Nome do(a) profissional",
      cargo: "Especialidade / função",
      apresentacao:
        "[Texto demonstrativo] Breve apresentação da formação e da abordagem de trabalho do profissional.",
      foto: "",
    },
  ],

  /* ---------------------------------------------------------------------
     11. COMO FUNCIONA
  --------------------------------------------------------------------- */
  comoFunciona: [
    {
      titulo: "Você entra em contato",
      descricao: "Fale pelo WhatsApp e conte o que gostaria de resolver ou entender melhor.",
    },
    {
      titulo: "Agenda sua avaliação",
      descricao: "Marcamos um horário para conhecer sua pele, seu histórico e seus objetivos.",
    },
    {
      titulo: "Conversa com o profissional",
      descricao: "Na avaliação, as possibilidades são explicadas com calma, sem obrigação de fechar nada ali.",
    },
    {
      titulo: "Define-se o plano de cuidado",
      descricao: "Se fizer sentido para você, montamos juntos o plano e os próximos passos.",
    },
  ],

  /* ---------------------------------------------------------------------
     12. PERGUNTAS FREQUENTES — ALTERE AQUI OS TEXTOS
  --------------------------------------------------------------------- */
  faq: [
    {
      pergunta: "Como funciona a avaliação inicial?",
      resposta:
        "A avaliação é individual: conversamos sobre histórico, expectativas e examinamos a pele ou região de interesse antes de sugerir qualquer procedimento.",
    },
    {
      pergunta: "Preciso agendar horário ou posso chegar direto?",
      resposta:
        "É necessário agendar. Assim garantimos tempo adequado para cada atendimento, sem pressa.",
    },
    {
      pergunta: "Quais procedimentos a clínica oferece?",
      resposta:
        "Trabalhamos com procedimentos faciais e corporais — a lista completa está na seção de procedimentos desta página. Novos protocolos podem ser adicionados conforme a avaliação.",
    },
    {
      pergunta: "Onde a clínica está localizada?",
      resposta:
        "Estamos na {endereco}. Você encontra o mapa e a rota completa na seção de localização desta página.",
    },
    {
      pergunta: "Quais formas de pagamento são aceitas?",
      resposta:
        "Aceitamos as principais formas de pagamento. Detalhes de valores e parcelamento são combinados diretamente com você durante o atendimento.",
    },
    {
      pergunta: "Os resultados são garantidos?",
      resposta:
        "Cada pessoa responde de um jeito aos tratamentos. Por isso a avaliação individual é o ponto de partida: ela define o que é razoável esperar no seu caso específico.",
    },
  ],

  /* ---------------------------------------------------------------------
     13. CHAMADA FINAL
  --------------------------------------------------------------------- */
  ctaFinal: {
    titulo: "Quer entender qual cuidado faz sentido para você?",
    subtitulo: "A avaliação é o primeiro passo — sem protocolos padronizados, sem pressa.",
    botao: "Agendar avaliação",
    mensagemWhatsapp: "Olá! Gostaria de agendar uma avaliação na {clinica}.",
  },

  /* ---------------------------------------------------------------------
     14. RODAPÉ
  --------------------------------------------------------------------- */
  footer: {
    // ALTERE AQUI — texto legal / CNPJ (opcional)
    textoLegal: "CNPJ 00.000.000/0001-00 — Responsável técnico: [nome do profissional responsável]",
    aviso:
      "Os procedimentos estéticos apresentados neste site não substituem avaliação profissional individual. Resultados variam conforme cada pessoa.",
  },

  /* ---------------------------------------------------------------------
     15. SEO / METADADOS
  --------------------------------------------------------------------- */
  meta: {
    // ALTERE AQUI título e descrição — usados na aba do navegador e no Google
    titulo: "Clínica Lumière — Estética Avançada em Bauru/SP",
    descricao:
      "Avaliação individual e procedimentos estéticos faciais e corporais em Bauru/SP. Agende sua avaliação pelo WhatsApp.",
    palavrasChave: "estética, clínica de estética, harmonização facial, Bauru",
    imagemCompartilhamento: "", // ex: "images/og-cover.jpg" — usada ao compartilhar o link
    urlCanonica: "https://www.clinicalumiere.com.br/",
    idioma: "pt-BR",
  },

  /* ---------------------------------------------------------------------
     16. ANALYTICS (opcional)
     ---------------------------------------------------------------------
     Deixe os campos vazios para não carregar nada. Preencha quando tiver
     as contas criadas — a arquitetura já está pronta para receber.
  --------------------------------------------------------------------- */
  analytics: {
    googleAnalyticsId: "",  // ex: "G-XXXXXXXXXX"
    metaPixelId: "",        // ex: "000000000000000"
  },
};
