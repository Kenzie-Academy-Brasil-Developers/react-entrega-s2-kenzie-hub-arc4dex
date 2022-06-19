import { Input } from './styles'

function InputForm({placeholder, type, register}){

  return(
    <Input placeholder={placeholder} type={type} {...register}/>
  )
}

export default InputForm