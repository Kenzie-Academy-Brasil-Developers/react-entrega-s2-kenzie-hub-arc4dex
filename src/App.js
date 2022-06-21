import './App.css';
import GlobalStyle from './styles/global'
import Routes from './routes'
import { useState } from 'react';

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [ bancoDados, setBancoDados ] = useState()
  
  return (
    <>
    <ToastContainer/>
    <GlobalStyle/>
      <Routes bancoDados = { bancoDados } setBancoDados = { setBancoDados }/>
    </>
  );
}

export default App;
