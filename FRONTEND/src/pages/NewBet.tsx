import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

import { cartActions } from "../store/cart";
import api from '../services/games.json';
import cartIcon from "../assets/cart.svg";
import "react-toastify/dist/ReactToastify.css";
import classes from "../styles/newbet.module.css";
import Header from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import NewBetButtons from '../components/NewBetButtons';
import NumbersButtons from "../components/NumbersButtons";
import { Cart } from "../components/Cart";
import NumbersButton from "../components/NumbersButtons";

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
  
    const handleSelectNumber = (index: number) => {
      try {
        dispatch(cartActions.addNumber({ index, max: dataGame["max-number"]}))
      } catch (error:any) {
        toast.error(error.message)
      }
    }

    const getNumbers = () => {
      let numbers = [];
      for (let i = 1; i <= dataGame.range; i++) {
        numbers.push(
          <NumbersButton
            key={i}
            index={('0' + i).slice(-2)}
            color={dataGame.color}
            onClick={() => {handleSelectNumber(i)}}
          />
        );
      } return numbers;
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
            {getNumbers()}
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
          <Cart/>           
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
        hideProgressBar={true}
        newestOnTop
        closeOnClick
        rtl={false}
        theme="colored"
      />
    </div>
  );
}

export default NewBet;