import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Billing = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handlePayment = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const response = await fetch('./netlify/functions/createPaymentIntent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: 10000 })
        }).then(res => res.json());

        console.log(response)
    }

    return (
        <form className='payment-form__card' onSubmit={handlePayment}>
            <CardElement />
            <button className='btn btn--normal'>Pay now</button>
        </form>
    )
}

export default Billing