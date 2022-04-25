import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './reducers';
console.log(rootReducer);
export const store = configureStore({
  reducer: rootReducer,
});
