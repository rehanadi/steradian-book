import Image from 'next/image'
import Link from 'next/link'
import { formatPrice } from '@/utils/currency'
import { blurImage } from '@/constants/images'
import type { Book } from '@/types/books'
import styles from '@/styles/Books.module.css'

type BookItemFC = React.FC<{ book: Book }>

const BookItem: BookItemFC = ({ book }) => {
  return (
    <div className={styles.book}>
      <div className={styles.info}>
        <div className={styles.imageContainer}>
          <Link href={`/books/${book.slug}`}>
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
          </Link>

          {!book.is_ready_stock && (
            <span className={styles.badge}>Stok Habis</span>
          )}
        </div>

        <Link href={`/books/${book.slug}`}>
          <h4 className={styles.title}>{book.title.toUpperCase()}</h4>
        </Link>
        
        <p className={styles.author}>{book.author.toUpperCase()}</p>
      </div>

      <div className={styles.price}>
        <div className={styles.slicedPrice}>{formatPrice(book.sliced_price)}</div>
        <div className={styles.sellingPrice}>{formatPrice(book.selling_price)}</div>
      </div>
    </div>
  )
}

export default BookItem