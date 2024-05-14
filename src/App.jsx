// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';

let contando

function Cronometro() {
  const [milissegundos, setMilissegundos] = useState(0);
  const idDoIntervaloRef = useRef(null);

  const spanMinutos = Math.floor(milissegundos / 6000).toString().padStart(2, '0');
  const spanSegundos = (Math.floor(milissegundos / 100) % 60).toString().padStart(2, '0');
  const spanMilissegundos = (milissegundos % 100).toString().padStart(2, '0');

  const iniciarCronometro = () => {
    if (contando === true) { return; }
    idDoIntervaloRef.current = setInterval(() => {
      setMilissegundos(prevMilissegundos => prevMilissegundos + 1);
    }, 10);
    contando = true
  };

  const pausarCronometro = () => {
    clearInterval(idDoIntervaloRef.current);
    contando = false
  };

  const pararCronometro = () => {
    clearInterval(idDoIntervaloRef.current);
    setMilissegundos(0);
    contando = false
  };

  return (
    <body>
      <div id='conteudo'>
        <h1>
          <span>{spanMinutos}</span>:
          <span>{spanSegundos}</span>:
          <span>{spanMilissegundos}</span>
        </h1>
        <div id="container-botoes">
          <button onClick={iniciarCronometro}>Iniciar</button>
          <button onClick={pausarCronometro}>Pausar</button>
          <button onClick={pararCronometro}>Parar</button>
        </div>
      </div>
    </body>

  );
}

export default Cronometro;