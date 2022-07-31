// função para receber array de numeros e retornar a quantidade de numeros pares e ímpares,
// e também imprimir na tela a quantidade de valores informados, quantidade de pares e quantidade de ímpares

var numero,
  contador = 0,
  arrayDeNumeros = [];
while (contador <= 7) {
  numero = Number(window.prompt("Escolha 08 números e digite-os um a um:"));
  contador++;
  arrayDeNumeros.push(numero);
}
console.log(arrayDeNumeros);

function contadorParImpar(arrayDeNumeros = []) {
  var contadorPar = 0,
    contadorImpar = 0,
    contadorInvalido = 0;
  for (var numero of arrayDeNumeros) {
    if (numero % 2 == 0) {
      contadorPar++;
    } else if (numero % 2 == 1) {
      contadorImpar++;
    } else {
      contadorInvalido++;
    }
  }
  return [contadorPar, contadorImpar, contadorInvalido];
}

qtdePar = contadorParImpar(arrayDeNumeros)[0];
qtdeImpar = contadorParImpar(arrayDeNumeros)[1];
qtdeInvalido = contadorParImpar(arrayDeNumeros)[2];

console.log(qtdePar, qtdeImpar, qtdeInvalido);

if (qtdeInvalido != 0) {
  window.alert(
    "Você digitou valores inválidos, favor informar apenas números."
  );
} else {
  document.write(
    "Os números informados foram: " +
      arrayDeNumeros +
      ". A quantidade total de números informados é: " +
      arrayDeNumeros.length +
      ". A quantidade de valores pares é: " +
      qtdePar +
      " e a quantidade de valores ímpares é: " +
      qtdeImpar
  );
}
