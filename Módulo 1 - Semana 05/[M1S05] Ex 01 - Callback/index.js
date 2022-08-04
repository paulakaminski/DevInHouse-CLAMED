// Crie um site com um botão que espera receber
// um evento de click e uma função callback
// que informe ao usuário que o botão foi clicado.

function clicarBotao() {
  window.alert("O botão foi clicado.");
}

const botao = document.getElementById("botao");
botao.addEventListener("click", clicarBotao);
