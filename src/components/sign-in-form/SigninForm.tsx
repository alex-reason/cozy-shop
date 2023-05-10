import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from "../../firebase/config";
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import FormInput from "../form-input/FormInput";
import './signin-form.scss';

const defaultFormFields = { email: '', password: '' };

const SigninForm = () => {
    const navigate = useNavigate();

    const logGoogleUser = async () => {
        await signInWithGooglePopup();
        navigate('/')
    };

    const [formFields, setFormFields] = useState(defaultFormFields);
    const [error, setError] = useState<null | string>(null);
    const { email, password } = formFields;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);

        try {
            await signInAuthUserWithEmailAndPassword(email, password);
            navigate('/')
        } catch (err) {
            if ((err as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
                setError('incorrect password for email');
            } else {
                setError(`user creation error: ${err}`)
            }
        } finally {
            setFormFields(defaultFormFields)
        }
    };

    return (
        <div className='signin'>
            <h2>Already have an account?</h2>
            <span>Sign in with email and password</span>
            <form className='signin__form' onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    required
                />

                <FormInput
                    label='Password'
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    required
                />

                <div className='signin__actions'>
                    <button className='btn btn--invert' type='submit'>
                        sign in
                    </button>
                    <button className='btn btn--blue' type='button' onClick={logGoogleUser}>
                        sign in with Google
                    </button>
                </div>
            </form>
            {error && <p className='error'>{error}</p>}
        </div>
    )
}

export default SigninForm