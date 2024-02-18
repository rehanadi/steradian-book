import { getServerSession } from 'next-auth'
import { authOptions } from '@/config/auth'
import SignInButton from '@/components/auth/SignInButton'
import SignOutButton from '@/components/auth/SignOutButton'

const AuthUserButton = async () => {
  const session = await getServerSession(authOptions)

  return (
    <>
      {session ? (
        <SignOutButton />
      ) : (
        <SignInButton />
      )}
    </>
  )
}

export default AuthUserButton