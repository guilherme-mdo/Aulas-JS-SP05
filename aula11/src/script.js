// Exemplo do método indexOf()

let texto = "Por favor localize a palavra 'localize' na string";

let localizeIndexOf = texto.indexOf('localize');

console.log(localizeIndexOf);

console.log('');

// Exemplo do método lastIndexOf()

let texto2 = "Por favor localize a palavra 'localize' na string";

let localizeLastIndexOf = texto2.lastIndexOf('localize')

console.log(localizeLastIndexOf);

console.log('');

// Exemplo do método search()

let texto3 = 'Somente a dor coletiva gera união';

let textoSearch = texto3.search('união');

console.log(textoSearch);

// Exemplo método match()

let texto4 = 'Nasceu o sol, no mar o azol';

let textoMatch = texto4.match(/ol/g);

console.log(textoMatch);

console.log('')

// Exemplo método matchAll()

let texto5 = 'Eu amo jogos, jogos são muito legais, jogos são divertidos';

let textoMatchAll = texto5.match('jogos');

console.log(Array.from(textoMatchAll));

console.log('');

// Exemplo método includes()

let texto6 = 'Somente a dor coletiva gera união';

let textoIncludes = texto6.includes('coletiva');

console.log(textoIncludes);

console.log('');

// Exemplo método startswith()

let texto7 = 'Ser ou não ser? eis a questão.';

let texto7StartsWith = texto7.startsWith('Ser');

console.log(texto7StartsWith);

console.log('');

// Exemplo método endswith()

let texto8 = 'Com grandes poderes vem grandes responsabilidades';

let texto8endsWith = texto7.endsWith('Poderes');

console.log(texto8endsWith);


