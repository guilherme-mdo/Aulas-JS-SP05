// Introdução a arrays

const frutas = ["Banana", "Maçã", "Laranja", "Uva", "Melão"];

console.log(frutas);

console.log("");

// Inserindo elemento em array vazio

const frutas2 = [];

frutas2[0] = "Morango";
frutas2[1] = "Carambola";
frutas2[2] = "Kiwi";

console.log(frutas2);

console.log('');

// Acessando item de array
const carros = ["Gol", "Palio", "Celta"];

let carro1 = carros[0];
let carro2 = carros[1];
let carro3 = carros[2];

console.log(carro1);
console.log(carro2);
console.log(carro3);

// Alterando elemento de array

const carros2 = ["Ferrari", "Porsche", "McLaren"];

console.log(carros2);

carros2[0] = "Marea";
carros2[1] = "Fusca";
carros2[2] = "Uno";

console.log(carros2);

console.log('');

// Convertendo array em string

const pessoas = ["Anael", "Micaela", "Lucas"];

let listaPessoas = pessoas.toString();

console.log(pessoas);
console.log(listaPessoas);

// Exemplo de array em JSON
const frutas3 = ["Maracujá", "Melancia", "Pêra"];

let frutasJSON = JSON.stringify(frutas3);

console.log(frutasJSON);

console.log('');

// Exemplo da propriedade length

let times = ["São Paulo", "Corinthians", "Flamengo"];

let quantidadeTimes = times.length;

console.log(quantidadeTimes);

let ultimoItemArray = times[quantidadeTimes - 1];

console.log(ultimoItemArray);

console.log('');

// Exemplo de laço de repetição com array
const frutas4 = ["Jaca", "Morango", "Limão", "Goiaba"];

const tamanhoLista = frutas4.length;

for (let contadora = 0; contadora < tamanhoLista; contadora++) {
    console.log(frutas4[contadora]);
}


