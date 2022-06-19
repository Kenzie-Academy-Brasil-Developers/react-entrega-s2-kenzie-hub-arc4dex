import { ButtonLogin, Container } from "./styles";
import Logo from "../../img/Logo.svg"
import { useHistory } from "react-router-dom";

function Header({children, width, props}){

  const history = useHistory()

  console.log(history)

  const handleHistory = () => {
   if(props === 'login'){
    return history.push('/login')
   } 
  }

  return(
    <Container>
      <img src={Logo} alt="Logo Kenzie Hub" />
      <ButtonLogin onClick = {handleHistory}>
        {children}
      </ButtonLogin>
    </Container>
  )
}

export default Header