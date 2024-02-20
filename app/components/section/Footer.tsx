import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import styles from '@/styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.info}>
          <p>
            <strong>Steradian Book</strong> adalah platform yang menyediakan berbagai jenis buku terupdate dengan berbagai macam kategori favorit dan harga potongan yang menarik.
          </p>
          <p>
          Raih kesempatan untuk dapat diskon dan potongan harga dengan Promo Buku Steradian.
          </p>
        </div>

        <div className={styles.links}>
          <h3 className={styles.title}>
            Informasi
          </h3>

          <ul>
            <li>
              <Link href="/">Lokasi</Link>
            </li>
            <li>
              <Link href="/">FAQ</Link>
            </li>
            <li>
              <Link href="/">Tentang Kami</Link>
            </li>
            <li>
              <Link href="/">Kontak</Link>
            </li>
          </ul>
        </div>

        <div className={styles.newsletter}>
          <h3 className={styles.title}>
            Newsletter
          </h3>

          <p className={styles.info}>
            Subscribe untuk informasi terupdate
          </p>

          <form action="/">
            <input type="email" placeholder="Email address" />
            <input type="submit" value="Subscribe" />
          </form>
        </div>
      </div>

      <div className={styles.author}>
        <p className={styles.copy}>
          Steradian Book &copy; 2024 
        </p>

        <div className={styles.social}>
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