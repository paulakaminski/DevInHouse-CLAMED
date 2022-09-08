//Adicione dois botões na tela com os nomes "Título 1" e "Título 2", adicione ainda um <span>
//que irá receber o valor dos botões clicados.
//Modificar o título da página ao gerar um evento onClick nos botões, mostrar também na tela qual botão foi clicado.

import React, { useState, useEffect } from "react";

export default function Titulos() {
  const [title, setTitle] = useState("Meu primeiro projeto React");

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <span>Botão clicado: {title}</span>
      <button onClick={() => setTitle("Título 1")}>Título 1</button>
      <button onClick={() => setTitle("Título 2")}>Título 2</button>
    </div>
  );
};
