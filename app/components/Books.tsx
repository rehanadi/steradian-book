import Image from 'next/image'
import BookImage from '@/assets/images/books/masih-ingatkah-kau-jalan-pulang.jpg'

const Books = () => {
  return (
    <div className="books">
      <div className="sort">
        <div className="title">
          Menampilkan 1 - 16 dari 147 Produk
        </div>

        <form action="#">
          <label>Urutkan:</label>
          <select>
            <option value="" disabled>Paling Sesuai</option>
            <option value="newest">Terbaru</option>
            <option value="cheapest">Termurah</option>
            <option value="highest">Termahal</option>
          </select>
        </form>
      </div>

      <div className="container">
        <div className="book">
          <div className="image-container">
            <figure className="image">
              <Image loading="lazy" src={BookImage} alt="Book" />
            </figure>

            <h6 className="badge">Stok Habis</h6>
          </div>

          <div className="detail">
            <a href="#">
              <h4 className="title">BUKAN BUKU DIET</h4>
            </a>
            
            <p className="author">Alvin Hartanto</p>
          </div>

          <div className="actions">
            <div className="price">
              <div className="sliced-price">Rp118.000</div>
              <div className="sell-price">Rp88.500</div>
            </div>

            <i className="favorite fa-regular fa-heart"></i>
          </div>
        </div>
        
        <div className="book">
          <div className="image-container">
            <figure className="image">
              <Image loading="lazy" src={BookImage} alt="Book" />
            </figure>
          </div>

          <div className="detail">
            <a href="#">
              <h4 className="title">BUKAN BUKU DIET</h4>
            </a>
            
            <p className="author">Alvin Hartanto</p>
          </div>

          <div className="actions">
            <div className="price">
              <div className="sliced-price">Rp118.000</div>
              <div className="sell-price">Rp88.500</div>
            </div>

            <i className="favorite fa-regular fa-heart"></i>
          </div>
        </div>
        
        <div className="book">
          <div className="image-container">
            <figure className="image">
              <Image loading="lazy" src={BookImage} alt="Book" />
            </figure>
          </div>

          <div className="detail">
            <a href="#">
              <h4 className="title">BUKAN BUKU DIET</h4>
            </a>
            
            <p className="author">Alvin Hartanto</p>
          </div>

          <div className="actions">
            <div className="price">
              <div className="sliced-price">Rp118.000</div>
              <div className="sell-price">Rp88.500</div>
            </div>

            <i className="favorite fa-regular fa-heart"></i>
          </div>
        </div>
        
        <div className="book">
          <div className="image-container">
            <figure className="image">
              <Image loading="lazy" src={BookImage} alt="Book" />
            </figure>
          </div>

          <div className="detail">
            <a href="#">
              <h4 className="title">BUKAN BUKU DIET</h4>
            </a>
            
            <p className="author">Alvin Hartanto</p>
          </div>

          <div className="actions">
            <div className="price">
              <div className="sliced-price">Rp118.000</div>
              <div className="sell-price">Rp88.500</div>
            </div>

            <i className="favorite fa-regular fa-heart"></i>
          </div>
        </div>
        
        <div className="book">
          <div className="image-container">
            <figure className="image">
              <Image loading="lazy" src={BookImage} alt="Book" />
            </figure>
          </div>

          <div className="detail">
            <a href="#">
              <h4 className="title">BUKAN BUKU DIET</h4>
            </a>
            
            <p className="author">Alvin Hartanto</p>
          </div>

          <div className="actions">
            <div className="price">
              <div className="sliced-price">Rp118.000</div>
              <div className="sell-price">Rp88.500</div>
            </div>

            <i className="favorite fa-regular fa-heart"></i>
          </div>
        </div>
        
        <div className="book">
          <div className="image-container">
            <figure className="image">
              <Image loading="lazy" src={BookImage} alt="Book" />
            </figure>
          </div>

          <div className="detail">
            <a href="#">
              <h4 className="title">BUKAN BUKU DIET</h4>
            </a>
            
            <p className="author">Alvin Hartanto</p>
          </div>

          <div className="actions">
            <div className="price">
              <div className="sliced-price">Rp118.000</div>
              <div className="sell-price">Rp88.500</div>
            </div>

            <i className="favorite fa-regular fa-heart"></i>
          </div>
        </div>
      </div>

      <div className="pagination-container">
        <ul className="pagination">
          <li>
            <a href="#">«</a>
          </li>
          <li>
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
          <li>
            <a href="#">»</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Books