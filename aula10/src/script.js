// Exemplo charAt()
let ex1CharAt = "hello world";
let primeiroCaractere = ex1CharAt.charAt(0);

console.log(`O primeiro caractere de "${ex1CharAt}" string é: ${primeiroCaractere}`);

console.log("");

// Exemplo charCodeAt()
let ex1CharCodeAt = "hello world";
let codigoCaractere = ex1CharCodeAt.charCodeAt(0);

console.log(codigoCaractere);

console.log("");

// Exemplo codePointAt()
let ex1CodePointAt = "hello world";
let codigoPontoUnicode = ex1CodePointAt.codePointAt(0);

console.log(codigoPontoUnicode);

// Exemplo método at()

const nome = "Guilherme";
let terceiroCaractere = nome.at(2);

console.log(`O terceiro caractere do nome Guilherme é: ${terceiroCaractere}`);

console.log(' ');

// Utilizando [] para acessar 'itens' em uma lista/array

let fruta = 'morango';
let letraM = fruta[0];

console.log(`A primeira letra da palavra morango é: ${letraM}`);

console.log('');

// Exemplo do método concat()

let texto1 = 'Olá';
let texto2 = 'SP05';
let textoConcatenado = texto1.concat(', ', texto2);

console.log(textoConcatenado);

// Exemplo do método slice()

let stringFrutas = 'Maçã, Banana, Laranja';
let frutaUnica = stringFrutas.slice(14,21);

console.log(frutaUnica);

//let frutraString = new String(stringFrutas);console.log(frutraString);

console.log('');

//  Exemplo do método substring()

let stringFrutas2 = "Maçã, Banana, Laranja";
let frutaUnica2 = stringFrutas2.substring(14, 21);

console.log(frutaUnica2);

console.log('');

// Exemplo do método substr()

let stringFrutas3 = 'Maçã, Banana, Laranja';
let frutaUnica3 = stringFrutas3.substr(0, 4);

console.log(frutaUnica3);

console.log('');

// Exemplo do método toLowerCase()

let primeiroNome = 'Guilherme';
let segundoNome = 'Michael';
let nomeComposto = primeiroNome.concat(' ', segundoNome);

let nomeCompletoLowerCase = nomeComposto.toLowerCase();
let nomeCompletoUpperCase = nomeComposto.toUpperCase();

console.log(nomeCompletoLowerCase);
console.log(nomeCompletoUpperCase);

console.log('');

// Exemplo do método isWellFormed()

let helloWord1 = 'Hello, World!';
let helloWord2 = "Hello, World \uD800";

console.log(helloWord1.isWellFormed());
console.log(helloWord2.isWellFormed());

// Exemplo do método trim(), trimStart() e trimEnd()

let textoComEspaco = '             SP05         ';
let textoSemEspaço = textoComEspaco.trim();

let textoSemEspacoInicial = textoComEspaco.trimStart();
let textoSemEspacoFinal = textoComEspaco.trimEnd();

console.log(textoComEspaco);
console.log(textoSemEspaço);
console.log(textoSemEspacoInicial);
console.log(textoSemEspacoFinal);


console.log('');

// Exemplos dos métodos padStart() e padEnd ()
let textoSemPad = "SPO5";
let textoPadInicial = textoSemPad.padStart(8, "-");

console.log(textoPadInicial);

console.log(' ');

// Exemplo do método repeat()
let textoSemRepeat = "Olá, SPO5!";
let textoComRepeat = textoSemRepeat.repeat (3);

console.log(textoComRepeat);

console.log(' ');

// Exemplo do método replace()

let textoSemReplace = 'Somente a dor coletiva gera união.';
let textoComReplace = textoSemReplace.replace('dor', 'consciência');

console.log(textoSemReplace);
console.log(textoComReplace);

console.log(' ');

// Exemplo do método replaceAll()

let textoReplaceAll = 'Eu amo motos. Motos são muito interessantes.';

textoReplaceAll = textoReplaceAll.replaceAll('Motos', 'Carros');

textoReplaceAll = textoReplaceAll.replaceAll('motos', 'carros');

console.log(textoReplaceAll);

console.log('');

// Exemplo do método split()
let textoSemSplit = 'Bebam Água!';

const arrayTextoComSplit = textoSemSplit.split('');
const arrayTextoComSplit2 = textoSemSplit.split(' ');

console.log(arrayTextoComSplit);
console.log(arrayTextoComSplit2);


