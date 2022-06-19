import './App.css';
import GlobalStyle from './styles/global'
import Routes from './routes'
import Modal from './components/modal'
import { useState } from 'react';

function App() {

  const [ bancoDados, setBancoDados ] = useState()
  
  return (
    <>
{/*      <Modal titulo='Cadastrar Tecnologia' tecnologia='Nome' placeholderTech = 'Digite a tecnologia' nivel='Selecionar status' />
 */}      <GlobalStyle/>
      <Routes bancoDados = { bancoDados } setBancoDados = { setBancoDados }/>
    </>
  );
}

export default App;
