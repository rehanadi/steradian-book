import { PAGINATION_LIMIT, FilterStock, Sorting } from "@/constants/common"
import { type Books, Filter, FilteredBooks } from "@/types/books"

export const filterBooks = (booksData: Books, filter: Filter): FilteredBooks => {
  const {
    keyword = '', 
    category = '', 
    stock = '', 
    minimumPrice = '', 
    maximumPrice = '', 
    sort = '', 
    page: currentPage = ''
  } = filter
  
  let books = [...booksData]
  
  // Filtering
  if (keyword) {
    books = books.filter(book => {
      return (
        book.title.toLowerCase().includes( keyword.toLowerCase() ) ||
        book.author.toLowerCase().includes( keyword.toLowerCase() ) ||
        book.publisher?.toLowerCase().includes( keyword.toLowerCase() )
      )
    })
  }
  
  if (category) {
    books = books.filter(book => {
      return book.category_slug.toLowerCase() === category.toLowerCase()
    })
  }
  
  if (stock.toLowerCase() === FilterStock.Available.toLowerCase()) {
    books = books.filter(book => Boolean(book.is_ready_stock))
  }
  
  if (minimumPrice && !isNaN( Number(minimumPrice) )) {
    books = books.filter(book => {
      return Number(book.selling_price) >= Number(minimumPrice)
    })
  }
  
  if (maximumPrice && !isNaN( Number(maximumPrice) )) {
    books = books.filter(book => {
      return Number(book.selling_price) <= Number(maximumPrice)
    })
  }
  
  // Sorting
  switch (sort.toLowerCase()) {
    case Sorting.Newest.toLowerCase():
      books = books.sort((a, b) => Number(b.publish_date) - Number(a.publish_date))
      break
    case Sorting.Lowest.toLowerCase():
      books = books.sort((a, b) => Number(a.selling_price) - Number(b.selling_price))
      break
    case Sorting.Highest.toLowerCase():
      books = books.sort((a, b) => Number(b.selling_price) - Number(a.selling_price))
      break
  }
  
  // Pagination
  const limit = PAGINATION_LIMIT || 12
  const count = books.length
  const page = Number(currentPage) || 1
  const pages = Math.ceil(count / limit)
  const start = limit * (page - 1) + 1
  const end = count > (limit * page) ? (limit * page) : count 
  
  books = books.slice(start - 1, end)
  
  return { books, page, pages, count, start, end }
}
