import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
      return state;
    },
    logout: (state) => {
      state.currentUser = initialState.currentUser;
      return state;
    },
    register: (state, action) => {
      state.currentUser = action.payload;
      return state;
    },
    noop: (state, action) => state,
  },
});
