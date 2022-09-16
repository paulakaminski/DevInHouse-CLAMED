// Construa uma arquitetura de uma página web simples, com os componentes header,
// uma área para o conteúdo do site e um footer onde receberá os dados de contato da empresa.

export default function Content() {
  return (
    <div style={{ textAlign: "center", alignContent: "center" }}>
      <h1>Título do Site</h1>
      <img
        src="https://i0.wp.com/blog.portaleducacao.com.br/wp-content/uploads/2022/02/365-O-que-e%CC%81-tecnologia_.jpg"
        alt="Imagem do Site"
        style={{ width: "500px", height: "300px" }}
      ></img>
      <p>Conteúdo do Site</p>
    </div>
  );
}
