import React from "react"
import "./Contato.css";
import phoneIcon from "./icons/phone_icon.svg";
import emailIcon from "./icons/email_icon.svg";
import workIcon from "./icons/work_icon.svg";

function Contato(){
return(
  <div className="mainContentContact">
  <h1 className="contactTitle">Contato</h1>
  <p className="textContentContact">Gostou do meu trabalho? Você pode falar comigo pelos meios de comunicação abaixo ou pelo campo ao lado. </p>
  <div className="contactCard">
    <section className="contactForm">
    <img className="contactIcon" src={phoneIcon} alt="Icone de telefone"/>
    <section className="formTitles">
      <h3 className="contactFormTitle">Telefone</h3>
      <p className="contentContactForm">+55 81 99851-5887</p>
    </section>
    </section>
    <section className="contactForm">
    <img className="contactIcon" src={emailIcon} alt="Icone de telefone"/>
    <section className="formTitles">
      <h3 className="contactFormTitle">Email</h3>
      <p className="contentContactForm">gualeds@gmail.com</p>
    </section>
    </section>
    <section className="contactForm">
    <img className="contactIcon" src={workIcon} alt="Icone de telefone"/>
    <section className="formTitles">
      <h3 className="contactFormTitle">Linkedin</h3>
      <p className="contentContactForm">/Gualeds</p>
    </section>
    </section>
  </div>
  </div>
)
}
export default Contato;
