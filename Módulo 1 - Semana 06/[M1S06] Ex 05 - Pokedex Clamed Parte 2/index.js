// Agora pensando em avançar um pouco mais iremos adicionar em tela um input e um botão que irá pegar o nome do pokemon
// e ao apertar no botão pesquisar irá fazer a mesma requisição construída anteriormente.
// Com isso imprima as mesmas informações pedidas todas em tela, adicione uma lista com todas as habilidades do pokémon
// (observe a propriedade abilities).

const oReq = new XMLHttpRequest(); //Primeiro passo - criar instancia da classe XMLHttpRequest

const botao = document.getElementById("botao");
const imagem = document.getElementById("imagem");
const infoPokemon = document.getElementById("info-pokemon");

botao.addEventListener("click", function () {
  const input = document.getElementById("input-pokemon").value;

  oReq.onload = () => {
    let nome = oReq.response.name;
    let altura = oReq.response.height;
    let peso = oReq.response.weight;
    let habilidades;

    for (let i = 0; i < oReq.response.abilities.length; i++) {
      habilidades = oReq.response.abilities[i].ability.name;
    };

    imagem.setAttribute("src", oReq.response.sprites.front_default);

    var novoPokemon;

    novoPokemon = `<p>Nome: ${nome}</p>
    <p>Altura: ${altura}</p>
    <p>Peso: ${peso}</p>
    <p>Habilidades:<p>
    <li>${habilidades}</li>`;

    infoPokemon.innerHTML += novoPokemon;
  };

  oReq.open("GET", `https://pokeapi.co/api/v2/pokemon/${input}`);
  oReq.responseType = "json";

  oReq.send();
});
