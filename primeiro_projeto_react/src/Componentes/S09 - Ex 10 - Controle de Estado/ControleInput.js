// Utilizando controle de estado do input, identifique se algo está sendo digitado no input e mostre na renderização
// a mensagem "Você está escrevendo...".
// Caso não seja identificado uma alteração no input, coloque a mensagem: "Digite algo..."

import { useState, useEffect } from "react";

export default function ControleInput() {
  const [input, setInput] = useState();
  const [text, setText] = useState("Digite algo...");

  useEffect(() => {
    if (input != null) {
      setText("Você está escrevendo...");
    }
  }, [input]);

  return (
    <>
      <div>
        <p>{text}</p>
      </div>
      <form>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
      </form>
    </>
  );
}
