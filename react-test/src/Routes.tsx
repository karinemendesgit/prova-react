import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
import NewBet from "./pages/NewBet";
import Sidebar from "./components/Sidebar";

import { Route, Switch} from "react-router-dom";

function Routes(): JSX.Element {
  return (
    <>
      <Switch>
        <Sidebar>
          <Route path="/" exact component={Login}/>
          <Route path="/register" exact component={Registration}/>
          <Route path="/reset-password" exact component={ResetPassword}/>
        </Sidebar>
          <Route path="/home" exact component={Home} />
          <Route path="/new-bet" exact component={NewBet} />
      </Switch>
    </>
  )
}


export default Routes;