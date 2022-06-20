import { Container } from "./styles"
import Trash from '../../img/trash.svg'
import { useState } from "react"
import Modal from "../modal"

function MiniCard({techs}){

  const [editedTechModal, setEditedTechModal] = useState(false)

  function openModal(){
    setEditedTechModal(true)
  }
  
  return(
    <>
        {techs.map((tech) => {
          return <Container>
            {editedTechModal && <Modal titulo={'Tecnologia Detalhes'} tecnologia = {'Nome do projeto'} nivel={'Status'} children = {'Salvar Alterações'} setEditedTechModal={setEditedTechModal}/>}

            <li key={tech.id} onClick={openModal}>
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