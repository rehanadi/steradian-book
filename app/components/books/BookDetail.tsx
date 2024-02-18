import Image from "next/image"
import { blurImage } from "@/constants/images"
import { formatPrice } from "@/utils/currency"
import FavoriteIcon from "@/components/favorites/FavoriteIcon"
import type { Book } from "@/types/books"

type BookDetailFC = React.FC<{ book: Book }>

const BookDetail: BookDetailFC = ({ book }) => {
  return (
    <section className="book-detail section-padding">
      <figure>
        <Image 
          fill 
          sizes='25vw' 
          src={book.image} 
          alt={book.title} 
          placeholder='blur'
          blurDataURL={blurImage}
        />
      </figure>

      <div className="content">
        <h1 className="title">{book.title.toUpperCase()}</h1>

        <p className="author">{book.author.toUpperCase()}</p>

        <div className="sliced-price">{formatPrice(book.sliced_price)}</div>

        <div className="selling-price">{formatPrice(book.selling_price)}</div>

        <FavoriteIcon bookId={book.id} />
      </div>
    </section>
  )
}

export default BookDetail