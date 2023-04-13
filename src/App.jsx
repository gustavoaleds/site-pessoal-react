import React from 'react';
import './App.css';
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom"
import Home from 'pages/Home/index.js';
function App() {

  return(
// Rotas
<Router>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
</Router>
  )

}

export default App;
