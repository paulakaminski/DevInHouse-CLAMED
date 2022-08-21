// Crie 2 funções, ambas recebem um número e retorna true ou false:
// - a primeira  verifica se é par;
// - a segunda verifica se é ímpar.

// Em seguida crie uma função que recebe como parâmetros: um array de números e uma função callback.
// Essa função principal deverá ser capaz de filtrar os números e retornar um array de números filtrados
// (independente de qual seja a função callback).

// Dica: o filtro poderá ser de números ímpares ou pares.

function informarPar(numero) {
  if (numero % 2 === 0) {
    return true;
  }
}

function informarImpar(numero) {
  if (numero % 2 === 1) {
    return false;
  }
}

let arrayDeNumeros = [2, 4, 9, 13, 16, 50, 53, 62],
  arrayDePares = [],
  arrayDeImpares = [];

// let arrayFiltrado = arrayDeNumeros.filter(function (item, funcao) {
//   if (informarPar(item) == true) {
//     arrayDePares.push;
//   } else {
//     arrayDeImpares.push;
//   }
// });

let arrayFiltrado = arrayDeNumeros.filter((numero) => {
  if (informarPar(numero) == true) {
    arrayDePares.push(numero);
  } else {
    arrayDeImpares.push(numero);
  };
});

console.log(arrayDePares);
console.log(arrayDeImpares);
