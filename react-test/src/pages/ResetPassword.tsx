import { useRef } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import classes from "../styles/reset.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ResetPassword: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  return (
    <div className={classes.container}>
      <Sidebar/>
      <div className={classes.reset}>
        <h3>Reset password</h3>
        <div className={classes.containerReset}>
          <div>
            <div className={classes.inputReset}>
            <input type="email" name="" id="" placeholder="Email" ref={emailRef} required/>
            </div>
          </div>
          <div>
            <h3 className={classes.buttonReset}>Send link</h3>
            <FontAwesomeIcon icon={faArrowRight}/>
          </div>
        </div>
        <div>
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