import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from "../../firebase/config";
import FormInput from '../form-input/FormInput';
import './signup-form.scss';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignupForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const [error, setError] = useState(null);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        if (password !== confirmPassword) {
            setError('password does not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            await createUserDocFromAuth(user, { displayName });
        } catch (err) {
            if (err.code === 'auth/email-already-in-use') {
                setError('cannot create user; email already in use')
            } else console.log('user creation error')
        } finally {
            setFormFields(defaultFormFields);
        }

    };

    return (
        <div className='signup'>
            <h2>Don't have an account?</h2>
            <span>Sign up with email and password</span>
            <form className='signup__form' onSubmit={handleSubmit}>
                <FormInput
                    label='Display Name'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    required
                />

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

                <FormInput
                    label='Confirm Password'
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    required
                />

                <button type="submit" className='btn btn--normal'>Sign Up</button>
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    )
}

export default SignupForm;