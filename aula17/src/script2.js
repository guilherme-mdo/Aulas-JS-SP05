console.log('teste');

// Alterando CSS de elemento com o JS

const elemento1 = document.querySelector('.ex1');

elemento1.style.fontFamily = "sans-serif";
elemento1.style.fontSize = "20px";
elemento1.style.color = "#ff2d00";

// Alterando CSS de elemento com evento no JavaScript

const elementoParagrafo = document.getElementById("ex2-p");
const elementoBotao = document.getElementById("ex2-btn");

function estilizarParagrafo() {
    elementoParagrafo.style.fontSize = "26px";
    elementoParagrafo.style.fontFamily = "mono-space";
    elementoParagrafo.style.color = "#f34e00";
}

elementoBotao.addEventListener("click", estilizarParagrafo);