import React from 'react';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import './App.css';
import Home from '../src/components/routes/Home';
import PortfolioPage from '../src/components/routes/PortfolioPage';
import Contato from '../src/components/routes/ContatoPage';
import Menu from './components/Menu/Menu';
function App() {
return(
<>
<BrowserRouter>
<Routes>
           <Route index element = {<Home/>} />
           <Route path="portfolio" element={<PortfolioPage/>} />
           <Route path="contato" element={<Contato/>} />
</Routes>
</BrowserRouter>
</>

)
}

export default App;
