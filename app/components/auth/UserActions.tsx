'use client'

import { useSession } from 'next-auth/react'
import SignInButton from '@/components/auth/SignInButton'
import SignOutButton from '@/components/auth/SignOutButton'
import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'

const UserActions = () => {
  const { data: session } = useSession()

  return (
    <>
      {session ? (
        <>
          <Link href="/favorites" className="favorite">
            <FaHeart size={20} />
            <span>Favorites</span>
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