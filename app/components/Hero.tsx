import { heroLeft, heroRight } from '@/constants/images'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="hero section-padding">
      <h1 className="title section-title">
        Promo Buku Steradian
      </h1>

      <p className="para section-para">
        Raih kesempatan untuk dapat diskon dan potongan harga dengan Promo Buku Steradian
      </p>

      <div className="form-container">
        <form action="#">
          <i className="fa-solid fa-magnifying-glass"></i>
  
          <input type="text" placeholder="Cari Judul Buku, Penulis, Penerbit" />
  
          <input type="submit" value="Search" />
        </form>
      </div>

      <figure className="bg-left">
        <Image loading='lazy' src={heroLeft} alt="Hero" />
      </figure>

      <figure className="bg-right">
        <Image loading='lazy' src={heroRight} alt="Hero" />
      </figure>
    </section>
  )
}

export default Hero