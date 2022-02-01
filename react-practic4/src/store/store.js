import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import taskReducer from '../features/tasks/tasksSlice';


const reducer = combineReducers({
  taskReducer,
});

export const store = configureStore({
  reducer
});

