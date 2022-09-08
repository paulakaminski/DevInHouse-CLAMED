export default function Card({
  fotoPerfil,
  titulo,
  nickName,
  imagem,
  valorEtherium,
  valorReais,
  tempo = "8 anos",
}) {
  return (
    <div>
      <head>
        <div>
          <img class Name="imagem" src={fotoPerfil} alt="Imagem do Produto" />
        </div>
        <div>
          <h1 className="titulo">{titulo}</h1>
          <p className="nickname">{nickName}</p>
        </div>
      </head>
      <div className="fotoProduto">
        <img src={imagem} />
      </div>
      <footer>
        <div>
          <p>{tempo}</p>
        </div>
        <div>
          <p>{valorReais}</p>
          <h2>{valorEtherium} ETH</h2>
        </div>
      </footer>
    </div>
  );
};
