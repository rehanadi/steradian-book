import Image from 'next/image'
import Search from '@/components/filter/Search'
import { heroLeftImage, heroRightImage } from '@/constants/images'

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
        <Search />
      </div>

      <figure className="bg-left">
        <Image loading='lazy' src={heroLeftImage} alt="Hero" />
      </figure>

      <figure className="bg-right">
        <Image loading='lazy' src={heroRightImage} alt="Hero" />
      </figure>
    </section>
  )
}

export default Hero