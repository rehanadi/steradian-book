'use client'

import { useState } from 'react'
import Link from "next/link"
import UserActions from "@/components/auth/UserActions"

const Header = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <header className="header">
      <div className="leading">
        <Link href="/" className="logo">
          Steradian Book
        </Link>
      </div>

      <div className={`collapse ${showNav ? 'show-nav' : ''}`}>
        <nav>
          <Link href="/" className="active">Buku</Link>
          <Link href="/about-us">Tentang Kami</Link>
          <Link href="/contact">Kontak</Link>
        </nav>

        <div className="actions">
          <UserActions />
        </div>
      </div>

      <div 
        onClick={() => setShowNav(!showNav)}
        className="hamburger" 
      >
        <div className={`hamburger-line ${showNav ? 'hamburger-line-1' : ''}`}></div>
        <div className={`hamburger-line ${showNav ? 'hamburger-line-2' : ''}`}></div>
        <div className={`hamburger-line ${showNav ? 'hamburger-line-3' : ''}`}></div>
      </div>
    </header>
  )
}

export default Header
