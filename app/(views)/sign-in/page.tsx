import GoogleSignInButton from '@/components/GoogleSignInButton'
import { authMessages } from "@/constants/auth"

type SignInPageFC = React.FC<{ searchParams: { callbackUrl?: string, error?: string } }>

const SignInPage: SignInPageFC = ({ searchParams }) => {
  const { callbackUrl = '/', error } = searchParams
  const authMessage = error ? authMessages[error] || authMessages.default : null

  return (
    <section className="sign-in section-padding">
      <div className='content'>
        <h1 className="title">Sign In to Steradian Book</h1>

        {/* 
        <fieldset className="fieldset-email">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Masukkan Email Anda" />
        </fieldset>

        <button className="btn-email">
          <FaRegEnvelope size={20} />
          <span>Continue with Email</span>
        </button>

        <p className="break">Or</p>
        */}

        {authMessage && <h3>{authMessage}</h3>}

        <GoogleSignInButton callbackUrl={callbackUrl} />
      </div>

      <figure>
        <img src="/assets/images/sign-in.png" alt="Sign In" />
      </figure>
    </section>
  )
}

export default SignInPage
