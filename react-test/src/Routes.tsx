import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ResetPassword from "./pages/ResetPassword";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function Routes(): JSX.Element {
  return (
    <Router>
      <Switch>
      <Footer>
        <Sidebar>
          <Route path="/" exact component={Login}/>
          <Route path="/register" exact component={Registration}/>
          <Route path="/reset-password" exact component={ResetPassword}/>
        </Sidebar>
        
      </Footer>
    </Switch>
    </Router>
    

  )
}


export default Routes;