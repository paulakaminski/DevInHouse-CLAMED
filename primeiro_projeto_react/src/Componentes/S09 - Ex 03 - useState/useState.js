//Adicione o recurso "useState" para realizar a contagem de cliques em um botão, mostrar essa quantidade na tela renderizada.

import React, { useState } from "react";

export default function Cliques() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
      <p>Você clicou {count} vezes</p>
    </div>
  );
};
