// Utilize o if ternário para construir uma função que recebe o número do dias
// e retorna se pertence a primeira ou a segunda quinzena

let numeroDia = 12;

let retornarQuinzena = (numeroDia) =>
  numeroDia <= 15 ? "Primeira Quinzena" : "Segunda Quinzena";

console.log(retornarQuinzena(numeroDia));
