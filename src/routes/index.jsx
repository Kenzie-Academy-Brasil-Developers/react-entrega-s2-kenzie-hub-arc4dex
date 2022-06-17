import { Route, Switch } from "react-router";


import PageLogin from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";


function Routes(){

  return(
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/register'>
        <Register/>
      </Route>
      <Route>
        <PageLogin exact path='/login'/>
      </Route>
    </Switch>
  )
}

export default Routes;