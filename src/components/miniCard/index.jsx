import { useState } from "react"
import Trash from '../../img/trash.svg'
import Api from "../../services/api"
import Modal from "../modal"
import ModalRemove from "../modalRemove"
import { Container } from "./styles"

import { toast } from "react-toastify"


function MiniCard( { techs, setTechsUser, loadTechs } ){

  const [editedTechModal, setEditedTechModal] = useState(false)

  const [ valorInputs, setValorInputs ] = useState()

  const [ valorIdTech, setValorIdTech ] = useState()

  const [ modalRemove, setModalRemove ] = useState(false)

  const token = JSON.parse(localStorage.getItem('@kenzieHub:token'))

  
  function openModal(valorId, title, status){
    setEditedTechModal(true)
    setValorInputs({valorId, title, status})
    setValorIdTech(valorId)
  }

  const onSubmitFunctionAlteracao = (data) => {

    Api
    .put(`users/techs/${valorInputs.valorId}`, data, {
      headers: {
      Authorization: `Bearer ${token}
      `
      }
    })
    .then((_) => {
      loadTechs(setTechsUser)
      setTimeout(() => {
        toast.success('Tecnologia atualizada')
        }, 1500);
    })
    .catch((_) => {
      toast.error('Tecnologia não atualizada')
      
    })
    .finally(()=>{
      setEditedTechModal(false)
    })
  }

  function excluirProduto(techId){
    setModalRemove(true)
    setValorIdTech(techId)
  }
  
  return(
    <>
        {techs.map((tech, key) => {
          
          return <Container key={key}>

            {editedTechModal && <Modal titulo={'Tecnologia Detalhes'} tecnologia = {'Nome do projeto'} nivel={'Status'} children = {'Salvar Alterações'} setEditedTechModal={setEditedTechModal} valorInputs={valorInputs} onSubmitFunction = { onSubmitFunctionAlteracao }/>}

            {modalRemove && <ModalRemove loadTechs = {loadTechs} setTechsUser = {setTechsUser} setModalRemove={ setModalRemove } valorId = { valorIdTech } techs = {techs}/>}

            <li onClick={ () => openModal(tech.id, tech.title, tech.status)}>
              <h2>{tech.title}</h2>
              <div className="containerTech">
                 <h3>{tech.status}</h3>
              </div>
            </li>
            <img src={Trash} alt="Lixeira" onClick={ () => excluirProduto(tech.id)}/>
          </Container>
        })} 
    </>
  )
}

export default MiniCard