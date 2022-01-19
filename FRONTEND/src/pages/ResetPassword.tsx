import { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import Sidebar from "../components/Sidebar";
import classes from "../styles/reset.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import api from "../services/api";
import { authActions } from "../store/auth";
import { emailValidation } from '../utils/login-validations';

const ResetPassword: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    ResetHandler()
  }, []);

  const ResetHandler = async () => {
    //const emailVerified = emailRef.current!.value.trim();

    const token = localStorage.getItem("token");

    const bodyParameters = {
      key: "value"
    }

    const config = {
      headers: { Authorization: `Bearer ${token}`}
    }

    api.post(`/reset`, bodyParameters, config)
      .then((response) => {
        if (response.status === 200) {
          dispatch(authActions.resetPassword({ email: emailRef }));
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
      <div className={classes.reset}>
        <h3>Reset password</h3>
        <div className={classes.containerReset}>
          <form onSubmit={ResetHandler}>
            <div className={classes.inputReset}>
            <input type="email" name="email "placeholder="Email" ref={emailRef} />
            </div>
          </form>
          <div className={classes.buttonReset} onClick={ResetHandler}>
            <h3>Send link</h3>
            <FontAwesomeIcon icon={faArrowRight}/>
          </div>
        </div>
        <div className={classes.backButtonReset}>
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

export default ResetPassword;