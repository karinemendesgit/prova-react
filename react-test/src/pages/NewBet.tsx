import React from "react";
import { Link } from "react-router-dom";
import cart from "../assets/cart.svg";
import greenRightArrow from "../assets/green-right-arrow.svg";
import rigthArrow from "../assets/right-arrow.svg";

const NewBet: React.FC = () => {
  return (
    <div>
      <header>
        <div>
          <div>
            <strong>TGL</strong>
          </div>
          <Link to="/home">
            <h1>Home</h1>
          </Link>
        </div>
        <div>
          <h1>Account</h1>
          <div>
          <Link to="/">
            <h1>Log out</h1> 
            <img src={rigthArrow} alt="right arrow gray icon" />
          </Link>
          </div>            
        </div>
      </header>
      <main>
        <div>
          <div>
            <p><b>NEW BET</b> FOR </p>
            <p></p>
          </div>
          
          <h3>Choose a game</h3>
          <div>
          </div>
          <div>
            <h3><b>Fill your bet</b>
            <br/><span></span>
            </h3>
          </div>        
          <div></div>
          <div>
            <div>
              <button>Complete game</button>
              <button>Clear game</button>
            </div>
            <div>
              <button>
                <img src={cart} alt="cart icon" />
                Add to cart
              </button>
            </div>
          </div>
        </div>
        <div>
            <h2><b>CART</b></h2>
            <div>          
              <div></div>
            </div>
            <h2><b>CART</b> TOTAL: R$0,00</h2>    
          <div>
            <Link to="/new-bet">
              <h1>Save</h1>
              <img src={greenRightArrow} alt="right arrow green icon" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default NewBet;