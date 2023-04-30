import { useState } from "react";
import FormInput from "../form-input/FormInput";
const defaultFormFields = { customerName: '', streetAddress: '', city: '', state: '', zipCode: '' };

const Shipping = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { customerName, streetAddress, city, state, zipCode } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <form className='payment-form__form'>
            <FormInput
                label='Name'
                name='customerName'
                value={customerName}
                onChange={handleChange}
                required
            />

            <FormInput
                label='Street Address'
                name='streetAddress'
                value={streetAddress}
                onChange={handleChange}
                required
            />

            <FormInput
                label='City'
                name='city'
                value={city}
                onChange={handleChange}
                required
            />

            <FormInput
                label='State'
                name='state'
                value={state}
                onChange={handleChange}
                required
            />

            <FormInput
                label='Zipcode'
                name='zipCode'
                value={zipCode}
                onChange={handleChange}
                required
            />
        </form>
    )
}

export default Shipping