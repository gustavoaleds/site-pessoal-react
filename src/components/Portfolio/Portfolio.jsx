import React from "react";
import "./Portfolio.css";
import Dados from "./Portfolio.json"

function Portfolio(){
  return(

    <div className="mainContentPortfolio">
    <h1>Portfolio</h1>
    <div className="galeria">

      {Dados.itemDaGaleria.map((item, index) => (
        <div key={index} className="item-galeria">
          <h2>{item.titulo}</h2>
          <p>{item.resumo}</p>
          <button><a href={item.link}>Acessar Demo</a></button>
        </div>))}
        </div>
        </div>
      )}
export default Portfolio;
