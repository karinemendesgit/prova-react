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
  name: 'auth',
  initialState,
  reducers: {
    login (state, action) {
      const { email, password } = action.payload;
      if (email.trim().length > 0 && password.trim().length > 0) {
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
            toast.error("Email not founded! Please verify your email or check if you have a register")
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

      const nameFilled = name.trim().length > 2;
      const emailFilled = email.trim().length > 0;
      const passwordFilled = password.trim().length > 0;

      if(nameFilled && emailFilled && passwordFilled) {
        const userFound = state.users.some(user => {
          return email === user.email;
        })
        if (!userFound) {
          if (emailValidation(email) && passwordValidation(password)) {
            state.users.push({
              name,
              email,
              password,
            });
            toast.success('User registred with success. Just login now!')
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
      const email = action.payload;
      const emailFilled = email.trim().length > 0;

      if(emailFilled) {
        const userFound = state.users.some(user => {
          return email === user.email;
        })
        if (!userFound) {
          toast.error("Email not founded! Please verify your email or check if you have a register");
        } else {
          const userLogger = state.users.find((user: User) => user.email === email);
          if (userLogger) {
            userLogger.password = '12345678';
            toast.success("Your password has been redefined to '123456'");
          }
        }
      } else {
        toast.error('Fill the field with your email')
      }
    },
    logout (state) {
      state.isAuthenticated = false;
      state.userAuthenticated = null;
      toast.success('Logout successfully!')  
    }
  }
})

export default authSlice.reducer;
export const authActions = authSlice.actions;