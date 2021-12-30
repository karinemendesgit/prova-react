import api from '../services/games.json';
import { ListContainer, StyledDiv, ListItems} from './GameListItemStyle';

interface GameItemProp {
  numbers: number[];
  date: number;
  type: string;
}

function GameListItem(props:GameItemProp): JSX.Element {
  const game = api.types.find((game:any) => game.type === props.type);
  const date = new Date(props.date);
  const price = game!.price.toLocaleString("pt-br", {
    style: 'currency',
    currency: 'BRL'
  });

  const formatedDate = (`0 ${date.getDate()}`).slice(-2) + '/' + (`0 ${date.getMonth() + 1}`).slice(-2) + '/' + date.getFullYear();

  return (
    <ListContainer>
      <StyledDiv color={game!.color}/>
      <ListItems color={game!.color}>
      <h3>{props.numbers.join(', ')}</h3>
      <p>{`${formatedDate} - (${price})`}</p>
      <h3 className='gametype'>{props.type}</h3>
      </ListItems>
    </ListContainer>    
  );
}

export default GameListItem;