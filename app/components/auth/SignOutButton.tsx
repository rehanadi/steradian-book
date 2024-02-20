'use client'

import { signOut } from 'next-auth/react'
import Button from '@/components/ui/Button'
import styles from '@/styles/Header.module.css'

const SignOutButton = () => {
  return (
    <Button 
      text='Keluar' 
      className={styles.btnSign} 
      onClick={() => signOut()} 
    />
  )
}

export default SignOutButton