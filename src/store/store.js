import { configureStore } from '@reduxjs/toolkit'
import categories from './slices/categories'
import search from './slices/search'
import pizzas from './slices/pizzas'

export const store = configureStore({
  reducer: { categories, search, pizzas },
})
