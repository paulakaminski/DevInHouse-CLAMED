// reeber o peso e a altura e informar se está acima, abaixo ou no peso ideal, com base no cálculo do IMC

var peso = parseFloat(window.prompt("Digite o seu peso:"));
console.log(peso);
var altura = parseFloat(window.prompt("Digite sua altura:"));
console.log(altura);
var imc = peso / (altura * altura);
console.log(imc);

if (imc >= 25) {
  alert("Você está acima do peso, procure um médico.");
} else if (imc < 18.5) {
  alert("Você está abaixo do peso, procure um médico.");
} else {
  alert("PARABÉNS!! Você está no peso ideal.");
}
