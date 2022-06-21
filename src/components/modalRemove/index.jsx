
import { Background, Container } from "./styles"

function ModalRemove({setModalRemove}){


  function fecharModal(){
    setModalRemove(false)
  }

  return(
    <Background>
      <Container>
        <div>
          <h2>{'Deseja excluir a tecnologia?'}</h2>
          <button className="btnFecharModal" onClick={ fecharModal }>X</button>
        </div>
        <div className="containerBtns">
          <button className="btnRemoved">Sim</button>
          <button className="btnRemoved" onClick={ fecharModal }>Não</button>
        </div>
      </Container>
    </Background>
  )
}

export default ModalRemove