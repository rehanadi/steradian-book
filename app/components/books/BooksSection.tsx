'use client'

import { useMemo } from "react"
import { useSearchParams } from "next/navigation"
import { useGetBooksQuery } from "@/store/index"
import { getFilterParams } from "@/utils/navigation"
import Sort from "@/components/filter/Sort"
import BookItem from "@/components/books/BookItem"
import Pagination from "@/components/filter/Pagination"
import Loading from "@/components/section/Loading"
import Error from "@/components/section/Error"
import type { FilteredBooks } from "@/types/books"
import styles from '@/styles/Books.module.css'

const BooksSection = () => {
  const searchParams = useSearchParams()

  const filter = useMemo(() => {
    return getFilterParams(searchParams)
  }, [searchParams])

  const { data, isLoading, error } = useGetBooksQuery(filter)
  
  if (isLoading) return <Loading />
  if (error) return <Error />

  const { books = [], start, end, count, page, pages }: FilteredBooks = data

  return (
    <section className={styles.books} key={Math.random()}>
      <div className={styles.sort}>
        <div className={styles.title}>
          {`Menampilkan ${start} - ${end} dari ${count} Buku`}
        </div>

        <Sort />
      </div>

      <div className={styles.container}>
        {books.map(book => (
          <BookItem book={book} key={book.id} />
        ))}
      </div>

      <div className={styles.paginationContainer}>
        <Pagination pathname="" page={page} pages={pages} />
      </div>
    </section>
  )
}

export default BooksSection
