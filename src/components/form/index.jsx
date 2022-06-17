import { Container, CustomMenuItem, CustomSelect } from './styles'
import  InputForm from '../input'
import { FormCadastro } from './styles'

import './style.css';

import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Button from '../button';
import Header from '../header';


function Form(){

  return(
    <>
    <Header children='Login'/>
    <Container>
      <div>
        <h1>Crie sua Conta</h1>
        <h3>Rápido e grátis, vamos nessa</h3>
      </div>
      <FormCadastro>

        <label>Nome</label>
        <InputForm placeholder={'Digite aqui seu nome'}/>

        <label>Email</label>
        <InputForm placeholder={'Digite aqui seu email'}/>

        <label>Senha</label>
        <InputForm placeholder={'Digite aqui sua senha'}/>

        <label>Confirmar a senha</label>
        <InputForm placeholder={'Digite novamente sua senha'}/>

        <label>Bio</label>
        <InputForm placeholder={'Fale sobre você'}/>

        <label>Contato</label>
        <InputForm placeholder={'Opção de contato'}/>

        <label>Selecionar módulo</label>
       
        <Button color='true'>Cadastrar</Button>
      </FormCadastro>
    </Container>
    </>
  )
}

export default Form