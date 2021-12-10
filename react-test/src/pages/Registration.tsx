import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import classes from "../styles/registration.module.css";

const Registration: React.FC = () => {
  return (
    <div className={classes.container}>
      <Sidebar/>
      <div className={classes.registration}>
        <h3>Registration</h3>
        <div className={classes.containerRegistration}>
          <div>
            <div className={classes.inputRegistration}>
              <input type="text" name="" id="" placeholder="Name"/>
            </div>
            <div className={classes.inputRegistration}>
              <input type="email" name="" id="" placeholder="Email" />
            </div>
            <div className={classes.inputRegistration}>
              <input type="password" name="" id="" placeholder="Password"/>
            </div>
          </div>
          <div className={classes.buttonRegistration}>
            <h3>Register</h3>
            <img src="" alt="" />
          </div>
        </div>
        <div>
          <Link to="/">
            <img src="" alt="" />
            <h3>Back</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;