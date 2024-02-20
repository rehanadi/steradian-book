'use client'

import { useState } from 'react'
import Link from "next/link"
import UserActions from "@/components/auth/UserActions"
import styles from '@/styles/Header.module.css'

const Header = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.leading}>
        <Link href="/" className={styles.logo}>
          Steradian Book
        </Link>
      </div>

      <div className={`${styles.collapse} ${showNav ? styles.showNav : ''}`}>
        <nav>
          <Link href="/" className={styles.active}>Buku</Link>
          <Link href="/">Tentang Kami</Link>
          <Link href="/">Kontak</Link>
        </nav>

        <div className={styles.actions}>
          <UserActions />
        </div>
      </div>

      <div 
        onClick={() => setShowNav(!showNav)}
        className={styles.hamburger} 
      >
        <div 
          className={`${styles.hamburgerLine} ${showNav ? styles.hamburgerLine1 : ''}`}
        ></div>
        <div 
          className={`${styles.hamburgerLine} ${showNav ? styles.hamburgerLine2 : ''}`}
        ></div>
        <div 
          className={`${styles.hamburgerLine} ${showNav ? styles.hamburgerLine3 : ''}`}
        ></div>
      </div>
    </header>
  )
}

export default Header
