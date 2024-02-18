'use client'

import { signOut } from 'next-auth/react'

const SignOutButton = () => {
  return (
    <button
      onClick={() => signOut()} 
      className="btn-sign"
    >Keluar</button>
  )
}

export default SignOutButton