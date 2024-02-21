'use client'

import { signOut } from 'next-auth/react'
import Button from '@/components/ui/Button'

const SignOutButton = () => {
  return (
    <Button 
      state='primary'
      onClick={() => signOut()} 
    >Keluar</Button>
  )
}

export default SignOutButton