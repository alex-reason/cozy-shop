import SignupForm from '../components/sign-up-form/SignupForm';
import SigninForm from '../components/sign-in-form/SigninForm';
import './styles/authentication.scss';

const Authentication = () => {
  return (
    <section className='authentication'>
      <SigninForm />
      <SignupForm />
    </section>
  )
}

export default Authentication;