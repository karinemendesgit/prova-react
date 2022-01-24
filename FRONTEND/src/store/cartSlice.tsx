import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

interface CartProps {
  id?: number;
  game_id: number;
  numbers: number[];
}

interface Cart {
  games: CartProps[];
  totalPrice: number;
}

const initialState: Cart = {
  games: [],
  totalPrice: 0,
}

const cartSlices = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addItemOnCart (state, action) {
      const data: { 
        min: number; 
        price: number; 
        type: string
      } = action.payload; 

      const missingNumbers = data.min - state.games.numbers.length;

      if (state.games.numbers.length < data.min) {
        toast.warning(`Still need to select ${missingNumbers} number${missingNumbers > 1 ? 's' : ''}!`);
        return;
      }

      const gameAlreadyChoiced = (arr: number[]) => {
        return state.games.numbers.some((game: any) => game.numbers.toString() === arr.toString())
      }

      if (gameAlreadyChoiced(state.games.numbers)) {
        toast.warning('This numbers have already been selected. Choose others!')
        return;
      }

      state.games.push(action.payload.bets);
      state.totalPrice += data.price;
      state.games = initialState.games;
    },
    removeItemFromCart (state, action) {
      const data: { id: number; price: number} = action.payload;
      state.games.splice(data.id, 1);
      state.totalPrice -= data.price;
    },
    /*saveGame (state) {
      if (state.totalPrice >= api['min-cart-value']) {
        state.savedGames = [...state.savedGames, ...state.cartGames];        
      } else {
        toast.warning (`The minimum cart value to save the bet is R$30,00`);
        return;
      }
    },*/
    clearCart (state) {
      state.games = [];
      state.totalPrice = 0
    }
  }
})

export const cartActions = cartSlices.actions;
export default cartSlices.reducer;
