import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import { cartActions } from "../store/cart";
import api from '../services/games.json';
import cartIcon from "../assets/cart.svg";
import trashIcon from "../assets/trash.svg";
import classes from "../styles/newbet.module.css";
import Header from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import NewBetButtons from '../components/NewBetButtons';
import NumbersButtons from "../components/NumbersButtons";

const NewBet: React.FC = () => {
  interface BetsProps {
    id: number;
    name: string;
    price: number;
    color: string;
    numbers: number[];
    date: string
  }
  
  const dispatch = useDispatch();
  const betSelected = useSelector((state: RootStateOrAny) => state.cart.active);
  const games = useSelector((state: RootStateOrAny) => state.cart.games);
  const totalPrice = useSelector((state: RootStateOrAny) => state.cart.totalPrice);
  const [ selectedGame, setSelectedGame ] = useState(0);
  
  const dataGame = useMemo(() => api.types[selectedGame], [selectedGame])
  
  const getNumbers = () => {
    let numbers: number[] = [];
    for (let i = 1; i <= dataGame.range; i++) {
      numbers.push(i);
    }
    return numbers;
  }

  function completeGame () {
    dispatch(cartActions.completeGame());
  }

  function clearGame () {
    dispatch(cartActions.clearGame());
  }

  function addItemOnCart () {
    dispatch(cartActions.addItemOnCart());
  }

  function removeItemFromCart () {
    dispatch(cartActions.removeItemFromCart);
  }

  function saveGame () {
    dispatch(cartActions.saveGame());
  }

  return (
    <div>
      <Header/>
      <main className={classes.newBet}>
        <div className={classes.rightSideNB}>
          <div className={classes.title}>
            <p><b>NEW BET</b> FOR {dataGame.type.toUpperCase()}</p>
          </div>
          <h3 className={classes.textNB}>Choose a game</h3>
          <div className={classes.buttonsNB}>
            <NewBetButtons selectedGame={selectedGame} setSelectedGame={setSelectedGame} />
          </div>
          <div>
            <h3 className={classes.textNB}><b>Fill your bet</b>
            <br/><span>{dataGame.description}</span>
            </h3>
          </div>        
          <div className={classes.numbers}>
            {getNumbers().map((number: number) => (
              <NumbersButtons
                key={number}
                color={betSelected.color}
                number={number}
              />
            ))}
          </div>
          <div className={classes.betButtons}>
            <div>
              <button 
                onClick={completeGame}
                className={classes.completeGame}>      
                  Complete game
              </button>
              <button 
                onClick={clearGame}
                className={classes.clearGame}>
                  Clear game
              </button>
            </div>
            <div>
              <button 
                onClick={addItemOnCart}
                className={classes.addTo}>
                  <img src={cartIcon} alt="cart icon" />
                  Add to cart
              </button>
            </div>
          </div>
        </div>
        <div className={classes.cart}>
            <h2>CART</h2>
            <div>          
              <div>
                {games.length > 0 ? (
                  games.map((game: BetsProps) => {
                    <div>
                      <div>
                        <button onClick={removeItemFromCart}>
                          <img src={trashIcon}/>
                        </button>
                      </div>      
                      <div>
                        <p>
                          {game.numbers.toString().replace(/,/g, ', ')}
                        </p>
                        <div>
                          <p>{game.name}</p>
                          <span>{game.price}</span>
                        </div>
                      </div>
                    </div>
                  })
                ) : (<p>Empty Cart</p>)}
              </div>
            </div>
            <div className={classes.total}>
              <h2>CART <p>TOTAL: {totalPrice}</p></h2> 
            </div>               
          <div>
            <Link to="/new-bet" onClick={saveGame}>
              <h1>Save</h1>
              <FontAwesomeIcon icon={faArrowRight}/>
            </Link>
          </div>
        </div>
      </main>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default NewBet;