import { cartActions } from "../store/cart";
import trashIcon from '../assets/trash.svg';
import { useDispatch } from "react-redux";
import { formatedPrice } from '../utils/cart-facilities';
import api from '../services/games.json';
import { CardStyle, DivStyled, ListStyle, DivFlex } from "./CardStyle";

interface CardProps {
  numbers: number[];
  type: string;
  id: number;
}

export default function Card(props: CardProps): JSX.Element {
  const dispatch = useDispatch();
  const gameData = api.types.find((game) => game.type === props.type)
  const price = formatedPrice(gameData!.price);

  let numbers = props.numbers;
  numbers = numbers.slice().sort((a, b) => a- b)

  function handleRemoveItemFromCart () {
    dispatch(cartActions.removeItemFromCart({id: props.id, price: gameData!.price}));
  }

  return (
    <CardStyle>
      <div>
        <button onClick={handleRemoveItemFromCart}>
          <img src={trashIcon}/>
        </button>
        </div>
        <DivStyled color={gameData!.color}></DivStyled>
        <DivFlex>
          <p>
          {numbers.join(', ')}
          </p>
          <ListStyle color={gameData!.color}>
            <p>{props.type}</p>
            <span>{price}</span>
          </ListStyle>
        </DivFlex>
    </CardStyle>
  )
}