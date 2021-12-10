import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import classes from "../styles/reset.module.css";

const ResetPassword: React.FC = () => {
  return (
    <div className={classes.container}>
      <Sidebar/>
      <div className={classes.reset}>
        <h3>Reset password</h3>
        <div className={classes.containerReset}>
          <div>
            <div className={classes.inputReset}>
            <input type="email" name="" id="" placeholder="Email" />
            </div>
          </div>
          <div>
            <h3 className={classes.buttonReset}>Send link</h3>
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

export default ResetPassword;