//Crie um componente chamado Produto. Cada produto contém as props photo, name e price.

import "./Produtos.css"

export default function Produtos({ photo, name, price }) {
  return (
    <div className="mainContent">
      <div className="produtos">
        <img
          src={photo}
          alt="Imagem do produto"
          className="imagemProduto"
        ></img>
        <div className="infoProdutos">
          <h4 className="nomeProduto">{name}</h4>
          <p className="preco">{price}</p>
        </div>
      </div>
    </div>
  );
};


