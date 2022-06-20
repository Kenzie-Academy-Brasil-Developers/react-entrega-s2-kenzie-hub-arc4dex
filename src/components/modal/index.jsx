import { Background, Container } from "./styles"
import InputForm from '../input'
import Button from "../button"

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import Api from "../../services/api";
import { useState } from "react";

function Modal({titulo, tecnologia, placeholderTech, nivel, children, techsUser, setTechsUser, onSubmitFunction, modal, setModal, setEditedTechModal, valorInputs}){

  console.log(valorInputs)

  const formSchema = yup.object().shape({
    title: yup
      .string()
      .required('Tecnolgia Obrigatória'),
    status: yup
      .string()
      .required('Status obrigatório'),
  })

  const { 
    register, 
    handleSubmit,
    formState: { errors }, 
  } = useForm({
    resolver: yupResolver(formSchema)
  })

  function closeModal(){
    if(modal){
      setModal(false)
    } else {
      setEditedTechModal(false)
    }
  }

  return(
    <Background>
      <Container>
        <div>
          <h2>{titulo}</h2>
          <button className="btnFecharModal" onClick={closeModal}>X</button>
        </div>
        <form onSubmit={ handleSubmit(onSubmitFunction) }>
          <label>{tecnologia}</label>
          <span>{errors.title && errors.title.message}</span>
          <InputForm placeholder={valorInputs === undefined ? placeholderTech : valorInputs.title} register={register('title')}/>

          <label>{nivel}</label>
          <span>{errors.status && errors.status.message}</span>
          <select value={valorInputs === undefined ? 'Iniciante' : valorInputs.status} {...register('status')}>
            <option value='Iniciante'>Iniciante</option>
            <option value='Intermediario'>Intermediário</option>
            <option value='Avançado'>Avançado</option>
          </select>

          <Button color='true' type='submit'>{children}</Button>
        </form>
      </Container>
    </Background>
  )
}

export default Modal