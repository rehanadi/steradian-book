import Image from "next/image"
import { FaRegHeart } from "react-icons/fa"
import { blurImage } from "@/constants/images"
import type { Book } from "@/types/books"
import { formatPrice } from "@/lib/utils/currency"

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

        <span className="favorite">
          <FaRegHeart size={75} />
        </span>
      </div>
    </section>
  )
}

export default BookDetail