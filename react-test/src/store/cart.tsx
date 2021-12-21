import { createSlice } from '@reduxjs/toolkit';
import { stat } from 'fs';

interface BetCart {
  name: string,
  description: string,
  range: number,
  price: number,
  "max-number": number,
  color: string,
  selected: boolean
};

interface betSave {
  id: number,
  name: string,
  price: number, 
  color: string,
  numbers: number[],
};

interface InitialStateItems {
  minCartValue: number;
  types: Array<BetCart>;
  active: BetCart;
  selectedNumbers: Array<number>;
  totalPrice: number;
  quantity: number;
  games: Array<betSave>;
  savedGames: Array<betSave>;
  filteredGames: Array<betSave>;
  savedSuccessfully: boolean;
}

const initialState: InitialStateItems = {
  minCartValue: 0,
  types: [],
  active: {
    name: '',
    description: '',
    range: 0,
    price: 0,
    "max-number": 0,
    color: '',
    selected: true
  },
  selectedNumbers: [],
  totalPrice: 0,
  quantity: 0,
  games: [],
  savedGames: [],
  filteredGames: [],
  savedSuccessfully: false
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    replaceCart(state, action) {
      state.minCartValue = action.payload.minCartValue;
      state.types = action.payload.types;
    },
    selectGame (state, action) {
      const newItem = action.payload;
      state.selectedNumbers = [];
      state.types.map((game: BetCart) => {
        if (game.name === newItem) {
          state.active = {
            name: game.name,
            description: game.description,
            range: game.range,
            price: game.price,
            "max-number": game['max-number'],
            color: game.color,
            selected: true
          };
          return game.selected = true;
        } else {
          return game.selected = false
        }
      }) 
    },
    choiceNumber (state, action) {

    },
    clearGame (state) {
      state.selectedNumbers = [];
    },
    completeGame(state) {
      let missingNumbers = state.active['max-number'] - state.selectedNumbers.length;
      let randomNumbers: number;

      for (let i = 0; i < missingNumbers; i++) {
        randomNumbers = Math.round(Math.random() * (state.active.range - 1) + 1)
      };

      while (state.selectedNumbers.includes(randomNumbers)) {
        randomNumbers = Math.round(Math.random() * (state.active.range - 1) + 1)
      }

      state.selectedNumbers.push(randomNumbers)
    },
    addItemOnCart (state) {
      const game = {
        id: state.quantity,
        name: state.active.name,
        price: state.active.price,
        color: state.active.color,        
        numbers: state.selectedNumbers
      }

      state.totalPrice = state.totalPrice + state.active.price;
      state.games.push(game);
      state.quantity++;
      state.selectedNumbers = []

      const missingNumbers = state.active['max-number'] - state.selectedNumbers.length;
      state.selectedNumbers.sort((a, b) => a - b);

      if (state.active['max-number'] > state.selectedNumbers.length) {
        return alert(`Still need to select ${missingNumbers} numbers!`);
      } else {
        return alert ("The maximum quantity of numbers has already been selected!");
      }

    },
    removeItemFromCart (state, action) {
      const id = action.payload;
      const existingItem = state.games.find((item: betSave) => item.id === id);
      state.totalPrice++;
      if (existingItem) {
        state.games = state.games.filter((item: betSave) => item.id !== id);
        state.totalPrice = state.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;