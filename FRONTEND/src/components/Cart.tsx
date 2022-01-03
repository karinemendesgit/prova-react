import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { useNavigate } from "react-router-dom";

import { formatedPrice } from '../utils/cart-facilities';
import { useEffect } from "react";
import { Card } from './Card';

interface gameProps {
  id: number;
  name: string;
  price: number;
  color: string;
  numbers: number[];
  date: number;
}

export function Cart(): JSX.Element {
  const gameContext = useSelector((state: RootStateOrAny) => state.cart.games)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const totalPrice = useSelector((state: RootStateOrAny) => state.cart.totalPrice)
  const gameSavedOk = useSelector((state: RootStateOrAny) => state.cart.savedOk)
  
  const price = formatedPrice(totalPrice);

  useEffect(() => {
    if (gameSavedOk) {
      navigate('/home');
    }
  }, [navigate, gameSavedOk, dispatch]);

  return (
  <>
    <h2>CART</h2>
      <div>          
        <div>
          {gameContext.length > 0 ? (
            gameContext.map((game: gameProps) => {
              <Card key={game.id} game={game}/>
            })
          ) : (<p>Empty Cart</p>)}
        </div>
      </div>
      <div >
        <h2>CART <p>TOTAL: {price}</p></h2> 
      </div>               
  </>
  )
}