import { createSlice } from '@reduxjs/toolkit';

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
  filteredGames: []
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
    completeGame(state) {
      //let missingNumbers = state.active['max-number'] - state.selectedNumbers.length;

      function randomNumbers(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min)
      }

      selectedRandomNumbers();
      function selectedRandomNumbers() {
        if (state.selectedNumbers.length < state.active['max-number']) {
          const random = randomNumbers(1, state.active.range);
          if (!state.selectedNumbers.includes(random)) {
            state.selectedNumbers.push(random);
          }
          selectedRandomNumbers();
        } else {
          return;
        }
      }
      /*for (let i = 0; i < missingNumbers; i++) {
        let randomNumbers = Math.floor(Math.random() * (state.active.range - 1) + 1)      
        while (state.selectedNumbers.includes(randomNumbers)) {
          randomNumbers = Math.round(Math.random() * (state.active.range - 1) + 1)
        }
        state.selectedNumbers.push(randomNumbers)
      }*/
    },
    clearGame (state) {
      state.selectedNumbers = [];
    },
    addItemOnCart (state) {
      const game = {
        id: state.quantity,
        name: state.active.name,
        price: state.active.price,
        color: state.active.color,        
        numbers: state.selectedNumbers,
        date: +new Date()
      }

      state.totalPrice = state.totalPrice + state.active.price;
      state.games.push(game);
      state.quantity++;
      state.selectedNumbers = []

      const missingNumbers = state.active['max-number'] - state.selectedNumbers.length;
      state.selectedNumbers.sort((a, b) => a - b);

      if (state.active['max-number'] > state.selectedNumbers.length) {
        return alert(`Still need to select ${missingNumbers} number${missingNumbers > 1 ? 's' : ''}!`);
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
    saveGame (state) {
      if (state.totalPrice >= state.minCartValue) {
        state.games.forEach(game => state.savedGames.push(game));
        state.games = [];
        state.totalPrice = 0;
      } else {
        return alert (`The minimum cart value to save the bet is R$30,00`);
      }
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;