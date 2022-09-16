// Construa uma arquitetura de uma página web simples, com os componentes header,
// uma área para o conteúdo do site e um footer onde receberá os dados de contato da empresa.

export default function Header() {
  return (
    <>
      <header
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#F2F2F2",
        }}
      >
        <img
          src="https://devinhouse.tech/wp-content/uploads/sites/2/2021/12/logo-dev-in-01.png"
          alt="Logo"
          style={{ width: "180px", height: "60px" }}
        />
        <h1 style={{ marginLeft: "10px" }}>Título da Página</h1>
      </header>
    </>
  );
}
