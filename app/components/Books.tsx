'use client'

import { useGetBooksQuery } from "@/store/index"
import Book from "@/components/Book"
import { type Books } from "@/types/books"

const Books = () => {
  const { data } = useGetBooksQuery(null)
  const books: Books = data?.books || []

  return (
    <div className="books">
      <div className="sort">
        <div className="title">
          Menampilkan 1 - 16 dari 147 Produk
        </div>

        <form action="#">
          <label>Urutkan:</label>
          <select>
            <option value="" disabled>Paling Sesuai</option>
            <option value="newest">Terbaru</option>
            <option value="cheapest">Termurah</option>
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
            <a href="#">«</a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">»</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Books