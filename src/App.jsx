import React from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import LadoinformacoesHome from './components/LadoInformacoesHome/LadoInformacoesHome';
import Portfolio from './components/Portfolio/Portfolio';
import DevCounter from './components/DevCounter/DevCounter';
import Formulario from './components/Formulario/Formulario';
import Contato from './components/Contato/Contato'

function App() {

  return(
    <div>
    <Menu/>
<Portfolio/>
<DevCounter/>
    </div>
  )

}

export default App;
