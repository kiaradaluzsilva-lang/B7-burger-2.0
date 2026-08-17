# 🍔 B7 Burger — Cardápio Digital

O **B7 Burger** é uma aplicação Front-End de cardápio digital para hamburguerias, desenvolvida com **HTML, CSS e JavaScript**.

O projeto nasceu originalmente como um trabalho acadêmico focado na construção da interface de uma hamburgueria e posteriormente foi reformulado para se tornar uma aplicação mais completa, responsiva e interativa.

A nova versão mantém a identidade visual do projeto original, mas adiciona funcionalidades comuns em cardápios digitais reais.

---

## 📱 Sobre o projeto

O B7 Burger permite que o usuário navegue pelo cardápio, pesquise produtos, filtre hambúrgueres por categoria e visualize informações detalhadas antes de realizar o pedido.

O projeto possui interfaces adaptadas para diferentes dispositivos:

- 🖥️ **Desktop:** layout amplo com Hero, navegação, pesquisa, filtro por categoria e grade de produtos.
- 📱 **Mobile:** interface própria para telas menores, com boas-vindas, busca simplificada, banner promocional e cardápio em duas colunas.

A proposta foi criar experiências adequadas para cada tamanho de tela sem precisar desenvolver duas aplicações diferentes.

---

## ✨ Funcionalidades

- 🔎 Pesquisa de hambúrgueres por nome
- 🗂️ Filtro de produtos por categoria
- 🍔 Cardápio gerado dinamicamente com JavaScript
- 🏷️ Identificação de produtos em promoção
- 📋 Modal com detalhes do produto
- 💰 Exibição de preços formatados em Real (BRL)
- 📲 Botão para realizar pedido pelo WhatsApp
- ☰ Menu mobile interativo
- 📱 Layout responsivo
- 🖥️ Interface específica para desktop
- 📱 Interface adaptada para dispositivos móveis

---

## 🛠️ Tecnologias utilizadas

<div>
  <img height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5">
  <img height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3">
  <img height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript">
  <img height="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git">
</div>

### HTML5
Utilizado para estruturar semanticamente as diferentes áreas da aplicação.

### CSS3
Responsável pelo layout, responsividade, cards, modal, animações e adaptação das interfaces para desktop e mobile.

### JavaScript
Utilizado para implementar a lógica e interatividade da aplicação, incluindo:

- arrays de produtos;
- renderização dinâmica;
- pesquisa;
- filtros;
- eventos;
- abertura e fechamento do modal;
- menu mobile;
- geração da mensagem para pedido pelo WhatsApp.

---

## 🧠 Conceitos praticados

Durante a evolução do projeto foram trabalhados conceitos importantes de desenvolvimento Front-End:

```javascript
const produtos = [
    {
        id: 1,
        nome: "Texas Burger",
        categoria: "tradicional",
        preco: 25.50,
        promocao: true
    }
];
```

A partir dos dados armazenados no JavaScript, os produtos são renderizados dinamicamente na página.

Também foram utilizados conceitos como:

- manipulação do DOM;
- `addEventListener`;
- `filter()`;
- `forEach()`;
- template literals;
- funções;
- objetos e arrays;
- `classList`;
- eventos de teclado;
- `window.innerWidth`;
- `toLocaleString()`;
- `encodeURIComponent()`.

---

## 📐 Responsividade

Um dos principais objetivos da reformulação foi melhorar a experiência em diferentes dispositivos.

Em vez de apenas reduzir proporcionalmente a interface desktop, algumas áreas possuem composições diferentes no mobile.

### Desktop

A versão desktop prioriza:

- navegação horizontal;
- Hero de apresentação;
- destaque visual do produto;
- pesquisa e filtro lado a lado;
- três produtos por linha.

### Mobile

A versão mobile prioriza:

- navegação simplificada;
- apresentação compacta;
- pesquisa em destaque;
- banner promocional;
- dois produtos por linha;
- interação adequada para telas menores.

---

## 📂 Estrutura do projeto

```text
B7-Burger/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── src/
    │
    └── images/
        ├── hero-burger.png
        ├── texas-burger.png
        ├── golden-burger.png
        ├── old-burger.png
        ├── monster-burger.png
        └── ...
```

---

## 🚀 Evolução do projeto

A primeira versão do B7 Burger foi criada como atividade acadêmica e possuía foco principalmente na construção visual da página.

Na reformulação, o projeto passou a incorporar conceitos de JavaScript e experiência do usuário, transformando a interface original em um **cardápio digital funcional**.

### Primeira versão

- Interface estática
- Estrutura em HTML
- Estilização em CSS
- Layout inicial do cardápio

### Versão atual

- Interface responsiva
- Layout específico para desktop e mobile
- Produtos armazenados em array
- Cards renderizados dinamicamente
- Pesquisa em tempo real
- Filtro por categoria
- Modal de produto
- Integração com WhatsApp
- Melhor organização dos arquivos

---

## 🎯 Objetivo

Este projeto faz parte dos meus estudos em **Desenvolvimento Front-End** e foi desenvolvido com o objetivo de transformar conhecimentos teóricos em uma aplicação prática.

Além da construção visual, a reformulação buscou trabalhar lógica de programação e manipulação do DOM utilizando JavaScript puro, sem frameworks.

---

## 🔮 Próximas melhorias

Algumas funcionalidades que podem ser implementadas futuramente:

- carrinho de compras;
- contador de quantidade;
- cálculo do valor total;
- favoritos;
- armazenamento local com `localStorage`;
- novos filtros;
- acessibilidade;
- melhorias nas animações e microinterações.

> O objetivo atual do projeto não é criar um sistema completo de delivery, mas desenvolver e consolidar fundamentos de Front-End através de uma aplicação comercial simples.

---

## 👩‍💻 Autora

**Kiara da Luz Silva**

Estudante de Análise e Desenvolvimento de Sistemas e Desenvolvedora Front-End em formação.

Desenvolvendo projetos para transformar conhecimento em experiência prática.
