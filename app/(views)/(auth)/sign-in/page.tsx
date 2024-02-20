import SignInSection from '@/components/auth/SignInSection'
import Breadcrumb from '@/components/ui/Breadcrumb'

type SignInPageFC = React.FC<{ searchParams: { callbackUrl?: string, error?: string } }>

const SignInPage: SignInPageFC = ({ searchParams }) => {
  return (
    <>
      <Breadcrumb title='Sign In' />
      <SignInSection searchParams={searchParams} />
    </>
  )
}

export default SignInPage
