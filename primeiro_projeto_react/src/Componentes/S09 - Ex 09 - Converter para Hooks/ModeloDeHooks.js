// Converta um "Class Based Component" para o "modelo de hooks",, utilizando useState e useEffect.

import { useState, useEffect, useRef } from "react";

export default function ModeloDeHooks() {
  const [date, setDate] = useState();

  const timerID = useRef();

  useEffect(() => {
    timerID.current = setInterval(() => {
      setDate(new Date().toLocaleDateString());
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date}.</h2>
    </div>
  );
}
