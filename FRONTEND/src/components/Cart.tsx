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


export function Cart(): JSX.Element {
  const gameContext = useSelector((state: RootStateOrAny) => state.cart)
  const totalPrice = useSelector((state: RootStateOrAny) => state.cart.totalPrice)
  const price = formatedPrice(totalPrice);
  const navigate = useNavigate();

  const saveBet = async () => {
    const token = localStorage.getItem("token")
    const response = await NewBetPost(token, gameContext);
    if (!!response) {
      navigate('/home');
      toast.success('Bet registered with success!')
    }
  }

  const handleSaveBet = () => {
    if (totalPrice >= 30) {
      saveBet()
    } else {
      toast.warning(`The minimum cart value to save the bet is R$30,00`)
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
      <div >
        <h2>CART <span>TOTAL: {price}</span></h2> 
      </div>
      <div className={classes.saveCart} onClick={handleSaveBet}>
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