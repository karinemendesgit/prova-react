import { useSelector, RootStateOrAny } from "react-redux";

import { formatedPrice } from '../utils/cart-facilities';
import CartItem from "./CartItem";
import { CartStyle } from './CartStyle';

export function Cart(): JSX.Element {
  const gameContext = useSelector((state: RootStateOrAny) => state.cart)
  const totalPrice = useSelector((state: RootStateOrAny) => state.cart.totalPrice)
  const price = formatedPrice(totalPrice);

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
  </>
  )
}