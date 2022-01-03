import { cartActions } from "../store/cart";
import trashIcon from '../assets/trash.svg';
import React from "react";
import { useDispatch } from "react-redux";
import { formatedPrice } from '../utils/cart-facilities';

interface CardProps {
  game: {
    id: number;
    color: string;
    numbers: number[];
    date: number;
    price: number;
    name: string
  };
}

export const Card: React.FC<CardProps> = ( {game} ) => {
  const dispatch = useDispatch();
  const price = formatedPrice(game.price)

  function removeItemFromCart () {
    dispatch(cartActions.removeItemFromCart(game.id));
  }

  return (
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
            {price}
          </div>
        </div>
    </div>
  )
}