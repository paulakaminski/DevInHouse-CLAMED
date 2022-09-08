// Crie um componente de lista de contatos. Cada contato deve conter uma props photo, name e description.
// Defina valores padrão para as props que o componente deve receber (dedaultProps)

import PropTypes from "prop-types";
import "./Contatos.css";

export default function Contatos({ photo, name, description }) {
  return (
    <div className="main">
      <div className="contatos">
        <img src={photo} alt="Foto do Perfil" className="fotoPerfil"></img>
        <div className="infoContatos">
          <h4 className="nomeContato">{name}</h4>
          <p className="descricaoContato">{description}</p>
        </div>
      </div>
    </div>
  );
}

Contatos.PropTypes = {
  photo: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};

Contatos.defaultProps = {
  photo: "https://cdn-icons-png.flaticon.com/512/2102/2102647.png",
  name: "",
  description: "",
};
