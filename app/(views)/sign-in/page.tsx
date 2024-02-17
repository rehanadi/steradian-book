import { FaRegEnvelope, FaGoogle } from 'react-icons/fa'

const SignInPage = () => {
  return (
    <section className="sign-in section-padding">
      <form>
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

        <button className="btn-google">
          <FaGoogle size={20} />
          <span>Continue with Google</span>
        </button>
      </form>

      <figure>
        <img src="/assets/images/sign-in.png" alt="Sign In" />
      </figure>
    </section>
  )
}

export default SignInPage