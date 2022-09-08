//Inicie um componente com Hooks e adicione uma lista inicial com 5 frutas e renderize estes elementos na tela.

import React, { useState } from "react";

export default function Frutas() {
  const [frutas] = useState(["banana", "morango", "uva", "laranja", "acerola"]);

  return (
    <div>
      <ul>
        {frutas.map((fruta) => (
          <li>{fruta}</li>
        ))}
      </ul>
    </div>
  );
};
