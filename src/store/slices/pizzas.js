import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  pizzas: [],
  isLoading: null,
  error: null,
}

//Стоит разобраться, как работают try, catch, throw;
export const getPizzas = createAsyncThunk(
  'pizzas/getPizzas',
  async ({ categoryId, propertyForSort, orderForSort }, thunkAPI) => {
    let url = `https://63875214d9b24b1be3ecf7cd.mockapi.io/pizzas?&sortBy=${propertyForSort}&order=${orderForSort}`
    if (categoryId !== 0) {
      url = `${url}&category=${categoryId}`
    }
    try {
      const res = await fetch(url)
      if (!res.ok) {
        throw new Error('Server Error')
      }
      return await res.json()
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message)
    }
  }
)

const pizzas = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers: {
    [getPizzas.pending]: (state) => {
      state.isLoading = true
      state.error = null
    },
    [getPizzas.fulfilled]: (state, action) => {
      state.isLoading = false
      state.pizzas = action.payload
    },
    [getPizzas.rejected]: (state, action) => {
      state.error = action.payload
    },
  },
})

export default pizzas.reducer
