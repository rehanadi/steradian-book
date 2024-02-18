'use client'

import { useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { useGetBooksQuery } from "@/store/index"
import { getFilterParams } from "@/utils/navigation"
import BookItem from "@/components/books/BookItem"
import Pagination from "@/components/filter/Pagination"
import Sort from "@/components/filter/Sort"
import type { FilteredBooks } from "@/types/books"

const BooksSection = () => {
  const searchParams = useSearchParams()

  const filter = useMemo(() => {
    return getFilterParams(searchParams)
  }, [searchParams])

  const { data, isLoading } = useGetBooksQuery(filter)
  
  if (isLoading) return <h3>Loading...</h3>

  const { books = [], start, end, count, page, pages }: FilteredBooks = data

  return (
    <section className="books">
      <div className="sort">
        <div className="title">
          {`Menampilkan ${start} - ${end} dari ${count} Buku`}
        </div>

        <Sort />
      </div>

      <div className="container">
        {books.map(book => (
          <BookItem book={book} key={book.id} />
        ))}
      </div>

      <div className="pagination-container">
        <Pagination pathname="" page={page} pages={pages} />
      </div>
    </section>
  )
}

export default BooksSection
