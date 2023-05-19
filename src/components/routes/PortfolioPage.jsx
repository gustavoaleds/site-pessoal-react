import React from 'react';
import Menu from '../Menu/Menu';
import Portfolio from '../Portfolio/Portfolio';
import DevCounter from '../DevCounter/DevCounter';
import api from '../../api';

function PortfolioPage() {
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
    <div>
      <Menu/>
      <Portfolio projetos={projetos} />
      <DevCounter/>
    </div>
  )
}

export default PortfolioPage;
