import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css';
import Home from '../src/components/routes/Home';
import PortfolioPage from '../src/components/routes/PortfolioPage';
import Contato from '../src/components/routes/ContatoPage';
import api from './api';
function App() {
  
const [projetos, setProjetos] = React.useState([]);

const fetchDados = async () => {
  try {
    const projetos = await api.get('/projetos');
    setProjetos(projetos.data);
  } catch(error) {
    console.error('Erro ao buscar dados', error)
  }
};

React.useEffect(() => {
  fetchDados();
}, []);

return(
<>
<BrowserRouter>
<Routes>
           <Route index element = {<Home/>} />
           <Route path="portfolio" element={<PortfolioPage projetos={projetos}/>} />
           <Route path="contato" element={<Contato/>} />
</Routes>
</BrowserRouter>
</>

)
}

export default App;
