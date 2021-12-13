import React from "react";
import { Link } from "react-router-dom";
import cart from "../assets/cart.svg";
import classes from "../styles/newbet.module.css";
import Header from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const NewBet: React.FC = () => {
  return (
    <div>
      <Header/>
      <main className={classes.newBet}>
        <div className={classes.rightSideNB}>
          <div className={classes.title}>
            <p><b>NEW BET</b> FOR </p>
            <p></p>
          </div>
          <h3 className={classes.textNB}>Choose a game</h3>
          <div className={classes.buttonsNB}>
            <button className={classes.lotofacil}>Lotofácil</button>
            <button className={classes.megasena}>Mega-Sena</button>
            <button className={classes.lotomania}>Lotomania</button>
          </div>
          <div>
            <h3 className={classes.textNB}><b>Fill your bet</b>
            <br/><span></span>
            </h3>
          </div>        
          <div></div>
          <div className={classes.betButtons}>
            <div>
              <button className={classes.completeGame}>Complete game</button>
              <button className={classes.clearGame}>Clear game</button>
            </div>
            <div>
              <button className={classes.addTo}>
                <img src={cart} alt="cart icon" />
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className={classes.cart}>
            <h2><b>CART</b></h2>
            <div>          
              <div></div>
            </div>
            <div className={classes.total}>
              <h2>CART <p>TOTAL: R$0,00</p></h2> 
            </div>
               
          <div>
            <Link to="/new-bet">
              <h1>Save</h1>
              <FontAwesomeIcon icon={faArrowRight}/>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NewBet;