import React from "react";
import "./DevCounter.css";
import Dados from "./DevCounters.json";
function DevCounter() {
  return (
    <div className="divCounter">
      <h1 className="titleCounter">Dev Counter</h1>
      <section className="contadoresPart">
        <h3 className="counterNumber">{Dados.LinguagensUtilizadas}</h3>
        <p className="typeCounter">Linguagens utilizadas</p>
        <h3 className="counterNumber">{Dados.Projetos}</h3>
        <p className="typeCounter">Projetos Concluídos</p>
        <h3 className="counterNumber">{Dados.ProjetosEmAndamento}</h3>
        <p className="typeCounter">Projetos em andamento</p>
      </section>
      <a href="https://github.com/gustavoaleds?tab=repositories"><h4 className="footerCounter">Veja Mais em meu Github.</h4></a>
    </div>
  )}

export default DevCounter;
