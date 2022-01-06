import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { cartActions } from "../store/cart";
import { formatedPrice } from '../utils/cart-facilities';
import CartItem from "./CartItem";

interface gameProps {
  id: number;
  name: string;
  price: number;
  color: string;
  numbers: number[];
  date: number;
}

export function Cart(): JSX.Element {
  const gameContext = useSelector((state: RootStateOrAny) => state.cart)
  const totalPrice = useSelector((state: RootStateOrAny) => state.cart.totalPrice)
  const price = formatedPrice(totalPrice);

  return (
  <>
    <h2>CART</h2>
      <div>          
        <div>
          {gameContext.cartGames.length > 0 ? (
            <CartItem></CartItem>
          ) : (<p>Empty Cart</p>)}
        </div>
      </div>
      <div >
        <h2>CART <span>TOTAL: {price}</span></h2> 
      </div>               
  </>
  )
}