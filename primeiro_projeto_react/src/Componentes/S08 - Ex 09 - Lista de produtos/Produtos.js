//Crie um componente chamado Produto. Cada produto contém as props photo, name e price.

import "./Produtos.css";

export default function Produtos({ photo, name, price }) {
  return (
    <div className="container">
      <div className="produtos">
        <div className="imagem">
          <img
            src={photo}
            alt="Imagem do produto"
            className="imagemProduto"
          ></img>
        </div>
        <div className="infoProdutos">
          <h5 className="nomeProduto">{name}</h5>
          <p className="preco">
            <strong>{price}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
