import { ButtonLogin, Container } from "./styles";
import Logo from "../../img/Logo.svg"

function Header({children, width}){

  return(
    <Container>
      <img src={Logo} alt="Logo Kenzie Hub" />
      <ButtonLogin>{children}</ButtonLogin>
    </Container>
  )
}

export default Header