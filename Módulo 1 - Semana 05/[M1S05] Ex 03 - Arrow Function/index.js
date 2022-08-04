// Crie uma arrow function que recebe um array de números e calcula a média deles

const array = [1, 2, 3, 4, 5];

const calcularMedia = (array) => {
  const valorInicial = 0;
  const soma = array.reduce(
    (valorAnterior, valorAtual) => valorAnterior + valorAtual,
    valorInicial
  );
  return (media = soma / array.length);
};

console.log(`A média dos valores é ${calcularMedia(array)}`);
