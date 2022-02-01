import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  tasks: [], 
}


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    addTask: (state, action) => {
   
        state.tasks.push(action.payload);
       
    },

    deleteTask: (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
    },

    doneTask: (state, action) => {
        state.tasks = state.tasks.map(task => {
            if (task.id === action.payload) {
                return {
                    text: task.text,
                    done: !task.done,
                    id: task.id
                }
            }

            return task;
        })

    },

  },


})

// Action creators are generated for each case reducer function
export const {deleteTask, addTask, doneTask } = counterSlice.actions;

export default counterSlice.reducer;