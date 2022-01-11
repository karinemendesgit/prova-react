import { useRef, useEffect, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import Sidebar from "../components/Sidebar";
import classes from "../styles/reset.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import api from "../services/api";
import { authActions } from "../store/auth";

export function ResetPassword() {
  const emailRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleReset(event:FormEvent) {
    event.preventDefault();
    if (emailRef) {
      dispatch(authActions.resetPassword({ email: emailRef }));
      navigate('/');
  }

  useEffect(() => {
    api.post('/reset')
    .then((response) => response.data)
    .catch((err) => {
      toast.warning(err)
    })
  }, [])
  
  return (
    <div className={classes.container}>
      <Sidebar/>
      <div className={classes.reset}>
        <h3>Reset password</h3>
        <div className={classes.containerReset}>
          <form>
            <div className={classes.inputReset}>
            <input type="email" name="" id="" placeholder="Email" ref={emailRef} required/>
            </div>
          </form>
          <div className={classes.buttonReset} onClick={handleReset}>
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
    </div>
  );
  }
}
