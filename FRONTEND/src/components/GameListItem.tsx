import api from '../services/games.json'

interface GameItemProp {
  numbers: number[],
  date: number,
  type: string,
}

function GameItem(props:GameItemProp): JSX.Element {
  const game = api.types.find((game:any) => game.type === props.type);
  const date = new Date(props.date);
  const price = game!.price.toLocaleString("pt-br", {
    style: 'currency',
    currency: 'BRL'
  });

  const formatedDate = (`0 ${date.getDate()}`).slice(-2) + '/' + (`0 ${date.getMonth() + 1}`).slice(-2) + '/' + date.getFullYear();

  return (
    <h1></h1>
  )
}

export default GameItem;