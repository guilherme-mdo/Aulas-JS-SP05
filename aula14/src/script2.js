// Primeiro objeto em javascript

const Carro = {
    tipo: "Sedan",
    marca: "Volkswagen",
    modelo: "Gol",
    cor: "branco",
    ano: 1995,
};

console.log(Carro);

console.log("");

// Exemplo de objeto vazio

const Pessoa = {};

Pessoa.nome = "Guilherme";
Pessoa.idade = 23;
Pessoa.altura = 1.88;

console.log(Pessoa);

// Exemplo de acesso a propriedades em objetos

const Animal = {
    nome: "Snoop",
    tipo: "Cachorro",
    raca: "SRD",
};

let nomeAnimal = Animal.nome;
let racaAnimal = Animal.raca;

console.log(nomeAnimal);
console.log(racaAnimal);

console.log("");

// Exemplo de objeto com método

const Pessoa2 = {
    nome: "Anael",
    idade: 18,
    saudacao: function() {
        return "Aooooba! bom?";
    },
};

let pessoa2Nome = Pessoa2.nome;
let pessoa2Saudacao = Pessoa2.saudacao();

console.log(`${pessoa2Nome} disse: ${pessoa2Saudacao}`);

console.log("");

// Exemplo de alteração em valor de propriedade em um objeto

const Pessoa3 = {
    nome: "Fabricio",
    idade: 20,
};

console.log(Pessoa3);

Pessoa3.idade = 19;

console.log(Pessoa3);

console.log('');

// Exemplo de remoção de propriedade em objeto

const Moto = {
    marca: "Honda",
    modelo: "CB500",
    portas: 4,
};

console.log(Moto.portas);

delete Moto.portas;

console.log(Moto);
