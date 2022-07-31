// receber um valor numérico e imprimir se é par ou ímpar

var numero = window.prompt("Digite um número:");
if (numero % 2 == 1) {
  document.write("<h3>" + "O número digitado é: " + "Ímpar" + "</h3>");
} else {
  document.write("<h3>" + "O número digitado é: " + "Par" + "</h3>");
}
