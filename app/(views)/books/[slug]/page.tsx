'use client'

import { useGetBookBySlugQuery } from "@/store/index"
import BookDetail from "@/components/books/BookDetail"
import BookInfo from "@/components/books/BookInfo"
import type { Book } from "@/types/books"
import Breadcrumb from "@/components/ui/Breadcrumb"
import Loading from "@/components/section/Loading"
import Error from "@/components/section/Error"

type BookPageFC = React.FC<{ params: { slug: string } }>

const BookPage: BookPageFC = ({ params: { slug } }) => {
  const { data, isLoading, isSuccess, error } = useGetBookBySlugQuery(slug)

  if (isLoading) return <Loading isSection={true} />
  if (error) return <Error isSection={true} />

  const { book }: { book: Book } = data

  if (isSuccess && !book) return <h3>Product Not Found</h3>

  return (
    <>
      <Breadcrumb title="Buku" />
      <BookDetail book={book} />
      <BookInfo book={book} />
    </>
  )
}

export default BookPage
