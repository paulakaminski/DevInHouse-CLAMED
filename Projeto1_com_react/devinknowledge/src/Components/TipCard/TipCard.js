export default function TipCard({titulo, linguagem, categoria, descricao, video}) {
    return (
      <div className="div-cards">
        <h3>{titulo}</h3>
        <p>Linguagem/Skill: {linguagem}</p>
        <p>Categoria: {categoria}</p>
        <p>Descrição: {descricao}</p>
        <button className="botoes-card"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    );
  };
  