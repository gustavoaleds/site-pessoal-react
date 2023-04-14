import React from "react";
import "./Formulario.css";

function Formulario() {
  return (
    <div className="formSide">
      <h1>Envie-me uma mensagem</h1>
      <form>
        <input className="nome" type="name" placeholder="Nome"/>
        <input className="email" type="email" placeholder="E-mail"/>
        <input className="mensagem"type="text" placeholder="Mensagem"/>
        <input className="botaoEnviar" type="submit"/>
      </form>
    </div>
  )}


export default Formulario;
