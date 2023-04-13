import React from "react";
import logoAleds from "./logoAleds.png";
import "./Menu.css";
function Menu() {
  return (
    <div className="divMenu">
      <nav>
          <ul>
              <li>Home</li>
              <li>Portfolio</li>
              <li>Contato</li>
          </ul>
      </nav>
      <img className="logo" src={logoAleds} alt="Imagem da logo do site Aleds" />
    </div>
  );
}
export default Menu;
