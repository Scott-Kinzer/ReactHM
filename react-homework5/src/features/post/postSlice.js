import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiIntance from '../../api/api.users';

const initialState= {
  posts: [],
}

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async (id) => {
      const response = await apiIntance.postsFetch(id);
      return response;
    }
  )


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

  },

  extraReducers: {
    [fetchPosts.fulfilled]: (state, action) => {
      state.posts = action.payload
  }
},


 
})

// Action creators are generated for each case reducer function
export const {  } = counterSlice.actions;

export default counterSlice.reducer;