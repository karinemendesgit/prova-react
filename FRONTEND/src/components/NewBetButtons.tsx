import  { useDispatch } from 'react-redux';

import api from '../services/games.json';
import { cartActions } from '../store/cart';
import BetTypeButton from './BetTypeButton';
import NewBetButtonsStyle  from './NewBetButtonsStyle';

interface GamesListProps {
  selectedGame: number,
  setSelectedGame: (game: number) => void
}

function NewBetButtons({selectedGame, setSelectedGame}: GamesListProps): JSX.Element {
  const dispatch = useDispatch();

  function handleSelectBet(index:number) {
    setSelectedGame(index);
    dispatch(cartActions.clearGame());
  }

  const betGames = api.types.map((bet, index) => (
    <li key={bet.type}>
      <BetTypeButton 
        text={bet.type} 
        textColor={bet.color} 
        selected={selectedGame === index}
        onClick={() => handleSelectBet(index)} />
    </li>
  ))
  return(
    <NewBetButtonsStyle>{betGames}</NewBetButtonsStyle>
  )
}

export default NewBetButtons