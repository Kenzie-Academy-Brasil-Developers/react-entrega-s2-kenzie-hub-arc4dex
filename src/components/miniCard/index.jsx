import { Container } from "./styles"
import Trash from '../../img/trash.svg'

function MiniCard(){

  return(
    <>
      <Container>
        <h2>React Js</h2>
        <div>
        <h3>Intermediario</h3>
        <img src={Trash} alt="Lixeira" />
        </div>
      </Container>
    </>
  )
}

export default MiniCard