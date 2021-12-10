import React from "react";
import rigthArrow from "../assets/right-arrow.svg";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import classes from "../styles/login.module.css";

const Login: React.FC = () => {
  return (
    <div className={classes.container}>
      <Sidebar/>
      <div className={classes.login}>
        <h3>Authentication</h3>
        <div className={classes.containerLogin}>
          <div >
            <div className={classes.inputLogin}>
              <input type="email" name="" id="" placeholder="Email" />
            </div>
            <div className={classes.inputLogin}>
              <input type="password" name="" id="" placeholder="Password"/>
            </div>
          </div>
          <Link to="/reset-password">
            <p className={classes.questionLogin}>I forget my password</p>
          </Link>
          <div className={classes.buttonLogin}>
            <h3>Log In</h3>

          </div>
        </div>
        <div className={classes.signUp}>
          <Link to="/register">
            <h3>Sign Up</h3>
            <img src={rigthArrow} alt="right-arrow" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;