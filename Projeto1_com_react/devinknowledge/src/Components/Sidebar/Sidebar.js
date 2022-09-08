export default function Sidebar() {
  return (
    <div>
      <div id="div-formulario">
        <header id="header">
          {/* <img
            id="logo-formulario"
            src="./images/logo.png"
            alt="Logo DEVinKnowledge"
          /> */}
          <div id="inicio-formulario">
            <h1 id="titulo-formulario">DEVinKnowledge</h1>
            <p id="subtitulo-formulario">Learn, Code and Save</p>
          </div>
        </header>

        {/* </br> */}

        <form id="formulario">
          <div class="campo">
            <label for="titulo">Título</label>
            {/* </br> */}
            <input
              type="text"
              name="titulo"
              id="titulo"
              minlength="8"
              maxlength="64"
              placeholder=" Digite um título"
              required
            />
          </div>

          <div class="campo">
            <label for="linguagem">Linguagem/Skill</label>
            {/* </br> */}
            <input
              type="text"
              name="linguagem"
              id="linguagem"
              minlength="4"
              maxlength="16"
              placeholder=" Digite uma linguagem ou skill"
              required
            />
          </div>

          <div class="campo">
            <label for="categoria">Categoria</label>
            {/* </br> */}
            <select name="categoria" id="categoria" required>
              <option value="" disabled selected hidden>
                Selecione uma categoria
              </option>
              <option value="FrontEnd">FrontEnd</option>
              <option value="BackEnd">BackEnd</option>
              <option value="FullStack">FullStack</option>
              <option value="SoftSkill/Comportamental">
                SoftSkill/Comportamental
              </option>
              required
            </select>
          </div>

          <div class="campo">
            <label for="descricao">Descrição</label>
            {/* </br> */}
            <textarea
              name="descricao"
              id="descricao"
              cols="36"
              rows="10"
              minlength="32"
              maxlength="512"
              placeholder=" Escreva aqui o detalhamento da sua dica"
              required
            ></textarea>
          </div>

          <div class="campo">
            <label for="video">Vídeo do Youtube</label>
            {/* </br> */}
            <input
              type="url"
              name="link-video"
              id="link-video"
              placeholder=" https://suaurl.com"
            />
          </div>
          <div id="botoes-formulario">
            <button id="botao-limpar" class="botao-formulario" type="reset">
              Limpar
            </button>
            <button type="submit" id="botao-salvar" class="botao-formulario">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
