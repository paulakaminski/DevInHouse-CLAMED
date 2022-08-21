// Escreva duas arrow functions que juntas possam imprimir tabuada de 0 a 10

// DICAS
// - A primeira deve imprimir a tabuada de um número
// - A segunda deve receber um numero e uma função, e realizar repetições de 1 até o número informado
// - Use a primeira função como callback da segunda

let numeroParaCalcular = 3;

const imprimirTabuada = (numero) => {
  return numeroParaCalcular * numero;
};

const calcularTabuada = (numero, funcao) => {
  for (let i = 0; i < 11; i++) {
    const item = funcao([i]);
    console.log(`${i} x ${numero} = ${item}`);
  }
};

calcularTabuada(numeroParaCalcular, imprimirTabuada);
