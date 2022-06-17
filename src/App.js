import './App.css';
import GlobalStyle from './styles/global'
import Routes from './routes'
import Modal from './components/modal'

function App() {
  
  return (
    <>
     <Modal titulo='Cadastrar Tecnologia' tecnologia='Nome' placeholderTech = 'Digite a tecnologia' nivel='Selecionar status' />
      <GlobalStyle/>
      <Routes/>
    </>
  );
}

export default App;
