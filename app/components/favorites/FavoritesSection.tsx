'use client'

import { useSession } from 'next-auth/react'
import { getUserBookIds, useGetUserBooksQuery, useSelector } from "@/store/index"
import BookItem from "@/components/books/BookItem"
import type { FilteredBooks } from "@/types/books"
import Image from 'next/image'
import { avatarImage } from '@/app/constants/images'

const FavoritesSection = () => {
  const { data: session } = useSession()
  const user = session?.user || null

  const userBookIds = useSelector(state => getUserBookIds(state, user?.email || ''))
  const { data, isLoading, error } = useGetUserBooksQuery(userBookIds)
  
  if (isLoading) return <section className="section-padding"><h3>Loading...</h3></section>
  if (error) return <section className="section-padding"><h3>Something went wrong</h3></section>

  const { books = [] }: FilteredBooks = data

  return (
    <section className="favorites section-padding">
      <div className="user">
        <figure>
          <Image 
            className='rounded-circle shadow-4-strong' 
            alt={user?.name || ''} 
            src={user?.image || avatarImage}
            width={25}
            height={25}
            style={{ marginRight: '.6rem' }} 
          /> 
        </figure>

        <h1 className="title section-title">{user?.name} Favorite Books</h1>
      </div>

      <p className="section-para">Temukan koleksi buku favoritmu disini</p>

      <div className="books">
        <div className="container">
          {books.map(book => (
            <BookItem book={book} key={book.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FavoritesSection
