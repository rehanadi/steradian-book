import { Slice } from "@/constants/common"
import type { Favorites } from "@/types/favorites"

export const getPersistFavorites = (): Favorites => {
  return typeof window !== "undefined" && localStorage.getItem(Slice.Favorites) 
    ? JSON.parse( String(localStorage.getItem(Slice.Favorites)) ) 
    : []
}

export const setPersistFavorites = (favorites: Favorites) => {
  localStorage.setItem(Slice.Favorites, JSON.stringify(favorites))
}
