import books from '@/data/books.json'
import { filterBooks } from '@/utils/books'
import type { Book, Filter, FilteredBooks } from '@/types/books'

export const getBooks = (filter: Filter): FilteredBooks => {
  return filterBooks(books, filter) || []
}

export const getBookBySlug = (slug: string): Book | null => {
  return books.find(book => book.slug.toLowerCase() === slug.toLowerCase()) || null
}
