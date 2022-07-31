// Crie um site com os seguintes requisitos:
// - um campo de texto (input) onde o usuário irá digitar uma mensagem
// - três botões:
//   - um botão “adicionar”, que no momento do clique insira a mensagem na tela
//   - um botão “salvar mensagem”, que no momento do clique salve as informações no localStorage
// opcional: se o texto estiver vazio (length), deve mostrar uma mensagem ao usuário solicitando a inserção de algum texto.
//   - um botão “mostrar mensagem”, que após o recarregamento da página, no momento do clique busque a mensagem no localStorage
//   e exiba na tela
// opcional: se não houver mensagem cadastrada no localStorage, deve mostrará na tela: “não há ítens salvos”

function adicionar() {
  const input = document.getElementById("input");
  const div = document.getElementById("resposta");
  div.innerHTML = input.value;
}

const salvar = document.getElementById("botao-salvar");
salvar.addEventListener("click", function () {
  const input = document.getElementById("input");
  localStorage.setItem("mensagem", JSON.stringify(input.value));
});

function mostrar() {
  const input = document.getElementById("input");
  const div = document.getElementById("resposta");
  const texto = localStorage.getItem("mensagem");
  div.innerHTML = JSON.parse(texto);
}
