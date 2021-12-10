import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
import NewBet from "./pages/NewBet";

import { Route, Routes } from "react-router-dom";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Registration/>}/>
      <Route path="/reset-password" element={<ResetPassword/>}/>
      <Route path="/home" element={<Home/>} />
      <Route path="/new-bet" element={<NewBet/>} />
    </Routes>
  )
}


export default Routing;