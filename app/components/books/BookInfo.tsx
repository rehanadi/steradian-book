'use client'

import { useState } from "react"
import { Book } from "@/types/books"

type BookInfoFC = React.FC<{ book: Book }>

const BookInfo: BookInfoFC = ({ book }) => {
  const [tab, setTab] = useState(0)

  return (
    <section className="book-info section-padding">
      <div className="tabs">
        <h3 
          onClick={() => setTab(0)}
          className={`${tab === 0 ? 'active' : ''}`}
        >Deskripsi</h3>

        <h3 
          onClick={() => setTab(1)}
          className={`${tab === 1 ? 'active' : ''}`}
        >Informasi Buku</h3>
      </div>

      {tab === 0 && (
        <div className="description">
          {book.description}
        </div>
      )}
      
      {tab === 1 && (
        <div className="additional-info">
          <h5>Jumlah Halaman</h5>
          <p>{book.pages}</p>

          <h5>Tanggal Terbit</h5>
          <p>{book.publish_date}</p>

          <h5>Penerbit</h5>
          <p>{book.publisher}</p>

          <h5>Berat</h5>
          <p>{book?.weight && `${book?.weight} kg`}</p>

          <h5>Lebar</h5>
          <p>{book?.width && `${book?.width} cm`}</p>

          <h5>Panjang</h5>
          <p>{book?.length && `${book?.length} cm`}</p>
        </div>
      )}
    </section>
  )
}

export default BookInfo