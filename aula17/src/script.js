// Alterando valor de atributo com JavaScript

const elemento = document.querySelector(".ex1");

elemento.src = './img/fgv.png';

// Exemplo de conteúdo dinâmico em elemento do HTML

const elemento2 = document.querySelector(".ex2");

elemento2.innerHTML = "Data de agora: " + Date();
