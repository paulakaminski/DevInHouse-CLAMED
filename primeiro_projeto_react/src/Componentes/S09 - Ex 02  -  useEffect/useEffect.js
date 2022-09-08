//Mostrar no console o valor digitado no input por meio do recurso useEffect

import React, { useState, useEffect } from "react";

export default function Console() {
  const [text, setText] = useState("");

  function handleTextChange(e) {
    setText(e.target.value);
  }

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <div>
      <input
        placeholder="Digite um texto"
        value={text}
        onChange={handleTextChange}
      ></input>
    </div>
  );
};
