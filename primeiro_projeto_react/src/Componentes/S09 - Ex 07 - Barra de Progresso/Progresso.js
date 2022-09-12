// Construa uma página de download com as seguintes informações:
// - Nome do arquivo
// - Tamanho
// - Botão de download

// Ao clicar no botão de download, simule a barra de progresso utilizando Hooks.
// Para a barra de progresso utilize o recurso setInterval até chegar a 100%.

// Como dica, utilize o componente <progress></progress>
// Exemplo de uso: ``` <progress value={0.05}></progress> ```

import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 10;

        if (newValue === 100) {
          clearInterval(interval);
        }
        return newValue;
      });
    }, 1000);
  }, []);

  function download() {
    <progress value={value} max={100}></progress>;
  }

  return (
    <div>
      <h5>Manual SEFIP 8.4 - Junho 2022</h5>
      <p>1456kb</p>
      <button onClick={download}>Download</button>
    </div>
  );
}
