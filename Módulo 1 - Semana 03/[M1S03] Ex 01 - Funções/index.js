// função não nomeada que receba um número e retorne uma string informando se é par ou ímpar.

var informarParImpar = function (numero) {
  var numero;
  numero = Number(window.prompt("Digite um número:"));
  var resultado;
  if (numero % 2 == 1) {
    resultado = "ímpar";
  } else if (numero % 2 == 0) {
    resultado = "par";
  } else {
    ("inválido");
  }
  document.write("O número " + numero + " é " + resultado);
};
informarParImpar();
