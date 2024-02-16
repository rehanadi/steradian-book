'use client'

import { useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { useGetBooksQuery } from "@/store/index"
import { getFilterParams } from "@/utils/navigation"
import Book from "@/components/Book"
import Pagination from "@/components/Pagination"
import { type Books, FilteredBooks } from "@/types/books"

const Books = () => {
  const searchParams = useSearchParams()

  const filter = useMemo(() => {
    return getFilterParams(searchParams)
  }, [searchParams])

  const { data, isLoading } = useGetBooksQuery(filter)
  // console.log('data:', isLoading, data)
  const { books, start, end, count, page, pages }: FilteredBooks = data
  
  if (isLoading) return <h3>Loading...</h3>



  return (
    <div className="books">
      <div className="sort">
        <div className="title">
          {`Menampilkan ${start} - ${end} dari ${count} Buku`}
        </div>

        <form action="#">
          <label>Urutkan:</label>
          <select>
            <option value="" disabled>Paling Sesuai</option>
            <option value="newest">Terbaru</option>
            <option value="lowest">Termurah</option>
            <option value="highest">Termahal</option>
          </select>
        </form>
      </div>

      <div className="container">
        {books.map(book => (
          <Book book={book} key={book.id} />
        ))}
      </div>

      <div className="pagination-container">
        <Pagination page={page} pages={pages} />
      </div>
    </div>
  )
}

export default Books