// Crie um  projeto React que recebe dois componentes:

// - um título: Meu primeiro projeto React
//   - utilize folha de estilo CSS para deixá-lo centralizado e colorido

// - um texto: Criar um projeto React é muito fácil <3
//   - utilize estilização inline para deixá-lo em itálico e de outras maneiras que sua imaginação permitir

import "./Titulo.css";

const Titulo = () => {
  const meuEstilo = {
    fontStyle: "italic",
    color: "#395B64",
    backgroundColor: "#A5C9CA",
  };
  
  return (
    <div>
      <h1 id="titulo">Meu primeiro projeto React</h1>
      <p style={meuEstilo}>Criar um projeto React é muito fácil!</p>
    </div>
  );
};

export default Titulo;
