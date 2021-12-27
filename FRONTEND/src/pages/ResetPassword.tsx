import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import Sidebar from "../components/Sidebar";
import classes from "../styles/reset.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ResetPassword: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
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
          <div className={classes.buttonReset}>
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

export default ResetPassword;