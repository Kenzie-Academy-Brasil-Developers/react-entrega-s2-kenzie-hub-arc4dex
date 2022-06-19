import InputForm from '../input';
import { Container, FormCadastro } from './styles';

import './style.css';

import Button from '../button';
import Header from '../header';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { useState } from 'react';

function Form({ bancoDados ,setBancoDados }){

  const [ valorSelect, setValorSelect ] = useState()

  
  const formSchema = yup.object().shape({
    password: yup
      .string()
      .required('Nome Obrigatório'),
    confirmedPassword: yup
      .string()
      .required('Confirmação de senha obrigatória'),
    email: yup
      .string().email()
      .required('Email obrigatório'),
    course_module: yup
      .string()
      .required('Módulo obrigatório'),
    bio: yup
      .string()
      .required('Bio obrigatória'),
    contact: yup
      .string().url()
      .required('Link do contato obrigatório'),
  })

  const { 
    register, 
    handleSubmit,
    formState: { errors }, 
  } = useForm({
    resolver: yupResolver(formSchema)
  })

  const onSubmitFunction = (data) => {
    setBancoDados(data)
    console.log(bancoDados)
  }

  const handleSelect = (event) => { 
    setValorSelect(event.target.value)
  }
  
  console.log(valorSelect)

  return(
    <>
    <Header children='Login' props={'login'}/>
    <Container>
      <div>
        <h1>Crie sua Conta</h1>
        <h3>Rápido e grátis, vamos nessa</h3>
      </div>
      <FormCadastro onSubmit={ handleSubmit(onSubmitFunction)}>

        <label>Nome</label>
        <InputForm placeholder={'Digite aqui seu nome'} register={register('name')}/>
        <span>{errors.name && errors.name.message}</span>

        <label>Email</label>
        <InputForm placeholder={'Digite aqui seu email'} register={register('email')}/>
        <span>{errors.email && errors.email.message}</span>

        <label>Senha</label>
        <InputForm placeholder={'Digite aqui sua senha'} register={register('password')}/>
        <span>{errors.password && errors.password.message}</span>

        <label>Confirmar a senha</label>
        <InputForm placeholder={'Digite novamente sua senha'} register={register('confirmedPassword')}/>
        <span>{errors.confirmedPassword && errors.confirmedPassword.message}</span>

        <label>Bio</label>
        <InputForm placeholder={'Fale sobre você'}register={register('bio')}/>
        <span>{errors.bio && errors.bio.message}</span>
        
        <label>Contato</label>
        <InputForm placeholder={'Opção de contato'} register={register('contact')}/>
        <span>{errors.contact && errors.contact.message}</span>

        <label>Selecionar módulo</label>
        <select register={register('course_module')} onChange={ handleSelect }>
          <option value='Primeiro Módulo (Introdução ao Front End)'>Primeiro Módulo</option>
          <option value='Segundo módulo (Frontend Avançado)'>Segundo Módulo</option>
          <option value='Terceiro módulo (Introdução ao Backend)'>Terceiro Módulo</option>
          <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
        </select> 
        <span>{errors.course_module && errors.course_module.message}</span>

        <Button color='true' type='submit'>Cadastrar</Button>
      </FormCadastro>
    </Container>
    </>
  )
}

export default Form