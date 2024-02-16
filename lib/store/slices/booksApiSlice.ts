import { apiSlice } from "./apiSlice"
import { BOOKS_URL, REVALIDATE_TIMES, Tag } from "@/constants/api"

export const booksApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getBooks: builder.query({
      query: () => BOOKS_URL,
      providesTags: [{ type: Tag.Books, id: 'LIST' }],
      keepUnusedDataFor: REVALIDATE_TIMES
    }),
    getBookBySlug: builder.query({
      query: (slug: string) => `${BOOKS_URL}/${slug}`,
      providesTags: (result, error, arg) => [{ type: Tag.Books, id: arg }],
      keepUnusedDataFor: REVALIDATE_TIMES
    })
  })
})

export const {
  useGetBooksQuery,
  useGetBookBySlugQuery,
} = booksApiSlice
