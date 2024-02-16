'use client'

import { useMemo } from "react"
import { useGetBooksQuery } from "@/store/index"
import { useSearchParams } from "next/navigation"
import { getFilterParams } from "@/utils/navigation"
import Book from "@/components/Book"
import { type Books, FilteredBooks } from "@/types/books"

const Books = () => {
  const searchParams = useSearchParams()

  const filter = useMemo(() => {
    return getFilterParams(searchParams)
  }, [searchParams])

  const { data, isLoading } = useGetBooksQuery(filter)
  console.log('data:', isLoading, data)
  
  if (isLoading) return <h3>Loading...</h3>

  // const books: Books = data?.books || []
  const { books, start, end, count, page, pages }: FilteredBooks = data

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
        <ul className="pagination">
          <li>
            <a href="#" className={`${page === 1 ? 'disabled' : ''}`}>«</a>
          </li>
          {[...Array(pages).keys()].map(i => (
            <li>
              <a href="#" className={`${page === i + 1 ? 'active' : ''}`}>{i + 1}</a>
            </li>
          ))}
          <li>
            <a href="#" className={`${page === pages ? 'disabled' : ''}`}>»</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Books