// Adicione uma seção antes do footer que contenha o formulário do site.

// Para o formulário considere os campos:

// - Nome
// - E-mail
// - Mensagem

// Para todos os campos, adicione uma mensagem de "obrigatório" quando for feito o submit sem que eles estejam preenchidos 
// corretamente. E coloque um mínimo de 20 caracteres para o campo "mensagem".

import { useState } from "react";

export default function FormularioBootstrap() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  function updateForm(key, value) {
    let newData = { ...form };
    newData[key] = value;
    setForm(newData);
  }

  function enviar(e) {
    e.preventDefault();
    if (!validate()) return;
    alert("Dados enviados com sucesso!");
    console.log(form);
  }

  const [status, setStatus] = useState({
    type: "",
    mensagem: "",
  });

  function validate() {
    if (!form.nome)
      return setStatus({ type: "error", mensagem: "Necessário preencher o campo nome!" });
    if (!form.email)
      return setStatus({
        type: "error",
        mensagem: "Necessário preencher o campo e-mail!",
      });
    if (!form.mensagem)
      return setStatus({ type: "error", mensagem: "Necessário preencher o campo mensagem!" });
    return true;
  }

  return (
    <div class="container">
      <div class="col-md-12">
        <form onSubmit={enviar}>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputName">Nome</label>
              <input
                type="text"
                class="form-control"
                value={form.nome}
                onChange={(e) => updateForm("nome", e.target.value)}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputEmail">E-mail</label>
              <input
                type="email"
                class="form-control"
                value={form.email}
                onChange={(e) => updateForm("email", e.target.value)}
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputMessage">Mensagem</label>
            <textarea
              class="form-control"
              rows="3"
              minlength="20"
              value={form.mensagem}
              onChange={(e) => updateForm("mensagem", e.target.value)}
            ></textarea>
          </div>

          {status.type === "error" ? (
            <p style={{ color: "#ff0000" }}>{status.mensagem}</p>
          ) : (
            ""
          )}

          <button type="submit" class="btn btn-primary">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
