'use client'

import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { getUserBookIds, useGetUserBooksQuery, useSelector } from "@/store/index"
import BookItem from "@/components/books/BookItem"
import Loading from "@/components/section/Loading"
import Error from "@/components/section/Error"
import { avatarImage } from '@/constants/images'
import type { FilteredBooks } from "@/types/books"
import styles from '@/styles/Favorites.module.css'
import booksstyles from '@/styles/Books.module.css'

const FavoritesSection = () => {
  const { data: session } = useSession()
  const user = session?.user || null

  const userBookIds = useSelector(state => getUserBookIds(state, user?.email || ''))
  const { data, isLoading, error } = useGetUserBooksQuery(userBookIds)
  
  if (isLoading) return <Loading isSection={true} />
  if (error) return <Error isSection={true} />

  const { books = [] }: FilteredBooks = data

  return (
    <section className={`${styles.favorites} section-padding`}>
      <div className={styles.user}>
        <figure>
          <Image 
            alt={user?.name || ''} 
            src={user?.image || avatarImage}
            width={25}
            height={25}
          /> 
        </figure>

        <h6 className={styles.miniTitle}>Welcome {user?.name}</h6>
      </div>

      <h1 className={`${styles.title} section-title`}>Favorite Books</h1>

      <p className="section-para">Temukan koleksi buku favoritmu disini</p>

      <div className={`${booksstyles.books} ${booksstyles.favorites}`}>
        <div className={booksstyles.container}>
          {books.map(book => (
            <BookItem book={book} key={book.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FavoritesSection
