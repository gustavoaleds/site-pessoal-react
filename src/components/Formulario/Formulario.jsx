import React from "react";
import "./Formulario.css";
function Formulario() {


const enviarMensagem = () => {
  console.log('A função foi chamada!')


const nome = document.querySelector('.nome').value;
const email = document.querySelector('.email').value;
const mensagem = document.querySelector('.mensagem').value;
const texto = `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`;
const textoCodificado = encodeURIComponent(texto);
const numeroWhatsApp = '5581998515887';
const url = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

window.open(url, '_blank');
};

const handleSubmit = (event) => {
  event.preventDefault();
  enviarMensagem();
};

  return (
    <div className="formSide">
      <h1>Envie-me uma mensagem</h1>
      <form onSubmit={handleSubmit}>
        <input required className="nome" type="name" placeholder="Nome"/>
        <input required className="email" type="email" placeholder="E-mail"/>
        <input required className="mensagem"type="text" placeholder="Mensagem"/>
        <button className="botaoEnviar" type="submit">Enviar</button>
      </form>
      </div>
    )
    }


export default Formulario;
