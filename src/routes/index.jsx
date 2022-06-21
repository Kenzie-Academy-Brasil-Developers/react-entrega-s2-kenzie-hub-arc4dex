import { Route, Switch } from "react-router-dom";

import PageLogin from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import { useState } from "react";
import { useEffect } from "react";

function Routes(){

  const [ authenticated, setAuthenticated ] = useState(false)

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('@kenzieHub:token'))

    if(token){
      return setAuthenticated(true)
    }
  }, [authenticated])

  return(
    <Switch>
      <Route exact path='/register'>
        <Register/>
      </Route>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route>
        <PageLogin authenticated = { authenticated } setAuthenticated = { setAuthenticated } exact path='/login'/>
      </Route>
    </Switch>
  )
}

export default Routes;