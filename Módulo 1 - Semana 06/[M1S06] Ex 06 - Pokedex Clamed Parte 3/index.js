// Para fechar baixe o zip passado em anexo, nele irá conter o html, o css e o arquivo javascript (index.js),
// toda implementação será feita no javascript.

// Observe os seguintes pedidos:

// - Na tag img com a classe pokemonimage adicione a imagem do pokémon que você irá pesquisar.
// - No span com a classe pokemonnumber será adicionado o id do pokemon.
// - No span com a classe pokemonname será adicionado o nome do pokemon.
// - No input com a classe input__search será onde o usuário poderá pesquisar pelo nome ou pelo id.
// - No span com o id pokemontype será adicionado o tipo do pokémon pesquisado.
// - No span com o id weight irá ser apresentado o peso do pokemon.
// - Ao clicar no botão com a classe button será iniciado toda a funcionalidade da aplicação: pesquisa da api,
// adição das informações nos campos…

const oReq = new XMLHttpRequest();

const imagem = document.getElementById("pokemonimage");
const campoId = document.getElementById("pokemonnumber");
const campoNome = document.getElementById("pokemonname");
const campoTipo = document.getElementById("pokemontype");
const campoPeso = document.getElementById("weight");
const campoHabilidades = document.getElementById("ability");
const botao = document.getElementById("button");

botao.addEventListener("click", function () {
  const input = document.getElementById("input__search").value;
  console.log(input);

  oReq.onload = () => {
    let id = oReq.response.id;
    let nome = oReq.response.name;
    let peso = oReq.response.weight;

    let tipo;
    let habilidades;

    for (let i = 0; i < oReq.response.types.length; i++) {
      tipo = oReq.response.types[i].type.name;
    }

    for (let i = 0; i < oReq.response.abilities.length; i++) {
      habilidades = oReq.response.abilities[i].ability.name;
    }

    imagem.setAttribute("src", oReq.response.sprites.front_default);

    campoNome.innerHTML = "";
    campoId.innerHTML = "";
    campoTipo.innerHTML = "";
    campoHabilidades.innerHTML = "";
    campoPeso.innerHTML = "";

    campoNome.innerHTML = nome;
    campoId.innerHTML = id;
    campoTipo.innerHTML = tipo;
    campoHabilidades.innerHTML = habilidades;
    campoPeso.innerHTML = peso;
  };

  oReq.open("GET", `https://pokeapi.co/api/v2/pokemon/${input}`);
  oReq.responseType = "json";

  oReq.send();
});
