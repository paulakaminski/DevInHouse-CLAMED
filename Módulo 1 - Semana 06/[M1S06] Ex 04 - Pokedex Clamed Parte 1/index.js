// Utilizando a api https://pokeapi.co/ e fazendo uma requisição get com XMLHttpRequest, imprima em um console.log() o nome,
// a altura, o peso e adicione na tela uma imagem (a sua escolha) desse pokémon. Todas as informações precisam vir da api
// inclusive a imagem.

// Dicas: as informações pedidas estão dentro do json que é retornado da api, observe as propriedades: height, weight,
// sprites e name.

// Para o teste no final da url é necessário usar um nome de um pokémon. Ex: pikachu, ditto, charmander…

const oReq = new XMLHttpRequest(); //Primeiro passo - criar instancia da classe XMLHttpRequest
const imagem = document.getElementById("imagem");

oReq.open("GET", "https://pokeapi.co/api/v2/pokemon/charmander");
oReq.onload = () => {
  console.log("Nome: " + oReq.response.name);
  console.log("Altura: " + oReq.response.height);
  console.log("Peso: " + oReq.response.weight);

  imagem.setAttribute("src",oReq.response.sprites.front_default);
};

oReq.responseType = "json";

oReq.send();
