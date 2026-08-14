# Template — Clínica de Estética

Site institucional/comercial para clínicas de estética e estética avançada.
HTML + CSS + JavaScript puros — **sem dependências, sem build, sem instalação**.
Todo o conteúdo é lido de um único arquivo (`js/config.js`) e renderizado em
tela pelo `js/script.js`.

Foco do site: transformar quem visita em contato pelo **WhatsApp**.

---

## 1. Como abrir o projeto

Você só precisa de uma pasta com estes arquivos:

```
index.html
css/styles.css
js/config.js
js/script.js
images/  (fotos reais entram aqui)
```

Não é necessário instalar Node, npm, ou qualquer outra ferramenta.

## 2. Como rodar localmente

Abrir o `index.html` direto no navegador (duplo clique) já funciona.

Se preferir rodar com um servidor local (recomendado, evita bloqueios do
navegador ao carregar imagens locais), com Python instalado:

```bash
cd pasta-do-projeto
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000` no navegador.

## 3. Como abrir no VS Code

1. Abra o VS Code.
2. Menu **File → Open Folder** e selecione a pasta do projeto.
3. Instale a extensão **Live Server** (opcional, mas recomendada).
4. Clique com o botão direito em `index.html` → **Open with Live Server**.

## 4. Onde alterar cada coisa

**Tudo é editado em um único arquivo: `js/config.js`.**
Ele é dividido em blocos numerados e comentados. Procure por `ALTERE AQUI`
para achar rapidamente cada ponto de edição.

| O que alterar | Onde (bloco em `config.js`) |
|---|---|
| Nome da clínica | `1. IDENTIDADE DA CLÍNICA` → `clinica.nome` |
| Logo | `1. IDENTIDADE DA CLÍNICA` → `clinica.logoTexto` ou `clinica.logoImagem` |
| Cores | `2. CORES` |
| WhatsApp / telefone | `3. CONTATO` → `contato.whatsapp` / `contato.telefoneExibicao` |
| Instagram | `3. CONTATO` → `contato.instagramUsuario` / `instagramUrl` |
| Endereço e horários | `3. CONTATO` → `contato.endereco` / `contato.horarios` |
| Texto e imagem da capa (hero) | `4. HERO` |
| Diferenciais da clínica | `5. DIFERENCIAIS` |
| Procedimentos | `6. PROCEDIMENTOS` |
| Depoimentos | `7. DEPOIMENTOS` |
| Galeria de fotos | `8. GALERIA` |
| Texto "Sobre a clínica" | `9. SOBRE` |
| Equipe | `10. EQUIPE` |
| Passos de "Como funciona" | `11. COMO FUNCIONA` |
| Perguntas frequentes | `12. FAQ` |
| Chamada final | `13. CTA FINAL` |
| Rodapé / dados legais | `14. RODAPÉ` |
| Título e descrição para Google | `15. SEO / METADADOS` |
| Google Analytics / Meta Pixel | `16. ANALYTICS` |

Depois de editar, salve o arquivo e atualize a página no navegador — não
precisa rodar nenhum comando.

## 5. Onde alterar as imagens

Enquanto o campo `imagem` de um item estiver vazio (`""`) em `config.js`,
o site mostra automaticamente um **espaço reservado** com o nome do arquivo
esperado — assim dá pra ver o layout completo mesmo sem fotos ainda.

Para colocar uma foto real:

1. Salve a imagem dentro da pasta `images/` (já existem subpastas sugeridas:
   `images/hero`, `images/procedimentos`, `images/galeria`, `images/equipe`).
2. No `config.js`, preencha o campo `imagem` (ou `foto`) do item correspondente
   com o caminho do arquivo. Exemplo:

```js
imagem: "images/procedimentos/limpeza-de-pele.jpg",
```

3. Salve e atualize a página — a imagem substitui o placeholder automaticamente.

Recomendação: use fotos horizontais ou verticais em boa resolução (mínimo
1200px no lado maior) e comprimidas (formato `.jpg` ou `.webp`) para o site
carregar rápido.

## 6. Onde alterar os depoimentos

Bloco `7. DEPOIMENTOS` em `config.js`. Os depoimentos vêm marcados como
demonstrativos — **substitua pelo relato real de pacientes** antes de publicar
(nunca invente avaliações atribuídas a uma clínica real).

## 7. Onde alterar a equipe

Bloco `10. EQUIPE` em `config.js`. Copie um bloco `{ ... }` para adicionar
mais um profissional, ou apague um bloco para remover.

## 8. Como adicionar um novo procedimento

No bloco `6. PROCEDIMENTOS`, copie um bloco inteiro assim:

```js
{
  id: "novo-procedimento",
  nome: "Nome do procedimento",
  categoria: "Facial", // ou "Corporal", ou crie sua própria categoria
  descricaoCurta: "Descrição curta e objetiva.",
  objetivo: "Frase sobre indicação, sem prometer resultado garantido.",
  imagem: "",
  preco: "", // opcional
},
```

Cole antes do `]` que fecha a lista `procedimentos: [ ... ]`. O card novo e o
botão de WhatsApp (com mensagem já preenchida com o nome do procedimento)
aparecem automaticamente — nada mais precisa ser alterado.

## 9. Como remover um procedimento

Apague o bloco `{ ... }` inteiro correspondente (inclusive a vírgula no final).

## 10. Como alterar textos

Todo texto do site — títulos, parágrafos, perguntas do FAQ, textos de botão —
está em `config.js`, dentro de aspas `"assim"`. Basta editar o texto entre as
aspas e salvar.

## 11. Como fazer o deploy (publicar o site)

Como é um site 100% estático (sem backend, sem banco de dados), qualquer
serviço de hospedagem de arquivos estáticos funciona. Opções simples e
gratuitas:

- **Netlify** ou **Vercel**: arraste a pasta do projeto no painel do site.
- **GitHub Pages**: suba os arquivos para um repositório e ative o Pages
  nas configurações do repositório.
- **Hospedagem tradicional (cPanel etc.)**: envie os arquivos por FTP para a
  pasta `public_html`.

Não é necessário nenhum passo de build — os arquivos já estão prontos para
publicação como estão.

## 12. Como criar uma cópia para um novo cliente

1. Duplique a pasta inteira do projeto (ex: `clinica-template` →
   `clinica-prime`).
2. Abra `js/config.js` na nova pasta e preencha todos os blocos com os dados
   do novo cliente (nome, cores, WhatsApp, procedimentos, fotos etc.).
3. Substitua as imagens dentro de `images/`.
4. Pronto — o restante do código (`index.html`, `css/styles.css`,
   `js/script.js`) normalmente **não precisa ser tocado**.

---

## Estrutura de arquivos

```
index.html          → estrutura da página (âncoras vazias preenchidas por JS)
css/styles.css       → todo o visual do site (cores, tipografia, layout)
js/config.js         → TODOS os dados editáveis (o único arquivo que você mexe)
js/script.js         → motor que lê config.js e monta a página (não precisa editar)
images/               → onde entram as fotos reais de cada cliente
```

## Arquitetura (para quem for mexer no código)

- `config.js` exporta um único objeto `CONFIG`, usado como fonte única de
  dados por todo o site.
- `script.js` lê `CONFIG` e gera o HTML de cada seção em tempo de execução,
  aplica a paleta de cores como variáveis CSS, injeta metatags de SEO e o
  JSON-LD de negócio local, monta os links de WhatsApp com mensagem
  pré-preenchida por contexto (header, hero, cada procedimento, localização,
  rodapé, botão flutuante, CTA final) e liga toda a interatividade (menu
  mobile, acordeão do FAQ, lightbox da galeria, filtro de procedimentos por
  categoria, cabeçalho fixo com sombra ao rolar, animação de entrada suave).
- Campos de imagem vazios (`""`) geram automaticamente um espaço reservado
  visual — não é necessário nenhuma imagem para o site funcionar e ficar
  apresentável durante a fase de customização.
- Pontos para Google Analytics e Meta Pixel já estão prontos em
  `16. ANALYTICS`; basta preencher os IDs quando o cliente tiver as contas.

## Aviso importante

Este é um **template comercial reutilizável**, com conteúdo demonstrativo
(depoimentos, textos "sobre", nomes de equipe) que precisa ser **substituído
por informações reais** de cada clínica antes da publicação. Evite qualquer
alegação de resultado garantido — mantenha o tom já usado nos textos-modelo
(indicação sujeita à avaliação individual).

Veja também `GUIA-RAPIDO.md` para uma explicação mais simples, sem termos
técnicos.
