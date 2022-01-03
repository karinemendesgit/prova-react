import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { NumberProps } from '../models/intefaces';

/*interface BetCart {
  name: string;
  description: string;
  range: number;
  price: number;
  "max-number": number;
  color: string;
  selected: boolean;
};

interface betSave {
  id: number;
  name: string;
  price: number; 
  color: string;
  numbers: number[];
  date: number;
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
  savedOk: boolean;
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
  savedOk: false
};*/

interface GameProps {
  type: string;
  numbers: number[];
  date: number;
  id: number;
}

interface Games {
  game: GameProps;
  cartGames: GameProps[];
  savedGames: GameProps[];
  totalPrice: number;
}

const initialState: Games = {
  game: {
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
    /*replaceCart(state, action) {
      state.minCartValue = action.payload.minCartValue;
      state.types = action.payload.types;
    },*/
    addNumber(state, action) {
      const data: NumberProps = action.payload;
      if(!state.game.numbers.includes(data.index)) {
        if (state.game.numbers.length < data.maxNumb) {
          state.game.numbers.push(data.index)
        } else {
          toast.error("max numvers")
        }
      } else {
        state.game.numbers.splice(state.game.numbers.indexOf(data.index), 1) 
      }
    },
    /*selectGame (state, action) {
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
    addSelectNumber(state, action) {
      const newNumber = +action.payload;
      let plusNumbers = [...state.game.numbers];

      const existentNumber =state.game.numbers.includes(newNumber);

      function fullGame() {
        return state.game.numbers.length === state.active['max-number'];
      }

      if (existentNumber) {
        const index = state.game.numbers.indexOf(newNumber);
        plusNumbers.splice(index, 1);
        state.selectedNumbers = plusNumbers
      } else if (!existentNumber && !fullGame()) {
        plusNumbers = [...state.selectedNumbers, newNumber];
        state.selectedNumbers = plusNumbers
      } else {
        toast.error("The bet's selects numbers are completed. Add your game to cart.")
        return;
      }
    },*/
    completeGame(state, action) {
      const data: {max: number; range: number; type: string} = action.payload;
      
      if (state.game.numbers.length === data.max) {
        state.game.numbers = [];
      }
      
      selectedRandomNumbers();
      function randomNumbers(min: number, max: number) {
        return Math.floor(Math.random() * (max - min) + min);
      }
      
      function selectedRandomNumbers() {
        if (state.game.numbers.length < data.max) {
          const random = randomNumbers(1, data.range);
          if (!state.game.numbers.includes(random)) {
            state.game.numbers.push(random);
          }
          selectedRandomNumbers();
        } else {
          return;
        }
      }
    },
    clearGame (state) {
      state.game.numbers = [];
    },
    addItemOnCart (state) {
      const game = {
        id: state.game.id,
        name: state.game.type,
        price: state.active.price,
        color: state.active.color,        
        numbers: state.selectedNumbers,
        date: +new Date()
      };

      state.totalPrice = state.totalPrice + state.active.price;
      state.games.push(game);
      state.quantity++;
      state.selectedNumbers = []

      const missingNumbers = state.active['max-number'] - state.selectedNumbers.length;
      state.selectedNumbers.sort((a, b) => a - b);

      if (state.active['max-number'] > state.selectedNumbers.length) {
        toast.warning(`Still need to select ${missingNumbers} number${missingNumbers > 1 ? 's' : ''}!`);
      } else {
        toast.error ("The maximum quantity of numbers has already been selected!");
      }
    },
    removeItemFromCart (state, action) {
      const id = action.payload;
      const existingItem = state.game.numbers.find(item => item.numbers === id);
      state.totalPrice++;
      if (existingItem) {
        state.cartGames = state.savedGames.filter(item => item.id !== id);
        state.totalPrice = state.totalPrice - existingItem.price;
      }
    },
    saveGame (state) {
      if (state.totalPrice >= state.minCartValue) {
        state.cartGames.forEach(game => state.savedGames.push(game));
        state.cartGames = [];
        state.totalPrice = 0;
      } else {
        toast.warning (`The minimum cart value to save the bet is R$30,00`);
      }
    }
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;