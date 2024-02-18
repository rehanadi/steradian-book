import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="info">
          <p>
            <strong>Steradian Book</strong> adalah platform yang menyediakan berbagai jenis buku terupdate dengan berbagai macam kategori favorit dan harga potongan yang menarik.
          </p>
          <p>
          Raih kesempatan untuk dapat diskon dan potongan harga dengan Promo Buku Steradian.
          </p>
        </div>

        <div className="links">
          <h3 className="title">
            Informasi
          </h3>

          <ul>
            <li>
              <a href="#">Lokasi</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Tentang Kami</a>
            </li>
            <li>
              <a href="#">Kontak</a>
            </li>
          </ul>
        </div>

        <div className="newsletter">
          <h3 className="title">
            Newsletter
          </h3>

          <p className="info">
            Subscribe untuk informasi terupdate
          </p>

          <form action="/">
            <input type="email" placeholder="Email address" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>

      <div className="author">
        <p className="copy">
          Steradian Book &copy; 2024 
        </p>

        <div className="social">
          <span>
            <FaFacebookF size={20} />
          </span>
          
          <span>
            <FaTwitter size={20} />
          </span>
          
          <span>
            <FaInstagram size={20} />
          </span>

          <span>
            <FaWhatsapp size={20} />
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer