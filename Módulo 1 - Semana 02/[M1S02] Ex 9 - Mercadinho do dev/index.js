// receber o produto e quantidade de itens que o cliente deseja comprar,
// e imprimir em tela o produto que o cliente pegou em maior quantidade.

var produto = [" ", "Hortifruti", "Laticíneos", "Carnes", "Peixes", "Aves"],
  produtoSelecionado,
  quantidade = ["0", "0", "0", "0", "0"],
  final = false;

do {
  produtoSelecionado = window.prompt(
    "Digite o código do produto que deseja comprar:\n 1 - Hortifruti\n 2 - Laticínios\n 3 - Carnes\n 4 - Peixes\n 5 - Aves\n 6 - Fechar pedido"
  );
  if (
    produtoSelecionado == "1" ||
    produtoSelecionado == "2" ||
    produtoSelecionado == "3" ||
    produtoSelecionado == "4" ||
    produtoSelecionado == "5" ||
    produtoSelecionado == "6"
  ) {
    switch (produtoSelecionado) {
      case "1":
        quantidade[0] = window.prompt(
          "Informe a quantidade de itens de " +
            produto[produtoSelecionado] +
            " que você deseja"
        );
        break;
      case "2":
        quantidade[1] = window.prompt(
          "Informe a quantidade de itens de " +
            produto[produtoSelecionado] +
            " que você deseja"
        );
        break;
      case "3":
        quantidade[2] = window.prompt(
          "Informe a quantidade de itens de " +
            produto[produtoSelecionado] +
            " que você deseja"
        );
        break;
      case "4":
        quantidade[3] = window.prompt(
          "Informe a quantidade de itens de " +
            produto[produtoSelecionado] +
            " que você deseja"
        );
        break;
      case "5":
        quantidade[4] = window.prompt(
          "Informe a quantidade de itens de " +
            produto[produtoSelecionado] +
            " que você deseja"
        );
        break;
      case "6":
        window.alert(
          "Confira na tela os detalhes do seu pedido.\nAgradecemos pela preferência"
        );
        final = true;
    }
  } else {
    window.alert(
      "Por favor, digite apenas números de 1 a 6, de acordo com o código do produdo desejado."
    );
  }
} while (final == false);

document.write(
  "<h3>" +
    "Lista de Compras:" +
    "</h3>" +
    "</br>" +
    quantidade[0] +
    " - Hortifruti" +
    "</br>" +
    quantidade[1] +
    " - Laticíneos" +
    "</br>" +
    quantidade[2] +
    " - Carnes" +
    "</br>" +
    quantidade[3] +
    " - Peixes" +
    "</br>" +
    quantidade[4] +
    " - Aves"
);
var maior = Math.max.apply(null, quantidade);
console.log(maior);

for (i = 0; i < quantidade.length; i++) {
  if (maior == quantidade[i])
    document.write(
      "<h3>" +
        "Item solicitado em maior quantidade:" +
        "</h3>" +
        "</br>" +
        produto[i + 1]
    );
}
