// Com o hook useRef, crie um código que simule o evento "focus" do input
// Seguir o conceito abaixo, a ação deve ocorrer da seguinte forma:
// Ao clicar no botão "Focar no input", o foco do HTML deve passar para o input de forma automática (simulando o clique no input).

import { useRef } from "react";

export default function Focus() {
  const foco = useRef();

  function focoNoInput() {
    foco.current.focus();
  }

  return (
    <div>
      <input type="text" ref={foco}></input>
      <button onClick={focoNoInput}>Foco no Input</button>
    </div>
  );
};
