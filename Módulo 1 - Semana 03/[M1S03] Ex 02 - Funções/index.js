// função nomeada que recebe um array de elementos, imprime cada elemento
// e retorna a quantidade de elementos do array.

function imprimirListaDeFilmes(listaDeFilmes = []) {
  var contador = 0,
    filme;

  while (contador < 3) {
    filme = window.prompt(
      "Informe seus três filmes favoritos, um de cada vez:"
    );
    contador++;
    listaDeFilmes.push(filme);
  }
  for (filme of listaDeFilmes) {
    console.log(filme);
  }
  var quantidade =
    "A quantidade de elementos da lista são " + listaDeFilmes.length;
  return quantidade;
}
console.log(imprimirListaDeFilmes());
