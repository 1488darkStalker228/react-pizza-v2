import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

//Начальное состояние;
const initialState = {
  categories: [],
  isLoading: null,
  error: null,
}

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, thunkAPI) => {
    let url = 'https://63875214d9b24b1be3ecf7cd.mockapi.io/categories'
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

//Логика обработки нашего стейта;
const categories = createSlice({
  //Название нашего слайса;
  name: 'categories',
  initialState,
  //Методы, меняющие наше состояние;
  reducers: {},
  extraReducers: {
    [getCategories.pending]: (state) => {
      state.isLoading = true
      state.error = null
    },
    [getCategories.fulfilled]: (state, action) => {
      state.isLoading = false
      state.categories = action.payload
    },
    [getCategories.rejected]: (state, action) => {
      state.error = action.payload
    },
  },
})

//Экшены, отвечающие за изменение нашего стейта;

// Функция, отвечающая за изменение нашего стейта, Reducer;
export default categories.reducer
