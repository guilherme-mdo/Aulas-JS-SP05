// Exemplo de evento executado com addEventListener

const botao1 = document.querySelector("#ex2-btn");
const paragrafo1 = document.querySelector("#ex2-p");

function mostrarData() {
    paragrafo1.innerHTML = Date();
}

botao1.addEventListener("click", mostrarData);

// Exemplo de eventos mouseover e mouseout

const ex3Div = document.querySelector("#ex3-div");
const ex3P = document.querySelector("#ex3-p");

ex3Div.addEventListener("mouseover",() => {
    ex3P.innerHTML = "O mouse está sobre a caixa";
    ex3P.style.color = "green";
})

ex3Div.addEventListener("mouseout",() => {
    ex3P.innerHTML = "O mouse está fora da caixa";
    ex3P.style.color = "red";
})

// Exemplo de evento mousemove

const ex4P = document.querySelector("#ex4-p");

document.addEventListener("mousemove", (event) => {
    ex4P.innerHTML = `
    X: ${event.clientX}
    <br>
    Y: ${event.clientY}`;
});

// Exemplo de evento keydown

const campo = document.getElementById("ex5-campo");
const ex5p = document.getElementById("demo-p");

campo.addEventListener("keydown", (evento) => {
    ex5p.innerHTML = `A tecla informada foi ${evento.key}`;
})

// Exemplo usando removeEventListener

const addBtn = document.getElementById("adicionar");
const removeBtn = document.getElementById("remover");
const testBtn = document.getElementById("testar");
const ex6P = document.getElementById("ex6-p");

function adicionarTexto() {
    ex6P.innerHTML += "SP05";
}

addBtn.addEventListener("click", function() {
    testBtn.addEventListener("click", adicionarTexto);
});

removeBtn.addEventListener("click", function(){
    testBtn.removeEventListener("click", adicionarTexto);
});

// Exemplo de bloqueio em evento com o preventDefault()
const link = document.querySelector("#ex7-link");
const ex7P = document.querySelector("#ex7-p");

link.addEventListener("click", function(evento) {
  evento.preventDefault();
  ex7P.innerHTML = "O link foi bloqueado.";
});
