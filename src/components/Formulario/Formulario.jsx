import React, {useState} from "react";
import "./Formulario.css";
function Formulario() {

const [nome, setNome] = useState("");
const [email, setEmail] = useState("");
const [mensagem, setMensagem] = useState("");

const enviarMensagem = () => {
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
        <input required className="nome" type="name" placeholder="Nome" onChange={(event) => setNome(event.target.value)}/>
        <input required className="email" type="email" placeholder="E-mail" onChange={(event) => setEmail(event.target.value)}/>
        <input required className="mensagem" type="text" placeholder="Mensagem" onChange={(event) => setMensagem(event.target.value)}/>
        <button className="botaoEnviar" type="submit">Enviar</button>
      </form>
      </div>
    )
    }


export default Formulario;
