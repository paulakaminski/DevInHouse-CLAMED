// Construa uma tela de mensagens, pode ser utilizado o código do exercício
// [M1S08] Ex 08 - Lista de contatos ou crie a estrutura presente na imagem em anexo, e adicione a lista
// pré carregada de mensagem em um hook específico.

// Coloque ao menos como objeto as propriedades nome e mensagem, como no exemplo a seguir:
// ```
// {
//    nome: "Nome Pessoa",
//    mensagem: "Texto da última mensagem"
// }
// ```

// Adicione ainda um botão na tela de "nova mensagem" e faça um append na lista inicial de conversas.
// O append pode ser com dados genéricos de nome e última mensagem.

import { useState, useEffect } from "react";

export default function Mensagens() {
  const mensagens = [
    {
      id: "abc",
      photo: "https://www.computerhope.com/people/pictures/joe_belfiore.jpg",
      name: "Joe Belfiore",
      lastMessage: "Hello!",
    },
    {
      id: "abcd",
      photo:
        "https://i0.wp.com/www.telesintese.com.br/wp-content/uploads/2016/02/mark-zuckerberg-headshot.jpg?fit=936%2C682&ssl=1",
      name: "Mark Zuckerberg",
      lastMessage: "I'm really busy.",
    },
  ];

  const [lastMessage, setLastMessage] = useState("");

  const [message, setMessage] = useState(mensagens);

  function submit(e) {
    e.preventDefault();
    setMessage((prev) => {
      return {
        ...prev,
        ...{
          id: "abcde",
          photo:
            "https://thumbs.dreamstime.com/b/%C3%ADcone-de-perfil-avatar-padr%C3%A3o-imagem-usu%C3%A1rio-m%C3%ADdia-social-210115353.jpg",
          nome: "Novo Contato",
          lastMessage: { lastMessage },
        },
      };
    });
  }

  useEffect(() => {}, [message]);

  return (
    <>
      <form>
        <input
          placeholder="Nova Mensagem"
          value={lastMessage}
          onChange={(e) => setLastMessage(e.target.value)}
        ></input>
        <button type="submit" onSubmit={submit}>
          Enviar
        </button>
      </form>
      {mensagens.map((item) => {
        return (
          <div className="main">
            <div className="mensagens">
              <img
                key={item.id}
                src={item.photo}
                alt="Foto do Perfil"
                className="fotoPerfil"
              ></img>
              <div className="infoMensagens">
                <h4 className="nomeContato" key={item.id}>
                  {item.name}
                </h4>
                <p className="ultimaMensagem" key={item.id}>
                  {item.lastMessage}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
