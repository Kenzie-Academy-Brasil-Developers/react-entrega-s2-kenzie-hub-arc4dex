import { Container } from "./styles"
import Trash from '../../img/trash.svg'
import { useEffect, useState } from "react"
import Modal from "../modal"
import Api from "../../services/api"
import ModalRemove from "../modalRemove"

function MiniCard({techs}, setTechsUser ){

  const [editedTechModal, setEditedTechModal] = useState(false)

  const [ valorInputs, setValorInputs ] = useState()

  const [ modalRemove, setModalRemove ] = useState(false)

  function openModal(valorId, title, status){
    setEditedTechModal(true)
    setValorInputs({valorId, title, status})
  }

  const onSubmitFunctionAlteracao = ({ title, status }) => {

    const techs = { title, status }
  
    const token = JSON.parse(localStorage.getItem('@kenzieHub:token'))
  
    Api
    .put(`users/techs/${valorInputs.valorId}`, techs, {
      headers: {
      Authorization: `Bearer ${token}
      `
      }
    })
    .then((response) => {
      setTechsUser(response.data)
      })
    .catch((err) => console.log(err))
    .finally(()=>{
      setEditedTechModal(false)
    })
  }

  useEffect(() => {
    
  }, [techs])

  function excluirProduto(){
    setModalRemove(true)
  }
  
  return(
    <>
        {techs.map((tech, key) => {
          return <Container key={key}>
            {editedTechModal && <Modal titulo={'Tecnologia Detalhes'} tecnologia = {'Nome do projeto'} nivel={'Status'} children = {'Salvar Alterações'} setEditedTechModal={setEditedTechModal} valorInputs={valorInputs} onSubmitFunction = { onSubmitFunctionAlteracao }/>}
            {modalRemove && <ModalRemove setModalRemove={ setModalRemove }/>}
            <li onClick={ () => openModal(tech.id, tech.title, tech.status)}>
              <h2>{tech.title}</h2>
              <div className="containerTech">
                 <h3>{tech.status}</h3>
              </div>
            </li>
            <img src={Trash} alt="Lixeira" onClick={ excluirProduto }/>
          </Container>
        })} 
    </>
  )
}

export default MiniCard