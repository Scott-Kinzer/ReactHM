import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiIntance from '../../api/api.users';

const initialState= {
  comments: [],
}

export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async (id) => {
      
      const response = await apiIntance.fetchComments(id);

      return response;
    }
  )


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  },

  extraReducers: {
    [fetchComments.fulfilled]: (state, action) => {
      state.comments = action.payload
  }
},


 
})

// Action creators are generated for each case reducer function
export const {  } = counterSlice.actions;

export default counterSlice.reducer;