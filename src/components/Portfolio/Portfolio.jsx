import React from "react";
import "./Portfolio.css";

function Portfolio({projetos}) {

  return (
    <div className="mainContentPortfolio">
      <h1>Portfolio</h1>
      <div className="galeria">
        {projetos.map((item, index) => (
          <div key={index} className="item-galeria">
            <h2>{item.nome}</h2>
            <p>{item.descricao}</p>
            <a target="_blank" href={item.link}>
              <button className="buttonName">Acessar Demo</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
