import { useRef , FormEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import api from "../services/api";
import { toast } from 'react-toastify'

import Sidebar from "../components/Sidebar";
import classes from "../styles/login.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== null) {
      navigate('/home');
    }
  }, [navigate]);
  
  const loginHandler = async (event: FormEvent) => {
    event.preventDefault();

    const emailVerified = emailRef.current!.value.trim();
    const passwordVerified = passwordRef.current!.value.trim();

    if (emailVerified && passwordVerified) {
      dispatch(authActions.login({email: emailVerified, password: passwordVerified}));
      navigate('/home');
    }
    
    useEffect(() => {
      api.post('/login')
      .then((response) => response.data)
      .catch((err) => {
        toast.warning(err)
      })
    }, [])
  }
  
  return (
    <div className={classes.container}>
      <Sidebar/>
      <div className={classes.login}>
        <h3>Authentication</h3>
        <div className={classes.containerLogin}>
          <form onSubmit={loginHandler}>
            <div className={classes.inputLogin}>
              <input 
              type="email" 
              placeholder="Email" 
              ref={emailRef} 
              required/>
            </div>
            <div className={classes.inputLogin}>
              <input 
              type="password" 
              placeholder="Password"
              ref={passwordRef} 
              required/>
            </div>
          </form>
          <Link to="/reset-password">
            <p className={classes.questionLogin}>I forget my password</p>
          </Link>
          <div className={classes.buttonLogin} onClick={loginHandler}>            
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