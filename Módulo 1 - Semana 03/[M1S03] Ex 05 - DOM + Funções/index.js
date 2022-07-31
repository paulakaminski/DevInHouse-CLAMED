// Substituir as repetições do exercício 04 por uma função.
// Exercício 04: Crie um site (arquivo HTML) que, ao ser renderizado, adicione (arquivo JS)
// 5 textos quaisquer, um ao lado outro, com a cor azul (arquivo css).

function adicionarTextos(textos = []) {
  let idTextos = document.getElementById("textos");
  for (let text of textos) {
    let texto1 = document.getElementsByClassName("texto")[0];
    texto1.innerHTML = text;
    idTextos.append(texto1);
  }
}

adicionarTextos(["Texto 01", "Texto 02", "Texto 03", "Texto 04", "Texto 05"]);
