'use client'

import { useSession } from 'next-auth/react'
import SignInButton from '@/components/auth/SignInButton'
import SignOutButton from '@/components/auth/SignOutButton'
import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'
import styles from '@/styles/Header.module.css'

const UserActions = () => {
  const { data: session } = useSession()

  return (
    <>
      {session ? (
        <>
          <Link href="/favorites" className={styles.favorite}>
            <FaHeart size={20} />
            <span>Favorit</span>
          </Link>

          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </>
  )
}

export default UserActions