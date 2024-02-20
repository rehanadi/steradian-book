import GoogleSignInButton from '@/components/auth/GoogleSignInButton'
import { authMessages } from "@/constants/auth"
import styles from '@/styles/Auth.module.css'

type SignInSectionFC = React.FC<{ searchParams: { callbackUrl?: string, error?: string } }>

const SignInSection: SignInSectionFC = ({ searchParams }) => {
  const { callbackUrl = '/', error } = searchParams
  const authMessage = error ? authMessages[error] || authMessages.default : null

  return (
    <section className={`${styles.signIn} section-padding`}>
      <div className={styles.content}>
        <h1 className={styles.title}>Sign In to Steradian Book</h1>

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

export default SignInSection
