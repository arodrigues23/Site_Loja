# VAZIO Streetwear – Documentação do site
Loja online fictícia de roupas streetwear, com as categorias Moletons, Camisetas e Calças. O site é feito com HTML, CSS e JavaScript puros, sem frameworks e sem banco de dados. Todos os dados dos produtos ficam no próprio código.
---
## 1. Estrutura de arquivos
```
vazio/
├── index.html   → estrutura da página (cabeçalho, carrossel, categorias, catálogo, carrinho, sobre)
├── style.css    → todo o visual (cores, tipografia, layout, modo claro e escuro, responsivo)
├── script.js    → comportamento (produtos, carrossel, filtros, carrinho, checkout, rotas)
└── img/         → fotos das peças (não incluída neste pacote)
```
Os três arquivos devem ficar na mesma pasta, e a pasta `img/` deve estar ao lado deles.
Como abrir: dê dois cliques no `index.html`. Não é preciso servidor nem instalação.
---
## 2. Passo a passo da construção
Passo 1: Estrutura base (HTML)
Criado o `index.html` com a ordem das seções: cabeçalho fixo, carrossel de destaques, cartões de categoria, catálogo com filtros e rodapé "Sobre".
O carrinho foi colocado em um painel lateral (`#drawer`), que abre sobre a página.

Passo 2: Identidade visual e paleta
Definidas as cores da marca: preto absoluto `#0a0a0a`, grafite `#1b1c1e`, branco gelo `#eef2f3`, cinza metálico `#9aa0a6` e verde ácido `#b6ff1f` como destaque.
As cores foram colocadas em variáveis CSS no início do `style.css` (`:root`). Assim, trocar a cor do site exige alterar uma linha.
Tipografia: Big Shoulders Stencil Display para títulos e Work Sans para textos.

Passo 3: Carrossel de destaques
O carrossel mostra os produtos com `top` entre 1 e 4 (ver seção 3).
A troca automática acontece a cada 6 segundos, e para quando o mouse ou o foco está sobre ele.
Também funciona com as setas do teclado e respeita a preferência de movimento reduzido do sistema.

Passo 4: Catálogo com busca e filtros
Busca por texto que ignora acentos.
Filtros de categoria, tamanho, cor e preço máximo.
Ordenação por mais vendidos, menor preço, maior preço ou nome.
Cada card permite escolher cor e tamanho antes de adicionar ao carrinho. O site avisa se o tamanho não foi escolhido.

Passo 5: Carrinho
Os itens são guardados no `localStorage` do navegador, com a chave `vazio-cart-v2`.
Permite alterar quantidade, remover itens e ver o subtotal.
Mostra quanto falta para o frete grátis, acima de R$ 399. Abaixo desse valor, o frete é R$ 29,90 (valor fictício).

Passo 6: Páginas por categoria
Os endereços `#moletons`, `#camisetas` e `#calcas` abrem uma página da categoria, com título grande, caminho de navegação e filtro de tamanho próprio.
Ao sair de uma categoria, o filtro volta para "Tudo", para que o catálogo completo apareça.

Passo 7: Modo claro e escuro
O botão no cabeçalho alterna entre os dois temas.
A escolha fica salva na chave `vazio-theme`.

Passo 8: Imagens dos produtos
A função `foto()` em `script.js` mostra a foto da cor escolhida. Se a foto não existir no campo `img`, o site mostra um desenho em SVG no lugar.
Cada produto pode ter uma foto por cor (ver seção 3).

Passo 9: Checkout simulado
O botão "Finalizar compra" abre um formulário com nome, e-mail, CEP, endereço e forma de pagamento.
O formulário valida os campos. O CEP precisa estar no formato 00000-000.
Ao confirmar, o site mostra um número de referência e esvazia o carrinho. Nada é cobrado nem enviado.

Passo 10: Acessibilidade e ajustes finais
Foco visível para navegação pelo teclado.
Rótulos (`label`) e atributos `aria` nos campos, nos botões e nas mensagens de erro.
Contraste do texto principal de 17,6:1 no modo escuro.
Metadados (descrição e ícone do site) e remoção do `aria-live` do carrossel, para não anunciar a troca automática para leitores de tela.

---
## 3. Como alterar o conteúdo
Adicionar ou editar um produto
Os produtos ficam na lista `P` no início do `script.js`:
```js
{id:1, n:"Moletom Asfalto", c:"Moletons", p:349,
 col:["Preto","Grafite","Oliva"],
 img:{Preto:"img/moletom_preto.png", Grafite:"img/moletom_cinza.png", Oliva:"img/moletom_verde.png"},
 sz:["P","M","G","GG"], top:1, d:"Descrição da peça.", t:"hoodie"}
```

Campo	O que faz

`id`	Número único do produto

`n`	Nome

`c`	Categoria: `Moletons`, `Camisetas` ou `Calças`

`p`	Preço em reais

`col`	Cores disponíveis. Cada nome precisa existir em `COLORS`

`img`	Foto de cada cor, com o caminho dentro de `img/`

`sz`	Tamanhos disponíveis

`top`	De 1 a 4 aparece no carrossel. Sem `top` ≤ 4, não aparece

`d`	Descrição usada no carrossel

`t`	Desenho de reserva: `hoodie`, `tee`, `pants` ou `zip`

Cores disponíveis
A lista `COLORS` no início do `script.js` define o nome e o hex de cada cor. Para usar uma nova cor, adicione-a a `COLORS` e depois aos produtos.
Trocar as cores do site
Edite as variáveis no início do `style.css`, dentro de `:root` (modo escuro) e `:root[data-theme=light]` (modo claro).
Alterar o frete grátis ou o frete padrão
Valor mínimo para frete grátis: constante `FREE` no `script.js` (atualmente `399`).

Valor do frete abaixo do mínimo: `29.9` na função `renderCheckout`.

---
## 4. Pontos de atenção
Fotos: a pasta `img/` não vem neste pacote. Se um arquivo não existir, a imagem aparece quebrada.

Caminho da Camiseta Vácuo: a cor Verde aponta para `basica_verde.jpeg`, sem a pasta `img/`. Se a foto não aparecer, troque para `img/basica_verde.jpeg`.

Carrinho e filtros: ficam só no navegador de quem está usando. Limpar os dados do navegador apaga o carrinho.

Checkout: é uma simulação. Para vender de verdade, é preciso integrar um meio de pagamento e um servidor.

---
## 5. Limitações conhecidas
Não há banco de dados nem área de administração. Os produtos são editados no código.

Não há página de detalhes do produto.

Não há cadastro de clientes nem histórico de pedidos.

O controle de estoque não existe. Todos os tamanhos aparecem como disponíveis.

As informações da loja (endereço, telefone, e-mail, Instagram) são fictícias.

---
## 6. Como testar
Abra o `index.html` em um navegador atualizado.
Teste o carrossel: setas, bolinhas e teclado.
Teste uma categoria pelo menu e volte ao início.
Adicione uma peça ao carrinho e aumente a quantidade.
Abra o checkout, deixe um campo vazio e veja a mensagem de erro. Preencha tudo e confirme.
Alterne entre o modo claro e o escuro.
Abra no celular ou reduza a janela para ver o layout responsivo.
