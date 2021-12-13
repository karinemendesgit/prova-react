import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import classes from "../styles/header.module.css";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.head1}>
        <div className={classes.tgl}>
          <strong>TGL</strong>
        </div>
        <Link to="/home">
          <h1>Home</h1>
        </Link>
      </div>
      <div className={classes.head2}>
        <h1>Account</h1>
        <div className={classes.logout}>
          <Link to="/">
            <h1>Log out</h1> 
            <FontAwesomeIcon icon={faArrowRight}/>
          </Link>
        </div>            
       </div>
    </header>
  );
}

export default Header;