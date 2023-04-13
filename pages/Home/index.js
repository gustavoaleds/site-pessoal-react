import { BrowserRouter as  Router, Routes, Route } from "react-router-dom"
import Home from 'pages/Home';

import Menu from "../../src/components/Menu/Menu";
import LadoInformacoesHome from "../../src/components/LadoInformacoesHome/LadoInformacoesHome"

function Home(){
  return(
    <div>
    <Menu/>
    <LadoInformacoesHome/>
    </div>

  )
}

export default Home;
