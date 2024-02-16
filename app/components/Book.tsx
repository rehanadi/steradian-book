import Image from 'next/image'
import { formatPrice } from '@/utils/currency'
import { noImageUrl } from '@/constants/images'
import { type Book } from '@/types/books'

type BookFC = React.FC<{ book: Book }>

const Book: BookFC = ({ book }) => {
  return (
    <div className="book">
      <div className="info">
        <div className="image-container">
          <figure>
            <Image 
              fill 
              sizes='25vw' 
              src={book.image} 
              alt={book.title} 
              placeholder='blur'
              blurDataURL={noImageUrl}
            />
          </figure>

          {/* <span className="badge">Stok Habis</span> */}
        </div>

        <a href="#">
          <h4 className="title">{book.title.toUpperCase()}</h4>
        </a>
        
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