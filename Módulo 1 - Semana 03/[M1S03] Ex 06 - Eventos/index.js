// Faça um site com uma lista de itens (por exemplo, de brinquedos), que tenha:
// um campo de input do item um botão para criar um item na lista

function adicionar() {
  const input = document.getElementById("input");
  const textoDoInput = input.value;
  const nomeDeGato = document.createElement("li");
  nomeDeGato.innerText = textoDoInput;
  const listaDeNomesDeGatos = document.getElementById("lista");
  listaDeNomesDeGatos.appendChild(nomeDeGato);
}
