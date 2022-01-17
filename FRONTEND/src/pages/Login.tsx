import { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import api from "../services/api";
import { toast, ToastContainer } from 'react-toastify';

import Sidebar from "../components/Sidebar";
import classes from "../styles/login.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { userValidations } from '../utils/login-validations';

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function loggedIn() {
    dispatch(authActions.login({ email: emailRef, password: passwordRef }));
  }  

  useEffect(() => {
    LoginHandler();
  }, []);
  
  const LoginHandler = async () => {
    const emailVerified = emailRef.current!.value.trim();
    const passwordVerified = passwordRef.current!.value.trim(); 

    //const token = localStorage.getItem("token");

   /* const config = {
      headers: { Authorization: `Bearer ${token}`}
    }*/
    
    if (userValidations (emailVerified, passwordVerified)) {
      api.post(`/login`, { email: emailVerified, password: passwordVerified})
        .then((response) => {
          if (response.status === 200) {            
            localStorage.setItem("token", response.data.token);
            navigate('/home');
          }
        })
        .catch((error) => {
          return toast.error(error.message);
        })
      } else {
        dispatch(authActions.login({ email: emailRef, password: passwordRef }));
      }  
  }
  
  return (
    <div className={classes.container}>
      <Sidebar/>
      <div className={classes.login}>
        <h3>Authentication</h3>
        <div className={classes.containerLogin}>
          <form onSubmit={loggedIn}>
            <div className={classes.inputLogin}>
              <input 
                type="email" 
                placeholder="Email" 
                ref={emailRef} 
              />
            </div>
            <div className={classes.inputLogin}>
              <input 
                type="password" 
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
          </form>
          <Link to="/reset-password">
            <p className={classes.questionLogin}>I forget my password</p>
          </Link>
          <div className={classes.buttonLogin} onClick={loggedIn}>
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

export default Login;