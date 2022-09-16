// A partir do exercício 7, modifique o código e adicione ao menos um produto para ser simulado.
// Controle, utilizando Hooks, a porcentagem de download de cada produto de forma individual e
// simulada com o recurso setInterval.

import { useEffect, useRef, useState } from "react";

export default function ProgressBarProducts() {
  const softwares = [
    {
      id: 0,
      nome: "Manual SEFIP 8.4 - Junho 2022",
      downloaded: 0,
      isDownloading: false,
    },
    {
      id: 1,
      nome: "SEFIP 8.4.4",
      downloaded: 0,
      isDownloading: false,
    },
  ];

  const [software, setSoftware] = useState(softwares);

  const interval = useRef();

  let i = 1;

  function iniciarDownload(key) {
    interval.current = setInterval(() => {
      setSoftware(() =>
        software.map(item => {
          if (item.id === key) {
            return { ...item, downloaded: i, isDownloading: true };
          } else {
            return { item };
          }
        }));
      i = i + 1;
    }, 50);
  };

  useEffect(() => {
    {
      software.map(item => {
        if (item.isDownloading && item.downloaded >= 100) {
          clearInterval(interval.current);
          item.isDownloading = false;
          item.downloaded = 0;
          i = 0;
        }
      });
    }
  }, [software]);

  return (
    <>
      {software.map((item) => (
        <div>
          <h4>{item.nome}</h4>
          <progress value={item.downloaded} min={0} max={100}></progress>
          <button key={item.id} onClick={() => iniciarDownload(item.id)}>
            Download
          </button>
        </div>
      ))}
    </>
  );
}
