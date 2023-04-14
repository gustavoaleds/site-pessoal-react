import React from 'react';
import Menu from '../Menu/Menu';
import Formulario from '../Formulario/Formulario';
import Contato from '../Contato/Contato';

function ContatoPage() {
return(
<div>
    <Menu/>
    <Contato email="gualeds@gmail.com" telefone="+55 81 99851-5887" linkedin="/Gualeds"/>
    <Formulario/>
  </div>
)
}

export default ContatoPage;
