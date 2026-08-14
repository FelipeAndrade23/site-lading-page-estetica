# Guia Rápido — Como personalizar o site (sem programar)

Este guia explica como deixar o site pronto para um cliente novo, sem precisar
entender programação. Você só vai mexer em **um arquivo**: `js/config.js`.

## Antes de começar

Abra o arquivo `js/config.js` com um editor de texto. Recomendado: o
**VS Code** (gratuito), mas qualquer editor de texto simples funciona
(evite o Word ou o Bloco de Notas do Windows, que podem estragar a formatação).

Dentro do arquivo, o texto que você pode mudar sempre fica **entre aspas**,
assim:

```js
nome: "Clínica Lumière",
```

Para trocar, apague o que está entre as aspas e escreva o novo texto,
mantendo as aspas:

```js
nome: "Clínica da Ana",
```

**Nunca apague as vírgulas `,` no final da linha e nunca apague os dois
pontos `:`.** Se apagar sem querer, é só fechar o arquivo sem salvar e abrir
de novo.

## Passo a passo da personalização

### 1. Nome da clínica
Procure `1. IDENTIDADE DA CLÍNICA` e troque o texto de `nome` e `logoTexto`.

### 2. WhatsApp
Procure `3. CONTATO` e troque o número em `whatsapp`. Use só números, sem
espaço, sem traço e sem parênteses — comece com `55` (Brasil) + DDD + número.

Exemplo: WhatsApp (14) 99999-8888 vira:
```js
whatsapp: "5514999998888",
```

### 3. Instagram
Ainda em `3. CONTATO`, troque `instagramUsuario` (o `@usuario`) e
`instagramUrl` (o link completo do perfil).

### 4. Endereço e horário
Também em `3. CONTATO`, dentro de `endereco` e `horarios`.

### 5. Cores
Procure `2. CORES`. Cada linha é uma cor do site, em código hexadecimal
(começa com `#`). Se não souber o código de uma cor, pesquise no Google por
"seletor de cor hex" — qualquer site desses gera o código pra você.

**Dica:** se não tiver certeza, não mexa nas cores — a paleta padrão já foi
pensada para transmitir sofisticação.

### 6. Procedimentos
Procure `6. PROCEDIMENTOS`. Cada procedimento é um bloco assim:

```js
{
  id: "limpeza-de-pele",
  nome: "Limpeza de pele profunda",
  categoria: "Facial",
  descricaoCurta: "Higienização, esfoliação e extração conduzidas para equilibrar a pele.",
  objetivo: "Indicada como manutenção periódica da saúde da pele.",
  imagem: "",
  preco: "",
},
```

- Para **mudar** um procedimento existente: troque o texto entre aspas.
- Para **adicionar** um procedimento novo: selecione um bloco inteiro (do `{`
  até o `},`), copie, cole logo abaixo, e troque os textos.
- Para **remover** um procedimento: apague o bloco inteiro (do `{` até o `},`).

### 7. Fotos
Cada item que tem `imagem: ""` está usando uma imagem de exemplo (um bloco
colorido com o nome do arquivo esperado). Para colocar a foto de verdade:

1. Coloque o arquivo da foto dentro da pasta `images` (existem subpastas para
   cada tipo: `hero`, `procedimentos`, `galeria`, `equipe`).
2. Escreva o caminho entre as aspas. Exemplo:

```js
imagem: "images/procedimentos/limpeza-de-pele.jpg",
```

### 8. Depoimentos
Procure `7. DEPOIMENTOS`. Os depoimentos de exemplo têm `[Depoimento
demonstrativo]` no começo — **é obrigatório trocar por avaliações reais**
antes de publicar o site (não deixe depoimentos inventados no ar).

### 9. Equipe
Procure `10. EQUIPE`. Mesmo esquema dos procedimentos: copiar bloco para
adicionar, apagar bloco para remover.

### 10. Perguntas frequentes (FAQ)
Procure `12. FAQ`. Cada pergunta é um bloco com `pergunta` e `resposta`.

## Depois de editar

1. Salve o arquivo (`Ctrl + S`).
2. Abra o arquivo `index.html` no navegador (duplo clique) para conferir.
3. Se já estava aberto no navegador, aperte `F5` para atualizar.

## Erro comum: o site "quebrou" depois que editei

Quase sempre é porque uma vírgula `,` ou aspas `"` foi apagada sem querer.
Confira a linha que você mexeu por último e compare com uma linha parecida
que não editou, prestando atenção em vírgulas, dois-pontos e aspas.

Se preferir, feche o arquivo **sem salvar** e abra de novo para desfazer.

## Pronto para publicar?

Confirme esta lista antes de entregar para o cliente:

- [ ] Nome da clínica correto em todos os lugares
- [ ] WhatsApp testado (clique no botão e veja se abre a conversa certa)
- [ ] Instagram e telefone corretos
- [ ] Endereço e horário corretos
- [ ] Fotos reais no lugar dos espaços reservados (pelo menos hero, galeria e procedimentos principais)
- [ ] Depoimentos reais (nenhum com "[Depoimento demonstrativo]")
- [ ] Texto "Sobre a clínica" real (nenhum com "[Texto demonstrativo]")
- [ ] Título e descrição em `15. SEO / METADADOS` preenchidos

Depois disso, é só seguir a seção "Como fazer o deploy" do `README.md` para
publicar o site.
