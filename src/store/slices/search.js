import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
}

export const search = createSlice({
  name: 'search',
  initialState,
  reducers: {
    getSearchValue: (state, action) => {
      state.search = action.payload
    },
  },
})

export const { getSearchValue } = search.actions

export default search.reducer
