// Em um prompt capture o seu nome, idade e o sobrenome, após isso usando o template string junte para a string abaixo.
// Eu, =nome= =sobrenome=, possuo =idade= anos, e nasci em =calculo do ano em que estamos - sua idade=.

let nome = prompt("Informe seu nome:");
let sobrenome = prompt("Informe seu sobrenome:");
let idade = parseFloat(prompt("Informe sua idade:"));
let confirm = window.confirm("Se já fez aniversário esse ano clique em OK, se não, clique em Cancelar");
let texto;

if (confirm == true) {
  texto = `Eu, ${nome} ${sobrenome}, possuo ${idade} anos, e nasci em ${2022 - idade}`;
} else {
  texto = `Eu, ${nome} ${sobrenome}, possuo ${idade} anos, e nasci em ${2022 - idade - 1}`;
}

console.log(texto);
