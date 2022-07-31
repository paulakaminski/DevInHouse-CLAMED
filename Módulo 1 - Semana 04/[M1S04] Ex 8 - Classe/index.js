// Crie uma classe chamada **Serie** com os seguintes atributos: *nome*, *anoLancamento*, *qttTemporada*.
//  - Construa o construtor dessa classe com todos os atributos.
//  - Após isso, com um laço de repetição a sua escolha, instancie a classe 4 vezes com os dados sendo capturados por um prompt
//  e depois adicione a classe a um array chamado series.
//  - Após isso imprima no documento (usando o innerHTML) a série mais antiga (ou seja, a que possui o menor anoLancamento).
//  - Para percorrer o array com as 4 classes utilize o forEach.

class Serie {
  nome;
  anoLancamento;
  qtdeTemporada;

  constructor(nome, anoLancamento, qtdeTemporada) {
    this.nome = nome;
    this.anoLancamento = anoLancamento;
    this.qtdeTemporada = qtdeTemporada;
  }
}

let series = [],
  anoMaisAntiga = 9999,
  nomeMaisAntiga;

for (let i = 0; i < 4; i++) {
  let nome = prompt("Digite o nome de uma série:");
  let anoLancamento = parseInt(prompt("Digite o ano de lançamento da série:"));
  let qtdeTemporada = parseInt(prompt("Digite a quantidade de temporadas da série:")
  );

  const serie = new Serie(nome, anoLancamento, qtdeTemporada);

  series.push(new Object(serie));
}

console.log(series);

series.forEach(function (item, i) {
  if (series[i].anoLancamento < anoMaisAntiga) {
    anoMaisAntiga = item.anoLancamento;
    nomeMaisAntiga = item.nome;
  }
});

let impressaoNaTela = document.getElementById("texto");
impressaoNaTela.innerHTML =
  "A série mais antiga informada é a: " +
  nomeMaisAntiga +
  ", lançada em " +
  anoMaisAntiga;
