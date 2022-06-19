import { useState } from "react"
import Form from "../../components/form"

function Register(){

  const [ bancoDados, setBancoDados ] = useState([])

  console.log(bancoDados)

  return (
    <Form bancoDados = {bancoDados} setBancoDados = {setBancoDados}/>
  )
}

export default Register