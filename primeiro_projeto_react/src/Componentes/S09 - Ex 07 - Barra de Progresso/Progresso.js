// Construa uma página de download com as seguintes informações:
// - Nome do arquivo
// - Tamanho
// - Botão de download

// Ao clicar no botão de download, simule a barra de progresso utilizando Hooks.
// Para a barra de progresso utilize o recurso setInterval até chegar a 100%.

// Como dica, utilize o componente <progress></progress>
// Exemplo de uso: ``` <progress value={0.05}></progress> ```

import { useEffect, useRef, useState } from "react";

export default function ProgressBar() {
  const softwareObj = {
    nome: "Manual SEFIP 8.4 - Junho 2022",
    downloaded: 0,
    isDownloading: false,
  };

  const [software, setSoftware] = useState(softwareObj);

  const interval = useRef();

  function iniciarDownload() {
    interval.current = setInterval(() => {
      setSoftware((prev) => ({
        ...prev,
        isDownloading: true,
        downloaded: (prev.downloaded += 1),
      }));
    }, 50);
  }

  useEffect(() => {
    if (software.isDownloading && software.downloaded >= 100) {
      clearInterval(interval.current);
      setSoftware((prev) => ({
        ...prev,
        downloaded: 0,
        isDownloading: false,
      }));
    }
  }, [software]);

  return (
    <div>
      <h4>
        {software.nome}</h4>
      <p>1456kb</p>
      <progress value={software.downloaded} min={0} max={100}></progress>
      <button onClick={iniciarDownload}>Download</button>
    </div>
  );
}
