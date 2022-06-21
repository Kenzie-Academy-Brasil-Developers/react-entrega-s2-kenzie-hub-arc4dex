import { Route, Switch, useHistory } from "react-router-dom";

import PageLogin from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import { useState } from "react";
import { useEffect } from "react";
import Api from "../services/api";


function Routes(){

  const history = useHistory()

  const [ authenticated, setAuthenticated ] = useState(false)
 
  const token = JSON.parse(localStorage.getItem('@kenzieHub:token'))
  const idUser = JSON.parse(localStorage.getItem('@kenzieHub:id'))

  useEffect(() => {
   
    if(token){
      setAuthenticated(true)
      history.push('/dashboard')
    }
  }, [authenticated, history, token])

  function loadTechs(functionLoad){
    Api
    .get(`/users/${idUser}`)
    .then((response) => {
      functionLoad(response.data.techs)  
    })
  }

  return(
    <Switch>
      <Route exact path='/'>
        <Register/>
      </Route>
      <Route path='/dashboard'>
        <Home loadTechs = { loadTechs } authenticated = {authenticated} setAuthenticated = {authenticated} />
      </Route>
      <Route path='/login'>
        <PageLogin authenticated = { authenticated } setAuthenticated = { setAuthenticated }/>
      </Route>
    </Switch>
  )
}

export default Routes;