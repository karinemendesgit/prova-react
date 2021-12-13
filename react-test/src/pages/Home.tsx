import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/home.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Header from "../components/Header";

const Home: React.FC = () => {
  return (
    <div>
      <Header/>
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
        </div>
        <div className={classes.leftSide}>
          <Link to="/new-bet">
            <h3>New Bet</h3>
            <FontAwesomeIcon icon={faArrowRight}/>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;