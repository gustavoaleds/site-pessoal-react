import React from 'react';
import logoAleds from "./logoAleds.png";
import "./Menu.css";
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="divMenu">
      <nav>
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contato">Contato</Link></li>
          </ul>
      </nav>
      <img className="logo" src={logoAleds} alt="Imagem da logo do site Aleds" />
    </div>
  );
}
export default Menu;
