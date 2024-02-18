import { createSelector, createSlice } from "@reduxjs/toolkit"
import { getPersistFavorites, setPersistFavorites } from "@/utils/favorites"
import { Slice } from "@/constants/common"
import type { ReduxState } from "@/store/index"

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
    },
    removeFavorite: (state, action) => {
      const { user, bookId } = action.payload
      const existUser = state.find(fav => fav.user === user)

      if (existUser) {
        state.map(fav => {
          if (fav.user === existUser.user) {
            fav.books = fav.books.filter(id => id !== bookId)
          }
        })
      }

      setPersistFavorites(state)
    }
  }
})

export const existFavorite = (state: ReduxState, user: string, bookId: number): boolean => {
  return state.favorites.find(fav => fav.user === user)?.books.indexOf(bookId) !== -1
}

export const getUserBookIds = (state: ReduxState, user: string): number[] => {
  return state.favorites.find(fav => fav.user === user)?.books || []
}

export const {
  addFavorite,
  removeFavorite
} = favoritesSlice.actions

export default favoritesSlice.reducer
