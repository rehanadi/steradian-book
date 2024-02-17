'use client'

import { signIn } from 'next-auth/react'
import { FaGoogle } from 'react-icons/fa'

type GoogleSignInButtonFC = React.FC<{ callbackUrl?: string }>

const GoogleSignInButton: GoogleSignInButtonFC = ({ callbackUrl }) => {
  return (
    <button 
      onClick={() => signIn('google', { callbackUrl })}
      className="btn-google"
    >
      <FaGoogle size={20} />
      <span>Continue with Google</span>
    </button>
  )
}

export default GoogleSignInButton