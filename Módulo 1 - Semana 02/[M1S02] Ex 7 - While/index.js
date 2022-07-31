// receber a opinião de 4 usuários classificando o que achou da série, e verificar quantas pessoas a classificam como ruim

var contador = 0,
  resposta,
  qtPessoas = 0;

while (contador < 4) {
  // repetir a pergunta 4 vezes
  resposta = window.prompt(
    "Qual sua classificação para a série Stranger Things?\n Excelente\n Bom\n Ruim"
  );
  switch (resposta.toLocaleLowerCase()) {
    case "ruim":
      qtPessoas++; // somar a quantidade de respostas que classificarem como ruim
      break;
    case "bom":
      break;
    case "excelente":
      break;
      if (resposta == "Ruim") {
        qtPessoas++;
      }
  }

  contador++;
}

document.write(
  "Quantidade de pessoas que classificou a série como ruim: ",
  qtPessoas
);
