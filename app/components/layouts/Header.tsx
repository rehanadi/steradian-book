import Link from "next/link"
import { FaHeart } from "react-icons/fa"
import SignInButton from "@/components/SignInButton"

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
          <FaHeart size={20} />
        </a>

        <a href="#" className="lang">Lang</a>

        <SignInButton />
      </div>
    </header>
  )
}

export default Header
