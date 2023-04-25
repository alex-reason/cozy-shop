import { ChakraProvider } from '@chakra-ui/react';
import SignupForm from '../components/sign-up-form/SignupForm';
import SigninForm from '../components/sign-in-form/SigninForm';
import './styles/authentication.scss';

const Authentication = () => {
  return (
    <ChakraProvider>
      <section className='authentication'>
        <SigninForm />
        <SignupForm />
      </section>
    </ChakraProvider>
  )
}

export default Authentication;