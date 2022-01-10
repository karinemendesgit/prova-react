import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import api from "../services/api";

import Sidebar from "../components/Sidebar";
import classes from "../styles/registration.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Registration: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function registerHandler (data:any) {
    if (nameRef && emailRef && passwordRef) {
      dispatch(authActions.login({email: emailRef, password: passwordRef}));
    }
    
    try {
      const response = await fetch(`${api}/user/create`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json'},
      });
  
      const dados = await response.json();
  
      if (!response.ok) {
        throw new Error (dados);
      }
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className={classes.container}>
      <Sidebar/>
      <div className={classes.registration}>
        <h3>Registration</h3>
        <div className={classes.containerRegistration}>
          <form onSubmit={registerHandler}>
            <div className={classes.inputRegistration}>
              <input type="text" name="" id="" placeholder="Name" ref={nameRef} required/>
            </div>
            <div className={classes.inputRegistration}>
              <input type="email" name="" id="" placeholder="Email" ref={emailRef} required/>
            </div>
            <div className={classes.inputRegistration}>
              <input type="password" name="" id="" placeholder="Password" ref={passwordRef} required/>
            </div>
          </form>
          <div className={classes.buttonRegistration} onClick={registerHandler}>
            <h3>Register</h3>
            <FontAwesomeIcon icon={faArrowRight}/>
          </div>
        </div>
        <div className={classes.backButtonRegistration}>
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft}/>
            <h3>Back</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;