import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import carReducer from '../features/car/carSlice';
import userReducer from '../features/user/userSlice';

const reducer = combineReducers({
  carReducer,
  userReducer
});

export const store = configureStore({
  reducer
});

