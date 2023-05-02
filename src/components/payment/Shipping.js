import { useContext, useState } from "react";
import { BillingContext } from "../../context/BillingContext";
import FormInput from "../form-input/FormInput";

const Shipping = () => {
    const { customerInfo, setCustomerInfo, setIsReady } = useContext(BillingContext);
    const [formFields, setFormFields] = useState(customerInfo);
    const { customerName, streetAddress, city, state, zipCode } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setCustomerInfo(formFields);
        setIsReady(true);
        console.log(customerInfo)
    };

    return (
        <form className='payment-form__form' onSubmit={handleSubmit}>
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
            <button className="btn">Confirm Shipping Info</button>
        </form>
    )
}

export default Shipping