import React from "react";
import logoAleds from "./logoAleds.png";
import "./Menu.css";
function Menu() {
  return (
    <div className="divMenu">
      <nav>
          <ul>
              <li><a>Home</a></li>
              <li><a>Portfolio</a></li>
              <li><a>Contato</a></li>
          </ul>
      </nav>
      <img className="logo" src={logoAleds} alt="Imagem da logo do site Aleds" />
    </div>
  );
}
export default Menu;
