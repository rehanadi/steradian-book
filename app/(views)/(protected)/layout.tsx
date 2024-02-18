import { redirect } from 'next/navigation'
import { getServerSession } from "next-auth"
import { headers } from "next/headers"
import { authOptions } from "@/config/auth"

const ProtectedLayout: React.FC<React.PropsWithChildren> = async ({ children }) => {
  const session = await getServerSession(authOptions)

  if (!session) {
    const headersList = headers()
    const pathname = headersList.get('x-invoke-path') || '/'
    const callbackUrl = encodeURIComponent(pathname)

    redirect(`/sign-in?callbackUrl=${callbackUrl}`)
  }
  
  return (
    <>{children}</>
  )
}

export default ProtectedLayout
