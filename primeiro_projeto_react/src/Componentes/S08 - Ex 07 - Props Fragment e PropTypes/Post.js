// Identifique as quantas e quais são as props do componente abaixo.
// Logo após, crie um componente Post passando todas as props identificadas.
// Não se esqueça de controlar o tipo de props que o componente pode receber.

import PropTypes from "prop-types";

import "./Post.css";

export default function Post({
  fotoPerfil,
  nomeUsuario,
  dataPost,
  descricaoPost,
  fotoPost,
  qtdeCurtidas,
  curtidoPor,
}) {
  return (
    <div className="post">
      <div className="header">
        <img src={fotoPerfil} alt="Foto do perfil" className="fotoPerfil"></img>
        <div className="nomeData">
          <h3 className="nomeUsuario">{nomeUsuario}</h3>
          <p className="dataPost">{dataPost}</p>
        </div>
      </div>

      <div className="postContent">
        <p>{descricaoPost}</p>
        <img src={fotoPost} alt="Imagem do post" className="fotoPost"></img>
      </div>

      <div className="footer">
        <div className="likesComments">
          <img
            className="likeHeart"
            src={
              curtidoPor === ""
                ? "https://cdn-icons-png.flaticon.com/512/535/535285.png"
                : "https://cdn-icons-png.flaticon.com/512/833/833472.png"
            }
          ></img>
          <p>Comments</p>
          <p>Share</p>
        </div>
        <p>
          Liked by {curtidoPor} and {qtdeCurtidas} others
        </p>
      </div>
    </div>
  );
}

Post.PropTypes = {
  fotoPerfil: PropTypes.string,
  nomeUsuario: PropTypes.string,
  dataPost: PropTypes.string,
  descricaoPost: PropTypes.string,
  fotoPost: PropTypes.string,
  qtdeCurtidas: PropTypes.number,
  curtidoPor: PropTypes.string
};
