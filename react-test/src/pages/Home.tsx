import React from "react";
import { Link } from "react-router-dom";
import rigthArrow from "../assets/right-arrow.svg";
import classes from "../styles/home.module.css";

const Home: React.FC = () => {
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.head1}>
          <div className={classes.tgl}>
            <strong>TGL</strong>
          </div>
        </div>
        <div className={classes.head2}>
          <h1>Account</h1>
          <div className={classes.logout}>
            <Link to="/">
              <h1>Log out</h1> 
              <img src={rigthArrow} alt="right arrow gray icon" />
            </Link>
          </div>            
        </div>
      </header>
      <main className={classes.home}>
        <div className={classes.rigthSide}>
          <div className={classes.firstLine}>
            <div>
              <h3>RECENT GAMES</h3>
            </div>
            <div>
              <p>Filters</p>
            </div>
            <div className={classes.buttonsHome}>
              <button className={classes.lotofacil}>Lotofácil</button>
              <button className={classes.megasena}>Mega-Sena</button>
              <button className={classes.lotomania}>Lotomania</button>
            </div>
          </div>
          <div className={classes.leftSide}>
            <Link to="/new-bet">
              <h3 className={classes.homeRedirect}>New Bet</h3>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;