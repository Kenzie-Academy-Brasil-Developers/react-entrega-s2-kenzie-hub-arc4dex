
import { Container, ContainerImg } from "./styles";

import Logo from "../../img/Logo.svg";

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import Button from "../../components/button";
import { FormCadastro } from "../../components/form/styles";
import InputForm from "../../components/input";
import { ButtonLogin } from "../../components/header/styles";
import { useHistory } from "react-router-dom";

function PageLogin(){

  const history = useHistory()

  function handlePage(){
    return history.push('/register')
  }

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required('Email obrigatório'),
    password: yup
      .string()
      .required('Password obrigatório')
  })

  const { 
    register, 
    handleSubmit,
    formState: { errors }, 
  } = useForm({
    resolver: yupResolver(formSchema)
  })

  const onSubmitFunction = (data) => {

    console.log(data)

  }

  return(
    <>
      <ContainerImg>
      <img src={Logo} alt="Logo Kenzie Hub" />
      </ContainerImg>
      <Container>
      <h1>Login</h1>
        <FormCadastro onSubmit={ handleSubmit(onSubmitFunction) }>
        <label>Email</label>
          <InputForm placeholder={'Digite seu email'} register={register('email')}/>
          <span>{errors.email && errors.email.message} </span>

          <label>Senha</label>
          <InputForm placeholder={'Digite sua senha'} register={register('password')} type='password'/>

          <Button type='submit' color='true'>Entrar</Button>

          <p>Ainda não possui uma conta?</p>

          <Button color='true' onClick={handlePage}>Cadastre-se</Button>
          
        </FormCadastro>
      </Container>
    </>
  )
}

export default PageLogin