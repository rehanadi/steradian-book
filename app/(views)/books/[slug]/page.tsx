'use client'

import { useGetBookBySlugQuery } from "@/store/index"
import BookDetail from "@/components/books/BookDetail"
import BookInfo from "@/components/books/BookInfo"
import type { Book } from "@/types/books"

type BookPageFC = React.FC<{ params: { slug: string } }>

const BookPage: BookPageFC = ({ params: { slug } }) => {
  const { data, isLoading, isSuccess, error } = useGetBookBySlugQuery(slug)

  if (isLoading) return <section className="section-padding"><h3>Loading...</h3></section>
  if (error) return <section className="section-padding"><h3>Something went wrong</h3></section>

  const { book }: { book: Book } = data

  if (isSuccess && !book) return <h3>Product Not Found</h3>

  return (
    <>
      <BookDetail book={book} />
      <BookInfo book={book} />
    </>
  )
}

export default BookPage
