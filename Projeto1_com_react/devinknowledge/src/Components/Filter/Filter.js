export default function Filter() {
  return (
      <div id="barra-pesquisa">
        <input
          id="input-pesquisa"
          type="search"
          name="search"
          placeholder=" Digite um título para buscar"
        />
        <div id="pesquisar">
          <button id="botao-pesquisar">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div id="limpar-pesquisa">
          <button id="botao-limpar-pesquisa">
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
      </div>
  );
};
