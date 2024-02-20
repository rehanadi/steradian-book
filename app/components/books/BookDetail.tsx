import Image from "next/image"
import { blurImage } from "@/constants/images"
import { formatPrice } from "@/utils/currency"
import FavoriteIcon from "@/components/favorites/FavoriteIcon"
import type { Book } from "@/types/books"
import styles from '@/styles/Books.module.css'

type BookDetailFC = React.FC<{ book: Book }>

const BookDetail: BookDetailFC = ({ book }) => {
  return (
    <section className={`${styles.bookDetail} section-padding`}>
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

      <div className={styles.content}>
        <h1 className={styles.title}>{book.title.toUpperCase()}</h1>

        <p className={styles.author}>{book.author.toUpperCase()}</p>

        <div className={styles.slicedPrice}>{formatPrice(book.sliced_price)}</div>

        <div className={styles.sellingPrice}>{formatPrice(book.selling_price)}</div>

        <FavoriteIcon bookId={book.id} />
      </div>
    </section>
  )
}

export default BookDetail