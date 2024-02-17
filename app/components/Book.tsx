import Image from 'next/image'
import Link from 'next/link'
import { formatPrice } from '@/utils/currency'
import { blurImage } from '@/constants/images'
import type { Book } from '@/types/books'

type BookFC = React.FC<{ book: Book }>

const Book: BookFC = ({ book }) => {
  return (
    <div className="book">
      <div className="info">
        <div className="image-container">
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
            <span className="badge">Stok Habis</span>
          )}
        </div>

        <Link href={`/books/${book.slug}`}>
          <h4 className="title">{book.title.toUpperCase()}</h4>
        </Link>
        
        <p className="author">{book.author.toUpperCase()}</p>
      </div>

      <div className="price">
        <div className="sliced-price">{formatPrice(book.sliced_price)}</div>
        <div className="selling-price">{formatPrice(book.selling_price)}</div>
      </div>
    </div>
  )
}

export default Book