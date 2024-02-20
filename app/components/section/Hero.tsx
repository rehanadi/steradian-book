import Image from 'next/image'
import Search from '@/components/filter/Search'
import { heroLeftImage, heroRightImage } from '@/constants/images'
import styles from '@/styles/Hero.module.css'

const Hero = () => {
  return (
    <section className={`${styles.hero} section-padding`}>
      <h1 className={`${styles.title} section-title`}>
        Promo Buku Steradian
      </h1>

      <p className={`${styles.para} section-para`}>
        Raih kesempatan untuk dapat diskon dan potongan harga dengan Promo Buku Steradian
      </p>

      <div className={styles.formContainer}>
        <Search />
      </div>

      <figure className={styles.bgLeft}>
        <Image loading='lazy' src={heroLeftImage} alt="Hero" />
      </figure>

      <figure className={styles.bgRight}>
        <Image loading='lazy' src={heroRightImage} alt="Hero" />
      </figure>
    </section>
  )
}

export default Hero