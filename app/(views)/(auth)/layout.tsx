import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth"
import { authOptions } from "@/config/auth"

const AuthLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const session = await getServerSession(authOptions)

  if (session) redirect('/')
  
  return (
    <>{children}</>
  )
}

export default AuthLayout
