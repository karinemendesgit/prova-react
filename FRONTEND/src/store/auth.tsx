import { createSlice } from "@reduxjs/toolkit";
import { emailValidation, passwordValidation } from '../utils/login-validations';

interface User {
  name: string,
  email: string,
  password: string,
}

type Auth = {
  users: User[],  
  isAuthenticated: boolean,
  userAuthenticated: User | null
}

const initialState: Auth = {
  users: [],
  isAuthenticated: false,
  userAuthenticated: null 
};

const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login (state, action) {
      const { email, password } = action.payload;
      if (email && password) {
        const userIsLogin = state.users.find((user: User) => user.email === email);
        if(userIsLogin && userIsLogin.password === password) {
          state.isAuthenticated = true;
          state.userAuthenticated = userIsLogin;
          return state;
        }
      }
    },
    createAccount (state, action) {
      const {
        name,
        email,
        password
      } = action.payload;
      const userFound = state.users.some(user => {
        return email === user.email;
      })
      if (!userFound) {
        if (name && email && password) {
          if (emailValidation(email) && passwordValidation(password)) {
            state.users.push({
              name,
              email,
              password,
            });
          }
        }
      }
      return state;
    },
    resetPassword (state, action) {
      
    },
    logout (state) {
      state.isAuthenticated = false;
      state.userAuthenticated = null;
    }
  }
})

export default authSlice.reducer;
export const authActions = authSlice.actions;