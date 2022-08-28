// Após implementar o Ex 3, vamos adicionar tratativas na função criada;

// - Quando o usuário clicar no botão de buscar sem ter informado um valor no input exibir modal de alerta (alert)
// informando que o campo precisa ser preenchido
// - Quando o usuário preencher o campo com menos ou mais de 8 caracteres deve ser exibido modal de alerta (alert)
// informando que o campo foi preenchido com um cep inválido
// - Em ambos os casos à cima não deve ser realizada a consulta na api de cep

const endereco = document.getElementById("endereco");
const botao = document.getElementById("botao");

botao.addEventListener("click", function () {
  const input = document.getElementById("input-cep").value;
  const tamanhoInput = input.length;
  const options = {
    method: "GET",
  };

  if (input === "") {
    alert("Você deve digitar um CEP para pesquisa.");
  }
  if (tamanhoInput < 8 || tamanhoInput > 8) {
    alert("Foi inserido um CEP inválido, favor digitar novamente.");
  } else {
    fetch(`https://viacep.com.br/ws/${input}/json/`, options)
      .then((response) => {
        return response.json();
      })
      .then((cep) => {
        endereco.innerHTML = `<p>Logradouro: ${cep.logradouro}</p>
        <p>Bairro: ${cep.bairro}</p>
        <p>Localidade: ${cep.localidade}/${cep.uf}</p>`;
      })
      .catch((err) => {
        console.error(err);
      });
  };
});
