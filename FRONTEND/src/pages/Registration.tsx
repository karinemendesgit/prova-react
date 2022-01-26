import { FormEvent, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import api from "../services/api";

import Sidebar from "../components/Sidebar";
import classes from "../styles/registration.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from "react-toastify";
import { userValidations } from '../utils/user-validations';

const Registration: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  async function RegisterHandler (e: FormEvent) {
    e.preventDefault();
    const nameVerified = nameRef.current!.value.trim();
    const emailVerified = emailRef.current!.value.trim();
    const passwordVerified = passwordRef.current!.value.trim();

    const token = localStorage.getItem("token");

    const bodyParameters = {
      name: nameVerified,
      email: emailVerified,
      password: passwordVerified,
    }

    const config = {
      headers: { 
        Authorization: `Bearer ${token}`,
      }
    } 

    if (nameVerified.length < 3 || !userValidations (emailVerified, passwordVerified)) {
      dispatch(authActions.createAccount({ name: nameVerified, email: emailVerified, password: passwordVerified }));
    }
    
    if (nameVerified && emailVerified && passwordVerified) {      
      await api.post(`user/create`, bodyParameters, config)
      .then(({ data }) => {
        localStorage.setItem('token', data.token.token);
        dispatch(authActions.createAccount({ name: nameVerified, email: emailVerified, password: passwordVerified }));
        navigate('/');
      })
      .catch((error) => {
        return toast.error(error.response.data.message);
      })
    }        
  }

  return (
    <div className={classes.container}>
      <Sidebar/>
      <div className={classes.registration}>
        <h3>Registration</h3>
        <div className={classes.containerRegistration}>
          <form>
            <div className={classes.inputRegistration}>
              <input type="text" name="name" placeholder="Name" ref={nameRef}/>
            </div>
            <div className={classes.inputRegistration}>
              <input type="email" name="email" placeholder="Email" ref={emailRef} />
            </div>
            <div className={classes.inputRegistration}>
              <input type="password" name="password" placeholder="Password" ref={passwordRef} />
            </div>
          </form>
          <div className={classes.buttonRegistration} onClick={RegisterHandler}>
            <h3>Register</h3>
            <FontAwesomeIcon icon={faArrowRight}/>
          </div>
        </div>
        <div className={classes.backButtonRegistration} >
          <Link to="/">
            <FontAwesomeIcon icon={faArrowLeft}/>
            <h3>Back</h3>
          </Link>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        rtl={false}
        theme="colored"
      />
    </div>
  );
}

export default Registration;