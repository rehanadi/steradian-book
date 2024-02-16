import { apiSlice } from "./apiSlice"
import { CATEGORIES_URL, REVALIDATE_SECONDS, Tag } from "@/constants/api"

export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCategories: builder.query({
      query: () => CATEGORIES_URL,
      providesTags: [{ type: Tag.Categories, id: 'LIST' }],
      keepUnusedDataFor: REVALIDATE_SECONDS
    })
  })
})

export const {
  useGetCategoriesQuery
} = categoriesApiSlice
