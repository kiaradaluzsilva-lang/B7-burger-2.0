/* =========================================
   PRODUTOS
========================================= */

const produtos = [

    {
        id: 1,

        nome: "Texas Burger",

        categoria: "tradicional",

        categoriaNome: "Tradicional",

        preco: 25.50,

        imagem:
            "./src/images/texas-burger.png",

        descricao:
            "Burger artesanal com carne bovina, queijo, vegetais frescos e molho especial da casa.",

        promocao: true
    },


    {
        id: 2,

        nome: "Golden Burger",

        categoria: "tradicional",

        categoriaNome: "Tradicional",

        preco: 25.50,

        imagem:
            "./src/images/golden-burger.png",

        descricao:
            "Burger com carne artesanal, queijo derretido, bacon crocante e molho especial.",

        promocao: false
    },


    {
        id: 3,

        nome: "Old Burger",

        categoria: "tradicional",

        categoriaNome: "Tradicional",

        preco: 25.50,

        imagem:
            "./src/images/old-burger.png",

        descricao:
            "O clássico da casa com carne artesanal, queijo, tomate, cebola, alface e molho B7.",

        promocao: false
    },


    {
        id: 4,

        nome: "Monster Burger",

        categoria: "especial",

        categoriaNome: "Especial",

        preco: 29.90,

        imagem:
            "./src/images/monster-burger.png",

        descricao:
            "Um burger generoso com carne artesanal, queijo, bacon e combinações especiais.",

        promocao: false
    },


    {
        id: 5,

        nome: "B7 Classic",

        categoria: "tradicional",

        categoriaNome: "Tradicional",

        preco: 25.50,

        imagem:
            "./src/images/b7-classic.png",

        descricao:
            "Carne artesanal, queijo, salada fresca e o tradicional molho da B7.",

        promocao: false
    },


    {
        id: 6,

        nome: "B7 Bacon",

        categoria: "especial",

        categoriaNome: "Especial",

        preco: 29.90,

        imagem:
            "./src/images/b7-bacon.png",

        descricao:
            "Burger artesanal com cheddar cremoso, bacon crocante e molho exclusivo B7.",

        promocao: true
    },


    {
        id: 7,

        nome: "Combo Texas",

        categoria: "combo",

        categoriaNome: "Combo",

        preco: 36.90,

        imagem:
            "./src/images/combo-texas.png",

        descricao:
            "Texas Burger acompanhado de batata frita crocante e refrigerante.",

        promocao: false
    },


    {
        id: 8,

        nome: "Combo Monster",

        categoria: "combo",

        categoriaNome: "Combo",

        preco: 39.90,

        imagem:
            "./src/images/combo-monster.png",

        descricao:
            "Monster Burger acompanhado de batatas fritas e refrigerante.",

        promocao: false
    }

];


/* =========================================
   ELEMENTOS
========================================= */

const productsGrid =
    document.querySelector("#products-grid");


const desktopSearch =
    document.querySelector("#desktop-search");


const mobileSearch =
    document.querySelector("#mobile-search");


const categorySelect =
    document.querySelector("#category-select");


const emptyState =
    document.querySelector("#empty-state");


const mobileMenuButton =
    document.querySelector("#mobile-menu-button");


const mobileNav =
    document.querySelector("#mobile-nav");


/* MODAL */

const modalOverlay =
    document.querySelector("#modal-overlay");


const modalClose =
    document.querySelector("#modal-close");


const modalImage =
    document.querySelector("#modal-image");


const modalCategory =
    document.querySelector("#modal-category");


const modalTitle =
    document.querySelector("#modal-title");


const modalDescription =
    document.querySelector("#modal-description");


const modalPrice =
    document.querySelector("#modal-price");


const modalWhatsapp =
    document.querySelector("#modal-whatsapp");


let produtoSelecionado = null;


/* =========================================
   FORMATAÇÃO DO PREÇO
========================================= */

function formatarPreco(preco) {

    return preco.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}


/* =========================================
   CRIAR CARDS
========================================= */

function renderizarProdutos(lista) {

    productsGrid.innerHTML = "";


    if (lista.length === 0) {

        productsGrid.style.display =
            "none";


        emptyState.style.display =
            "block";


        return;
    }


    productsGrid.style.display =
        "grid";


    emptyState.style.display =
        "none";


    lista.forEach((produto) => {

        const card =
            document.createElement("article");


        card.classList.add(
            "product-card"
        );


        const promocao =
            produto.promocao
                ?
                `<span class="promotion-tag">
                    Promoção
                </span>`
                :
                "";


        card.innerHTML = `

            <div class="product-image">

                ${promocao}

                <img
                    src="${produto.imagem}"
                    alt="${produto.nome}"
                >

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${produto.categoriaNome}
                </span>

                <h3>
                    ${produto.nome}
                </h3>

                <span class="product-price">
                    ${formatarPreco(produto.preco)}
                </span>

            </div>

        `;


        card.addEventListener(
            "click",
            () => {

                abrirModal(produto);

            }
        );


        productsGrid.appendChild(card);

    });

}


/* =========================================
   PESQUISA
========================================= */

function filtrarProdutos() {

    let termo = "";


    /*
    Em telas mobile usamos
    a pesquisa mobile.

    No desktop usamos
    a pesquisa desktop.
    */

    if (window.innerWidth <= 700) {

        termo =
            mobileSearch.value
                .trim()
                .toLowerCase();

    } else {

        termo =
            desktopSearch.value
                .trim()
                .toLowerCase();

    }


    const categoria =
        categorySelect.value;


    const resultado =
        produtos.filter((produto) => {


            const encontrouNome =
                produto.nome
                    .toLowerCase()
                    .includes(termo);


            const encontrouCategoria =
                window.innerWidth <= 700
                ||
                categoria === "todos"
                ||
                produto.categoria === categoria;


            return (
                encontrouNome &&
                encontrouCategoria
            );

        });


    renderizarProdutos(resultado);

}


/* =========================================
   EVENTOS DA PESQUISA
========================================= */

desktopSearch.addEventListener(
    "input",
    filtrarProdutos
);


mobileSearch.addEventListener(
    "input",
    filtrarProdutos
);


categorySelect.addEventListener(
    "change",
    filtrarProdutos
);


/* =========================================
   MENU MOBILE
========================================= */

mobileMenuButton.addEventListener(
    "click",
    () => {

        mobileNav.classList.toggle(
            "active"
        );

    }
);


/* FECHAR AO CLICAR NO LINK */

document
    .querySelectorAll(".mobile-nav a")
    .forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                mobileNav.classList.remove(
                    "active"
                );

            }
        );

    });


/* =========================================
   MODAL
========================================= */

function abrirModal(produto) {

    produtoSelecionado = produto;


    modalImage.src =
        produto.imagem;


    modalImage.alt =
        produto.nome;


    modalCategory.textContent =
        produto.categoriaNome;


    modalTitle.textContent =
        produto.nome;


    modalDescription.textContent =
        produto.descricao;


    modalPrice.textContent =
        formatarPreco(
            produto.preco
        );


    modalOverlay.classList.add(
        "active"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================
   FECHAR MODAL
========================================= */

function fecharModal() {

    modalOverlay.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


/* BOTÃO X */

modalClose.addEventListener(
    "click",
    fecharModal
);


/* CLICAR FORA */

modalOverlay.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            modalOverlay
        ) {

            fecharModal();

        }

    }
);


/* TECLA ESC */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape"
        ) {

            fecharModal();

        }

    }
);


/* =========================================
   PEDIDO PELO WHATSAPP
========================================= */

modalWhatsapp.addEventListener(
    "click",
    () => {


        if (!produtoSelecionado) {
            return;
        }


        const mensagem =

            `Olá! Gostaria de pedir um ${produtoSelecionado.nome} no valor de ${formatarPreco(produtoSelecionado.preco)}.`;


        /*
        SUBSTITUA PELO NÚMERO
        QUE DESEJAR
        */

        const numero =
            "5561999999999";


        const url =

            `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;


        window.open(
            url,
            "_blank"
        );

    }
);


/* =========================================
   AJUSTE AO REDIMENSIONAR
========================================= */

window.addEventListener(
    "resize",
    filtrarProdutos
);


/* =========================================
   INICIALIZAÇÃO
========================================= */

renderizarProdutos(produtos);