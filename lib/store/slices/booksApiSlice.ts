import { apiSlice } from "./apiSlice"
import { BOOKS_URL, REVALIDATE_SECONDS, Tag } from "@/constants/api"
import { type Filter } from "@/types/books"

export const booksApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getBooks: builder.query({
      query: (filter: Filter) => {
        return BOOKS_URL
          + `?keyword=${filter.keyword}`
          + `&category=${filter.category}`
          + `&stock=${filter.stock}`
          + `&minimum_price=${filter.minimumPrice}`
          + `&maximum_price=${filter.maximumPrice}`
          + `&sort=${filter.sort}`
          + `&page=${filter.page}`
      },
      providesTags: [{ type: Tag.Books, id: 'LIST' }],
      keepUnusedDataFor: REVALIDATE_SECONDS
    }),
    getBookBySlug: builder.query({
      query: (slug: string) => `${BOOKS_URL}/${slug}`,
      providesTags: (result, error, arg) => [{ type: Tag.Books, id: arg }],
      keepUnusedDataFor: REVALIDATE_SECONDS
    })
  })
})

export const {
  useGetBooksQuery,
  useGetBookBySlugQuery,
} = booksApiSlice
