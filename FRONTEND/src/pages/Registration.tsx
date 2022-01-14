import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import api from "../services/api";

import Sidebar from "../components/Sidebar";
import classes from "../styles/registration.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from "react-toastify";
import { userValidations } from '../utils/login-validations';

const Registration: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    RegisterHandler()
  }, [])

  function createAccount () {
    dispatch(authActions.createAccount({ name: nameRef, email: emailRef, password: passwordRef }));
  }

  async function RegisterHandler () {
    const nameVerified = nameRef.current!.value.trim();
    const emailVerified = emailRef.current!.value.trim();
    const passwordVerified = passwordRef.current!.value.trim();
  
    if (!userValidations (emailVerified, passwordVerified)) {
      toast.error("Fill all the fields to register");
    } 
     
    api.post(`/user/create`, {name: nameVerified, email: emailVerified, password: passwordVerified})
      .then((response) => {
        if (response.status === 200) {
          toast.success('Successfully completed registration');
          navigate('/');
        }
      })
      .catch((error) => {
        return toast.error(error.message);
      })  
  }
  return (
    <div className={classes.container}>
      <Sidebar/>
      <div className={classes.registration}>
        <h3>Registration</h3>
        <div className={classes.containerRegistration}>
          <form onClick={createAccount}>
            <div className={classes.inputRegistration}>
              <input type="text" name="" id="" placeholder="Name" ref={nameRef} required />
            </div>
            <div className={classes.inputRegistration}>
              <input type="email" name="" id="" placeholder="Email" ref={emailRef} required/>
            </div>
            <div className={classes.inputRegistration}>
              <input type="password" name="" id="" placeholder="Password" ref={passwordRef} required/>
            </div>
          </form>
          <div className={classes.buttonRegistration} onClick={RegisterHandler}>
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