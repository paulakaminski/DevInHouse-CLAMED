// receber o nome e as 4 notas do aluno, calcular sua média e imprimi-la em tela,
// junto com a informação se está aprovado ou reprovado, considerando a média 7 para aprovação.

var nome,
  contador = 0,
  nota,
  notas = [];

nome = window.prompt("Nome do aluno: ");

while (contador < 4) {
  // repetir a solicitação de notas 4 vezes
  nota = parseFloat(
    window.prompt(
      "Informe a nota de cada unidade, clicando em OK cada vez que digitar uma nota:"
    )
  );
  contador++;
  notas.push(nota);
}
console.log(notas);

var soma = 0;
var media = 0;
var situacaoAluno;

for (var i = 0; i < notas.length; i++) {
  soma += notas[i];
}
console.log(soma);

media = soma / 4;
console.log(media);

if (media >= 7) {
  situacaoAluno = "Aprovado";
} else {
  situacaoAluno = "Reprovado";
}
console.log(situacaoAluno);

document.write("<h3>" + "Aluno: " + nome + "</h3>");
document.write("<h3>" + "Média final: " + media + "</h3>");
document.write("<h3>" + "Situação: " + situacaoAluno + "</h3>");
