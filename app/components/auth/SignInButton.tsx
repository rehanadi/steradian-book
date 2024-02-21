'use client'

import { signIn } from 'next-auth/react'
import Button from '@/components/ui/Button'

const SignInButton = () => {
  return (
    <Button 
      state='primary'
      onClick={() => signIn()} 
    >Masuk</Button>
  )
}

export default SignInButton
