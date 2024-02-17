'use client'

import { Book } from "@/app/types/books"
import BookDetail from "@/components/BookDetail"
import BookInfo from "@/components/BookInfo"
import { useGetBookBySlugQuery } from "@/lib/store"

type BookPageFC = React.FC<{ params: { slug: string } }>

const BookPage: BookPageFC = ({ params: { slug } }) => {
  const { data, isLoading, isSuccess } = useGetBookBySlugQuery(slug)

  if (isLoading) return <h3>Loading...</h3>

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
