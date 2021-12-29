import  { useDispatch } from 'react-redux';

import api from '../services/games.json';
import { cartActions } from '../store/cart';
import BetTypeButton from './BetTypeButton';

interface GamesListProps {
  gameSelected: number,
  setGameSelected: (game: number) => void
}

function NewBetButtons({gameSelected, setGameSelected}: GamesListProps): JSX.Element {
  const dispatch = useDispatch();

  function handleSelectBet(index:number) {
    setGameSelected(index);
    dispatch(cartActions.clearGame());
  }

  const betGames = api.types.map((bet, index) => {
    <li key={bet.type}>
      <BetTypeButton 
        text={bet.type} 
        textColor={bet.color} 
        selected={gameSelected === index}
        onClick={() => handleSelectBet(index)} />
    </li>
  })
  return(
    <div>{betGames}</div>
  )
}
