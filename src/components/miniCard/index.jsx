import { Container } from "./styles"
import Trash from '../../img/trash.svg'
import { useState } from "react"
import Modal from "../modal"

function MiniCard({techs}){

  const [editedTechModal, setEditedTechModal] = useState(false)

  const [ valorInputs, setValorInputs ] = useState()

  function openModal(valorId, title, status){
    setEditedTechModal(true)
    setValorInputs({valorId, title, status})
  }

  return(
    <>
        {techs.map((tech, key) => {
          return <Container key={key}>
            {editedTechModal && <Modal titulo={'Tecnologia Detalhes'} tecnologia = {'Nome do projeto'} nivel={'Status'} children = {'Salvar Alterações'} setEditedTechModal={setEditedTechModal} valorInputs={valorInputs}/>}
            <li onClick={ () => openModal(tech.id, tech.title, tech.status)}>
              <h2>{tech.title}</h2>
              <div className="containerTech">
                 <h3>{tech.status}</h3>
                <img src={Trash} alt="Lixeira" />
              </div>
            </li>
          </Container>
        })} 
    </>
  )
}

export default MiniCard