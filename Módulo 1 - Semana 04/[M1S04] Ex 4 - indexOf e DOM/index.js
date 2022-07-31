// Construa um código javascript que irá remover de um array um item que irá ser passado no parâmetro desse método.
// O fluxo consiste em capturar em um input html um item do array e ao apertar em um botão fazer com que esse item seja excluído
// (utilize o addEventListener de click). Pode conferir no console.log() como está o array após a exclusão.

let listaDeTimes = [
  "Palmeiras",
  "Corinthians",
  "Atlético-MG",
  "Fluminense",
  "Athletico-PR",
];

let lista = document.getElementById("lista");
lista.innerHTML = listaDeTimes;

let button = document.getElementById("button");

button.addEventListener("click", function () {
  let valor = document.getElementById("input").value;
  excluirItem(valor);
});

function excluirItem(item) {
  let indice = listaDeTimes.indexOf(item);

  if (indice != -1) {
    listaDeTimes.splice(indice, 1);
  }

  console.log(listaDeTimes);
}
