import Button from "../button"
import { FormCadastro } from "../form/styles"
import InputForm from "../input"
import { Container, ContainerImg } from "./styles"

import Logo from "../../img/Logo.svg"

function FormLogin(){

  return(
    <>
    <ContainerImg>
      <img src={Logo} alt="Logo Kenzie Hub" />
    </ContainerImg>
    <Container>
      <h1>Login</h1>
      <FormCadastro>
        <label>Email</label>
        <InputForm placeholder={'Digite seu email'}/>

        <label>Senha</label>
        <InputForm placeholder={'Digite sua senha'}/>

        <Button>Entrar</Button>
      </FormCadastro>
      <p>Ainda não possui uma conta?</p>
      <Button>Cadastre-se</Button>
    </Container>
    </>
  )
}

export default FormLogin