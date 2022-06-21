
import Header from '../../components/header'
import MiniCard from '../../components/miniCard'
import { Container, ContainerMain } from './styles'
import Api from '../../services/api'
import { useState } from 'react'
import { useEffect } from 'react'
import Modal from '../../components/modal'
import { useHistory, Redirect } from 'react-router-dom'
import { toast } from "react-toastify";


function Home({loadTechs, authenticated}){

  const history = useHistory()

  const token = JSON.parse(localStorage.getItem('@kenzieHub:token'))
  const idUser = JSON.parse(localStorage.getItem('@kenzieHub:id'))

  const [ users, setUsers ] = useState([])
  const [ techsUser, setTechsUser ] = useState([])
  const [ modal, setModal ] = useState(false)

useEffect(() => {
  loadTechs(setTechsUser)

  Api
    .get(`users/${idUser}`)
    .then((res) => {
      setUsers(res.data)
  })
}, [])


const onSubmitFunctionCadastro = (data) => {

  Api
  .post(`users/techs`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then((response) => {
    setTechsUser([...techsUser, response.data])
    toast.success('Tecnologia cadastrada com sucesso')
    setModal(false)
  })
  .catch((err) => {
    toast.error('Erro ao cadastrar a tecnologia')
    console.log(err)
  })
}

function openModal(){
  setModal(true)
}

const handleClearLocalStore = () => {
  localStorage.clear()
  history.push('/login')
}

if(!authenticated) {
  return (
  <Redirect to='/login'/>
  )
}

  return(
    <ContainerMain>
    {modal && <Modal titulo={'Cadastrar Tecnologia'} tecnologia = {'Nome'} placeholderTech = {'Digite uma tecnolgia'} nivel={'Selecionar status'} children = {'Cadastrar Tecnologia'} techsUser = {techsUser} setTechsUser = {setTechsUser} onSubmitFunction={onSubmitFunctionCadastro} modal={modal} setModal={setModal}/>}

     <Header children='Sair' functionBtn={ handleClearLocalStore } width={'big'}/>
     <div className='containerUsuario'>
      <h2 className='bemVindo'>Olá, {users.name}</h2>
      <div className='containerUser'>
        <h3 className='modulo'> {users.course_module}</h3>
        <button className="btnAdd" onClick={openModal}>+</button>
      </div>
     </div>
      <Container>
        <MiniCard techs={techsUser} setTechsUser = {setTechsUser} loadTechs = {loadTechs}/>
      </Container>
    </ContainerMain>
  )
}

export default Home