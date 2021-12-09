import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
import NewBet from "./pages/NewBet";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

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
          <Route path="/home" exact component={Home} />
          <Route path="/new-bet" exact component={NewBet} />
      </Footer>
    </Switch>
    </Router>
    

  )
}


export default Routes;