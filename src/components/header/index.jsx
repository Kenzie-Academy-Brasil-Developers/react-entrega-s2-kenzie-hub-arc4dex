import { ButtonLogin, Container } from "./styles";
import Logo from "../../img/Logo.svg"

function Header({children, width, functionBtn}){

  return(
    <Container>
      <img src={Logo} alt="Logo Kenzie Hub" />
      <ButtonLogin onClick = { functionBtn }>
        {children}
      </ButtonLogin>
    </Container>
  )
}

export default Header