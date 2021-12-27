import { useDispatch } from "react-redux";

import { cartActions } from "../store/cart";
import trashIcon from "../assets/trash.svg";

interface Cart {
  game: {
    id: number,
    color: string,
    numbers: number [],
    price: number,
    name: string
  }
}

const cartItem: React.FC<Cart> = ({game}) => {
  const dispatch = useDispatch();

  function removeItemFromCart () {
    dispatch(cartActions.removeItemFromCart(game.id));
  }

  return (
    <>
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
    </>
  )
}

export default cartItem;