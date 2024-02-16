import books from '@/data/books.json'
import { filterBooks } from '@/utils/books'
import { type Filter, FilteredBooks } from '@/types/books'

export const getBooks = (filter: Filter): FilteredBooks => {
  return filterBooks(books, filter)
}
