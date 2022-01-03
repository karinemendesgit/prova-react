import { cartActions } from "../store/cart";
import trashIcon from '../assets/trash.svg';

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

export function Cart({game: CardProps}): JSX.Element {
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
          </div>
        </div>
    </div>
  )
}