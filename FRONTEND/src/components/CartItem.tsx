import { RootStateOrAny, useSelector } from "react-redux";
import api from "../services/api";
import Card from "./Card";

interface BetProps {    
  game_id: number;
  numbers: number[];
}

export default function  CartItem(): JSX.Element {
  const games = useSelector((state: RootStateOrAny) => state.cart);
  
  return (
    <div>
      {games.cartGames.map((game: any, index: any) => (
        <Card key={index} numbers={game.numbers} id={index} type={game.type}/>
      ))}
    </div>
  )
}