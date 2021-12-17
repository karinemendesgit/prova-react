import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import Sidebar from "../components/Sidebar";
import classes from "../styles/login.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { authActions } from "../store/auth";

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const dispatch = useDispatch();

  const loginHandler = (event:any) => {
    event.preventDefault();
    dispatch(authActions.login());
  }
  return (
    <div className={classes.container}>
      <Sidebar/>
      <div className={classes.login}>
        <h3>Authentication</h3>
        <div className={classes.containerLogin}>
          <form onSubmit={loginHandler}>
            <div className={classes.inputLogin}>
              <input type="email" name="" id="" placeholder="Email" ref={emailRef} required/>
            </div>
            <div className={classes.inputLogin}>
              <input 
              type="password" 
              placeholder="Password"
              //value={} 
              ref={passwordRef} 
              required/>
            </div>
          </form>
          <Link to="/reset-password">
            <p className={classes.questionLogin}>I forget my password</p>
          </Link>
          <div className={classes.buttonLogin}>
            <h3>Log In</h3>
            <FontAwesomeIcon icon={faArrowRight}/>
          </div>
        </div>
        <div>
          <Link to="/register" className={classes.signUp}>
            <h3>Sign Up</h3>
            <FontAwesomeIcon icon={faArrowRight}/>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;