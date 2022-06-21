import { useState } from "react"
import Trash from '../../img/trash.svg'
import Api from "../../services/api"
import Modal from "../modal"
import ModalRemove from "../modalRemove"
import { Container } from "./styles"

import { toast } from "react-toastify"

function MiniCard( { techs, setTechsUser } ){

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

 
  const onSubmitFunctionAlteracao = ({ title, status }) => {

    const techs = { title, status }
    
    Api
    .put(`users/techs/${valorInputs.valorId}`, techs, {
      headers: {
      Authorization: `Bearer ${token}
      `
      }
    })
    .then((response) => {
      setTechsUser(response.data)
      console.log(response)
      setTimeout(() => {
        toast.success('Tecnologia atualizada')
      }, 1500);
    })
    .catch((err) => {
      toast.error('Tecnologia não atualizada')
      console.log(err)
    })
    .finally(()=>{
      setEditedTechModal(false)
    })
  }

  const onSubmitFunctionRemoved = (techId) =>{
    Api
    .delete(`users/techs/${techId}`, {
      headers: {
      Authorization: `Bearer ${token}
      `
      }
    })
    .then((response) => {
      setModalRemove(false)
      toast.success('Tecnolgia removida')
      console.log(response)
    })
    .catch((err) => {
      toast.error('Tecnologia não removida')
      console.log(err)
    })
  }

  function excluirProduto(){
    setModalRemove(true)
  }

  return(
    <>
        {techs.map((tech, key) => {
          
          return <Container key={key}>

            {editedTechModal && <Modal titulo={'Tecnologia Detalhes'} tecnologia = {'Nome do projeto'} nivel={'Status'} children = {'Salvar Alterações'} setEditedTechModal={setEditedTechModal} valorInputs={valorInputs} onSubmitFunction = { onSubmitFunctionAlteracao }/>}

            {modalRemove && <ModalRemove setModalRemove={ setModalRemove } functionRemoved = {()=> onSubmitFunctionRemoved(tech.id)} />}

            <li onClick={ () => openModal(tech.id, tech.title, tech.status)}>
              <h2>{tech.title}</h2>
              <div className="containerTech">
                 <h3>{tech.status}</h3>
              </div>
            </li>
            <img src={Trash} alt="Lixeira" onClick={excluirProduto}/>
          </Container>
        })} 
    </>
  )
}

export default MiniCard