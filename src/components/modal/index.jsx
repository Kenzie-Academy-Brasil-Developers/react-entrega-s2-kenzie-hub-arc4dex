import { Background, Container } from "./styles"
import InputForm from '../input'
import Button from "../button"

function Modal({titulo, tecnologia, placeholderTech, nivel}){

  return(
    <Background>
      <Container>
        <div>
          <h2>{titulo}</h2>
          <button className="btnFecharModal">X</button>
        </div>
        <form>
          <label>{tecnologia}</label>
          <InputForm placeholder = { placeholderTech }/>

          <label>{nivel}</label>
          <select>
            <option value='iniciante'>Iniciante</option>
            <option value='intermediario'>Intermediário</option>
            <option value='avançado'>Avançado</option>
          </select>

          <Button color='true'>Cadastrar</Button>
        </form>
      </Container>
    </Background>
  )
}

export default Modal