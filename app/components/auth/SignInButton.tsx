'use client'

import { signIn } from 'next-auth/react'
import Button from '@/components/ui/Button'
import styles from '@/styles/Header.module.css'

const SignInButton = () => {
  return (
    <Button 
      text='Masuk' 
      className={styles.btnSign} 
      onClick={() => signIn()} 
    />
  )
}

export default SignInButton
