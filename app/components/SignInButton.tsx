'use client'

import { signIn } from 'next-auth/react'

const SignInButton = () => {
  return (
    <button
      onClick={() => signIn()} 
      className="btn-sign-in"
    >Masuk</button>
  )
}

export default SignInButton
