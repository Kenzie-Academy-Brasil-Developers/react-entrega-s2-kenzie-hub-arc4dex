import { Route, Switch, useHistory } from "react-router-dom";

import PageLogin from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import { useState } from "react";
import { useEffect } from "react";


function Routes(){

  const history = useHistory()

  const [ authenticated, setAuthenticated ] = useState(false)

  const [ status, setStatus ] = useState({status: 0})

  const token = JSON.parse(localStorage.getItem('@kenzieHub:token'))

  useEffect(() => {
   
    if(token){
      setAuthenticated(true)
      history.push('/')
    }

  }, [authenticated])



  return(
    <Switch>
      <Route exact path='/register'>
        <Register/>
      </Route>
      <Route exact path='/'>
        <Home authenticated = {authenticated} setAuthenticated = {authenticated} status = {status} setStatus = {setStatus} />
      </Route>
      <Route>
        <PageLogin setStatus = { setStatus } authenticated = { authenticated } setAuthenticated = { setAuthenticated } exact path='/login'/>
      </Route>
    </Switch>
  )
}

export default Routes;