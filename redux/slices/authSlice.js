import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLogged: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isLogged = true;
    },
    logout: (state) => {
        state.user = null,
        state.isLogged = false
    }
  }
})

export const { login, logout, checkAuth } = authSlice.actions

export const checkUser = (state) => state.auth.isLogged;

export default authSlice.reducer