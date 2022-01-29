import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import carReducer from '../features/car/carSlice';
import userReducer from '../features/user/userSlice';
import postReducer from '../features/post/postSlice';

import commentReducer from '../features/comment/commentSlice';

const reducer = combineReducers({
  carReducer,
  userReducer,
  postReducer,
  commentReducer
});

export const store = configureStore({
  reducer
});

