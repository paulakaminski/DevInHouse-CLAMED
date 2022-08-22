// Construa uma função que irá verificar se um valor passado pelo parâmetro é par. Construa as validações dentro
// de uma promise para que caso seja uma par retorne para o then a mensagem "Número validado é par”.
// Caso o valor seja impar, retorne para o catch a mensagem “Error: número informado é impar”.

const verificaSePar = (numero) => {
  if (numero % 2 == 0) {
    return "par";
  } else {
    return "ímpar";
  }
};

const minhaPromise = new Promise((resolve, reject) => {
  if (verificaSePar(10) == "par") {
    resolve("O número validado é par");
  } else {
    reject("Error: o número informado é ímpar");
  }
});

minhaPromise
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => {
    console.log(reject);
  });
