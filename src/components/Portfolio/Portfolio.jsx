import React from "react";
import "./Portfolio.css";
import Dados from "./Portfolio.json"
function Portfolio(){
  return(
    <div className="mainContentPortfolio">
    <h1>Portfolio</h1>
    <div className="galeria">

      <div className="item-galeria">
           <h2>{Dados.titulo[0]}</h2>
           <p>{Dados.resumo[0]}</p>
           <button>Acessar Demo</button>
      </div>

      <div className="item-galeria">
           <h2>{Dados.titulo[1]}</h2>
           <p>{Dados.resumo[1]}</p>
           <button>Acessar Demo</button>
      </div>

      <div className="item-galeria">
           <h2>{Dados.titulo[2]}</h2>
           <p>{Dados.resumo[2]}</p>
           <button>Acessar Demo</button>
      </div>

      </div>
      </div>
      )
}
export default Portfolio;
