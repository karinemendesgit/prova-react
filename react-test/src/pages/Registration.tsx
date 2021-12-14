import { useRef } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import classes from "../styles/registration.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Registration: React.FC = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  return (
    <div className={classes.container}>
      <Sidebar/>
      <div className={classes.registration}>
        <h3>Registration</h3>
        <div className={classes.containerRegistration}>
          <div>
            <div className={classes.inputRegistration}>
              <input type="text" name="" id="" placeholder="Name" ref={nameRef} required/>
            </div>
            <div className={classes.inputRegistration}>
              <input type="email" name="" id="" placeholder="Email" ref={emailRef} required/>
            </div>
            <div className={classes.inputRegistration}>
              <input type="password" name="" id="" placeholder="Password" ref={passwordRef} required/>
            </div>
          </div>
          <div className={classes.buttonRegistration}>
            <h3>Register</h3>
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

export default Registration;