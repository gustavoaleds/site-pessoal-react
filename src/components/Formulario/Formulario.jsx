import React from "react";
import "./Formulario.css";

function Formulario() {
  return (
    <div className="formSide">
      <h1>Envie-me uma mensagem</h1>
      <form>
        <input type="name" placeholder="Nome"/>
        <input type="email" placeholder="E-mail"/>
        <input type="text" placeholder="Mensagem"/>
        <input type="submit"/>
      </form>
    </div>
  )}

export default Formulario;
