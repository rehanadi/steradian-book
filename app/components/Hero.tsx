import React from 'react'

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
        <img loading="lazy" src="./images/hero-left.png" alt="Hero" />
      </figure>

      <figure className="bg-right">
        <img loading="lazy" src="./images/hero-right.png" alt="Hero" />
      </figure>
    </section>
  )
}

export default Hero