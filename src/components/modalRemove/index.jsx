import Api from "../../services/api";
import { Background, Container } from "./styles";

import { toast } from "react-toastify"

function modalRemove({setModalRemove, valorId, loadTechs, setTechsUser, techs}){

  const token = JSON.parse(localStorage.getItem('@kenzieHub:token'))

  function fecharModal(){
    setModalRemove(false)
  }

  function deletarTech(){
    Api
    .delete(`users/techs/${valorId}`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    .then((_) => {
      loadTechs(setTechsUser)
      setTimeout(() => {
      toast.success('Tecnologia deletada com sucesso')
      }, 1500);
    })
    .catch((err) => {
      console.log(err)
      toast.error('Erro ao deletar tecnologia')
    })
    .finally((_) => {
      setModalRemove(false)
    })
  }

 return(
  <Background>
    <Container>
    <div>
      <h2>Deseja excluir a tecnologia?</h2>
      <button className="btnFecharModal" onClick={fecharModal}>X</button>
    </div>
    <div className="containerBtns">
      <button className="btnExcluir" onClick={deletarTech}>Sim</button>
      <button className="btnExcluir" onClick={fecharModal}>Não</button>
    </div>
    </Container>
  </Background>
 )
}

export default modalRemove