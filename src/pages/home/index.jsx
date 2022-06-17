
import Header from '../../components/header'
import MiniCard from '../../components/miniCard'
import { Container } from './styles'

function Home(){

  return(
    <>
   
     <Header children='Sair'/>
      <Container>
        <MiniCard/>
      </Container>
    </>
  )
}

export default Home