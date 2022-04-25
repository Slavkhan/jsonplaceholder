import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  currentUser: null,
  // {
  // id: null,
  // name: null,
  // username: null,
  // email: null,
  // address: {
  //   street: null,
  //   suite: null,
  //   city: null,
  //   zipcode: null,
  //   geo: {
  //     lat: null,
  //     lng: null,
  //   },
  // },
  // phone: null,
  // website: null,
  // company: {
  //   name: null,
  //   catchPhrase: null,
  //   bs: null,
  // },
  // },
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
    noop: (state, action) => state,
  },
});
