import { Container } from "./styles"
import Trash from '../../img/trash.svg'

function MiniCard({techs}){
  
  return(
    <>
        {techs.map((tech) => {
          return <Container>
            <li key={tech.id}>
              <h2>{tech.title}</h2>
              <div>
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