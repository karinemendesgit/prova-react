import { useSelector, RootStateOrAny } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { NewBetPost } from "../services/newBetPost";

import { formatedPrice } from '../utils/cart-facilities';
import CartItem from "./CartItem";
import { CartStyle } from './CartStyle';
import classes from "../styles/newbet.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

interface postProps {
  game_id: number;
  numbers: number[];
}

export function Cart(): JSX.Element {
  const gameContext = useSelector((state: RootStateOrAny) => state.cart);
  const totalPrice = useSelector((state: RootStateOrAny) => state.cart.totalPrice);
  const gamesBet = useSelector((state: RootStateOrAny) => state.cart.cartGames);
  const price = formatedPrice(totalPrice);
  const navigate = useNavigate();

  const saveBet = async () => {
    const games: postProps[] = gamesBet.map((bet: any) => {
      return {
        game_id: bet.game_id,
        numbers: bet.choosen_numbers,
      }
    })
    const response = await NewBetPost(games);
    console.log(response);
    if (response) {      
      navigate('/home');
      toast.success('Bet successfully registered!');
    }
  }

  return (
  <>
    <h2>CART</h2>
      <CartStyle>          
        <div>
          {gameContext.cartGames.length > 0 ? (
            <CartItem></CartItem>
          ) : (<p>Empty Cart</p>)}
        </div>
      </CartStyle>
      <div>
        <h2>CART <span>TOTAL: {price}</span></h2> 
      </div>
      <div className={classes.saveCart} onClick={saveBet}>
        <h1>Save</h1>
        <FontAwesomeIcon icon={faArrowRight}/>
      </div>  
    <ToastContainer
      position="top-right"
      autoClose={5000}
       hideProgressBar={true}
      newestOnTop
      closeOnClick
      rtl={false}
      theme="colored"
    />               
  </>
  )
}