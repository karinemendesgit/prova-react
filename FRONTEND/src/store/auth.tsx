import { createSlice } from "@reduxjs/toolkit";
import { emailValidation, passwordValidation } from '../utils/login-validations';
import { toast } from 'react-toastify';

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
  name: 'account',
  initialState,
  reducers: {
    login (state, action) {
      const { email, password } = action.payload;
      if (email && password) {
        const userHaveAccount = state.users.find((user: User) => user.email === email);
        if(userHaveAccount && userHaveAccount.password === password) {
          state.isAuthenticated = true;
          state.userAuthenticated = userHaveAccount;
          toast.success('Login made successfully!')
          return state;
        } else {
          const emailFound = state.users.some((user) => {
            return user.email === email;
          })
          if (emailFound) {
            toast.error('Incorrect password')
          } else {
            toast.error("You don't have a register. Let's do now!")
          }
          return;
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
          if (name.length > 2 && emailValidation(email) && passwordValidation(password)) {
            state.users.push({
              name,
              email,
              password,
            });
            toast.success('User registred with sucess. Just login now!')
          } else {
            toast.error('Has something wrong with your register (password must have at least 8 characters, email must have to @ and name must have at least 2 letters)')
          }
        } else {
          toast.warning("You're already registered!")
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