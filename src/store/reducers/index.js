import {combineReducers} from '@reduxjs/toolkit';
import {authSlice} from './auth';
// console.log(authSlice);
export const rootReducer = combineReducers({auth: authSlice.reducer});
