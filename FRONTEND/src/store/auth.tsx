import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string,
  email: string,
  password: string,
  isAuthenticated: boolean,
}

type Auth = {
  users: User[],  
  userAuthenticated: User | null
}

const initialState: Auth = {
  users: [],
  userAuthenticated: null 
};

const authSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    createAccount (state, action) {
      const {
        name: username,
        email: usermail,
        password: userPassword
      } = action.payload;
      if (username && usermail && userPassword) {
        state.users.push({
          name: username,
          email: usermail,
          password: userPassword,
          isAuthenticated: true
        });
      }
    },
    login (state, action) {
      const { email, password } = action.payload;
      const userIsLogin = state.users.find((user: User) => user.email === email);

      if(userIsLogin && userIsLogin.password === password) {

      }

    },
    logout (state) {
      //state.isAuthenticated = false;
    }
  }
})

export default authSlice.reducer;
export const authActions = authSlice.actions;