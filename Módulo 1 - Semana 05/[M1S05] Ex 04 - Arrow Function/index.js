// Crie uma arrow function que recebe um array de números e retorne um array contendo apenas números positivos

const array = [-5, -3, -1, 1, 3, 5];

const retornaNumerosPositivos = (array) => {
  const numerosPositivos = array.filter((item) => item > 0);
  return numerosPositivos;
};

console.log(retornaNumerosPositivos(array));
