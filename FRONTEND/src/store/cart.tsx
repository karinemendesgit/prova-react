import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import api from '../services/games.json';

interface GameProps {
  type: string;
  numbers: number[];
  date: number;
  id: number;
}

interface Games {
  games: GameProps;
  cartGames: GameProps[];
  savedGames: GameProps[];
  totalPrice: number;
}

const initialState: Games = {
  games: {
    id: -1,
    type: '',
    date: +new Date(),
    numbers: [],
  },
  cartGames: [],
  savedGames: [],
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addNumber(state, action) {
      const data: { 
        index: number; 
        max: number
      } = action.payload;

      if(!state.games.numbers.includes(data.index)) {
        if (state.games.numbers.length < data.max) {
          state.games.numbers.push(data.index);
        } else {
          toast.error("The max number of numbers has already been selected!")
          return;
        }
      } else {
        state.games.numbers.splice(state.games.numbers.indexOf(data.index), 1);
      }
    },
    completeGame(state, action) {
      const data: { 
        max: number; 
        range: number; 
        type: string
      } = action.payload; 

      if (state.games.numbers.length === data.max) {
        state.games.numbers = [];
      }
      
      selectedRandomNumbers();
      function randomNumbers(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
      }
      
      function selectedRandomNumbers() {
        if (state.games.numbers.length < data.max) {
          const random = randomNumbers(1, data.range);
          if (!state.games.numbers.includes(random)) {
            state.games.numbers.push(random);
          }
          selectedRandomNumbers();
        } else {
          return;
        }
      }
    },
    clearGame (state) {
      state.games.numbers = [];
    },
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
        return state.cartGames.some((game => game.numbers.toString() === arr.toString()))
      }

      if (gameAlreadyChoiced(state.games.numbers)) {
        toast.warning('This numbers have already been selected. Choose others!')
        return;
      }

      state.games.type = data.type;
      state.games.id = state.cartGames.length;
      state.games.date = +new Date();
      state.cartGames.push(state.games);
      state.totalPrice += data.price;
      state.games = initialState.games;
    },
    removeItemFromCart (state, action) {
      const data: { id: number; price: number} = action.payload;
      state.cartGames.splice(data.id, 1);
      state.totalPrice -= data.price;
    },
    saveGame (state) {
      if (state.totalPrice >= api['min-cart-value']) {
        state.savedGames = [...state.savedGames, ...state.cartGames];        
      } else {
        toast.warning (`The minimum cart value to save the bet is R$30,00`);
        return;
      }
    },
    clearCart (state) {
      state.cartGames = [];
      state.totalPrice = 0
    }    
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;