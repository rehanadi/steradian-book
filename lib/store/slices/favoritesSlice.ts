import { createSlice } from "@reduxjs/toolkit"
import { getPersistFavorites, setPersistFavorites } from "@/utils/favorites"
import { Slice } from "@/constants/common"

const favoritesSlice = createSlice({
  name: Slice.Favorites,
  initialState: getPersistFavorites(),
  reducers: {
    addFavorite: (state, action) => {
      const { user, bookId } = action.payload
      const existUser = state.find(fav => fav.user === user)

      if (existUser) {
        state.map(fav => {
          if (fav.user === existUser.user && fav.books.indexOf(bookId) === -1) {
            fav.books = [...fav.books, bookId]
          }
        })
      } else {
        state.push({
          user,
          books: [bookId]
        })
      }

      setPersistFavorites(state)
    }
  }
})

export const {
  addFavorite
} = favoritesSlice.actions

export default favoritesSlice.reducer
