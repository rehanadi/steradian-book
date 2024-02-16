import Link from "next/link"

const Header = () => {
  return (
    <header className="header">
    <div className="leading">
      <Link href="/" className="logo">
        Steradian Book
      </Link>
  
      <nav>
        <a href="#" className="active">Home</a>
        <a href="#products">Buku</a>
        <a href="#footer">Tentang Kami</a>
        <a href="#footer">Kontak</a>
      </nav>
    </div>

    <div className="actions">
      <a href="#" className="favorite">
        <i className="fa-regular fa-heart"></i>
      </a>

      <a href="#" className="lang">Lang</a>

      <button className="sign-in">Masuk</button>
    </div>
  </header>
  )
}

export default Header