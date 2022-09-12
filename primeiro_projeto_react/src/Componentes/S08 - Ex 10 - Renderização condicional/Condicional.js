//Crie o seu próprio componente contendo props e renderização condicional.
//Seja Criativo e procure utilizar tudo o que foi aprendido até o momento!

import { useState } from "react";

export default function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
  }

  function limparEmail() {
    setUserEmail("");
  }

  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" onClick={enviarEmail}>
          Enviar email
        </button>
        {/* Condicional para checar se o email do usuário é true e renderizar na tela */}
        {userEmail && (
          <div>
            <p>O email do usuário é: {userEmail}</p>
            <button onClick={limparEmail}>Limpar email</button>
          </div>
        )}
      </form>
    </div>
  );
}
