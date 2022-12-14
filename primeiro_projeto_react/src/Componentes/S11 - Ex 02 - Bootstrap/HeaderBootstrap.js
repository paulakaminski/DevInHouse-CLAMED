// Adicione no projeto o bootstrap para estilização dos componentes.

import { HeaderPersonalizado } from "../S11 - Ex 05 - Styled Components/StyledHeader";

export default function HeaderBootstrap() {
  return (
    <header>
      <HeaderPersonalizado>
      {/* <nav class="navbar navbar-light bg-light"> */}
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="https://devinhouse.tech/wp-content/uploads/sites/2/2021/12/logo-dev-in-01.png"
              alt=""
              width="120"
              height="40"
              class="d-inline-block align-text-top"
            />
            Título da Página
          </a>
        </div>
      {/* </nav> */}
      </HeaderPersonalizado>
    </header>
  );
}
