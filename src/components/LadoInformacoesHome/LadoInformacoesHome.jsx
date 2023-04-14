import React from "react";
import "./LadoInformacoesHome.css"
function LadoinformacoesHome(props){
  return(
    <div className="mainContent">
    <h1 className="mainTitle">Gustavo Alexandre</h1>
    <p className="subTitle">Software Developer</p>
    <p className="textContent">Sou um desenvolvedor de software em formação. Tenho paixão pelo front-end e sempre em busca de desafios e novas coisas para aprender. </p>
    <a href="https://drive.google.com/file/d/1S5Uw3cXPfB2Iq02U9gKRuWPodFmjs0Hr/view?usp=share_link" download><button className="mainButton">Download CV</button></a>
    <section className="mainContacts">
      <p>{props.email}</p>
      <p>{props.telefone}</p>
    </section>
    </div>

  )
}
export default LadoinformacoesHome;
