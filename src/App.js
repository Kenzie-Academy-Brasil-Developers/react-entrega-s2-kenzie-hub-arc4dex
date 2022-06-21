import './App.css';
import GlobalStyle from './styles/global'
import Routes from './routes'
import { useState } from 'react';

function App() {

  const [ bancoDados, setBancoDados ] = useState()
  
  return (
    <>
    <GlobalStyle/>
      <Routes bancoDados = { bancoDados } setBancoDados = { setBancoDados }/>
    </>
  );
}

export default App;
