import React, { useMemo, useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

import { cartActions } from "../store/cart";
import games from '../services/games.json';
import cartIcon from "../assets/cart.svg";
import "react-toastify/dist/ReactToastify.css";
import classes from "../styles/newbet.module.css";
import Header from "../components/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import NewBetButtons from '../components/NewBetButtons';
import { Cart } from "../components/Cart";
import NumbersButton from "../components/NumbersButtons";
import api from "../services/api";

const NewBet: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ selectedGame, setSelectedGame ] = useState(0);

  interface BetProps {
    games: [
      {
        game_id: number;
        numbers: number[];
      }
    ]
  }

  const dataGame = useMemo(() => games.types[selectedGame], [selectedGame])
  
  function selectNumber (index:number) {
    dispatch(cartActions.addNumber({
      max: dataGame["max-number"],
      index,
    }));
  }

  const getNumbers = () => {
    let numbers = [];
    for (let i = 1; i <= dataGame.range; i++) {
      numbers.push(
        <NumbersButton
          key={i}
          index={('0' + i).slice(-2)}
          color={dataGame.color}
          onClick={() => {selectNumber(i)}}
        />
      );
    } return numbers;
  }

  function completeGame () {
    dispatch(cartActions.completeGame({
      max: dataGame["max-number"],
      range: dataGame.range
    }));
  }

  function clearGame () {
    dispatch(cartActions.clearGame());
  }

  function addItemOnCart () {
    dispatch(cartActions.addItemOnCart({
      min: dataGame["max-number"],
      price: dataGame.price,
      type: dataGame.type
    }));
  }

  useEffect(() => {
    dispatch(cartActions.saveGame());
  }, [dispatch]);

  const handleSaveCart = async () => {
    const token = localStorage.getItem("token");
    
    const gameId = dataGame.id;
    const numbers = selectNumber(gameId);
    const bets: BetProps[] = [];

    const config = {
      headers: { 
        Authorization: `Bearer ${token}`
      }
    }

    const bodyParameters = {
      bets: bets
    }

    api.post(`bet/new-bet`, bodyParameters, config )
    .then(({ data }) => {         
      localStorage.setItem("choosen_numbers", data.bet.choosen_numbers)
      console.log(data);
      navigate("/home");
    })
    .catch((error) => {
      toast.error(error.response.data.message);
    })
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
          <div className={classes.divBetType}>
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
          <div className={classes.saveCart} onClick={handleSaveCart}>
            <h1>Save</h1>
            <FontAwesomeIcon icon={faArrowRight}/>
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