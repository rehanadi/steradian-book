import { apiSlice } from "./slices"
import favoritesReducer from "./slices/favoritesSlice"

export const reducer = {
  [apiSlice.reducerPath]: apiSlice.reducer,
  favorites: favoritesReducer
}
