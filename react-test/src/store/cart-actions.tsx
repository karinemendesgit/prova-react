import { Dispatch } from 'redux';
import { cartActions } from './cart';

interface Game {
  name: string,
  description: string,
  range: number,
  price: number,
  "max-number": number,
  color: string,
  selected: boolean
};

export const fetchGames = () => {
  return async (dispatch: Dispatch) => {
    const fetchData = async () => {
      const response = await fetch ('./games.json');
      if (!response.ok) {
        throw new Error ('Something wrong happened. Try again!');
      }
      const data = await response.json();
      return data;
    }
    try {
      const gamesData = await fetchData();
      const loadedGames: Game[] = [];

      await gamesData.types.map((item: any )=> {
        return loadedGames.push({
          name: item.type,
          description: item.description,
          range: item.range,
          price: item.price,
          "max-number": item['max-number'],
          color: item.color,
          selected: false
        })
      })

      dispatch(cartActions.replaceCart({
        minCartValue: gamesData['min-cart-value'] || 0,
        types: loadedGames || []
      }))
    } catch (error) {
        console.error();
    }
  }
}