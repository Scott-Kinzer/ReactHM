import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiIntance from '../../api/api'

const initialState= {
  cars: [],
  formState: null
}

export const fetchCars = createAsyncThunk(
    'cars/fetchCars',
    async () => {
      const response = await apiIntance.getApiCars();
      return response;
    }
  )


  export const createCarThunk = createAsyncThunk(
    'cars/createCar',
    async ({data:newCar, id},{dispatch})=>{
        try {
            console.log(id);
            const data = await apiIntance.createApiCar(newCar);
            console.log(data);
            dispatch(addCar({data}))
        }catch (e) {

        }
    }
)
export const deleteCarThunk = createAsyncThunk(
    'cars/createCar',
    async ({id},{dispatch})=>{
        console.log(id);
        try {
            await apiIntance.deleteApiCar(id);
            dispatch(deleteCar({id}))
        }catch (e) {

        }
    }
)


export const updateCarThunk = createAsyncThunk(
    'cars/createCar',
    async ({data},{dispatch}) => {
        console.log(data);
        try {
            await apiIntance.updateApiCar(data);
            dispatch(updateCar({data}));
        }catch (e) {

        }
    }
)


export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    addCar: (state, action) => {
        state.cars.push(action.payload.data);
    },

    deleteCar: (state, action) => {
        state.cars = state.cars.filter(car => car.id !== action.payload.id)
    },

    updateCar: (state, action) => {

        console.log(action.payload.data.id);
        state.cars = state.cars.map(car => {
            if (+car.id === +action.payload.data.id) {
                return {
                    id: car.id,
                    model: action.payload.data.model,
                    price: action.payload.data.price,
                    year: action.payload.data.year
                }
            }

            return car;
        })
    },

    setFormCar: (state, action) => {
        
        if (!action.payload) {
            state.formState = null;
            return;
        }

        state.formState = {
                    id: action.payload.car.id,
                    model: action.payload.car.model,
                    price: action.payload.car.price,
                    year: action.payload.car.year
        }
    },
    
  },

  extraReducers: {
    [fetchCars.fulfilled]: (state, action) => {
        state.cars = action.payload
    },
  }
})

// Action creators are generated for each case reducer function
export const { addCar, deleteCar, updateCar, setFormCar} = counterSlice.actions;

export default counterSlice.reducer;