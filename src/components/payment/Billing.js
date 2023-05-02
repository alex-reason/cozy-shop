import { useContext, useState } from "react";
import { BillingContext } from "../../context/BillingContext";
import { CartContext } from '../../context/CartContext2';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const Billing = () => {
    const { customerInfo, isReady } = useContext(BillingContext);
    const { cartItems, emptyCart } = useContext(CartContext);
    const cartTotalAmount = cartItems.reduce((acc, currVal) => acc + (currVal.price * currVal.quantity), 0);
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);

    const handlePayment = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessing(true);

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ amount: cartTotalAmount * 100 })
        }).then(res => res.json());

        const {
            paymentIntent: { client_secret },
        } = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: customerInfo.customerName,
                    address: {
                        line1: customerInfo.streetAddress,
                        city: customerInfo.city,
                        state: customerInfo.state,
                        postal_code: customerInfo.zipCode
                    }
                }
            }
        });

        setIsProcessing(false);

        if (paymentResult.error) {
            console.log(paymentResult.error)
        } else {
            if (paymentResult.paymentIntent.status === "succeeded") {
                alert("payment successful")
                emptyCart()
            }
        }
    };

    return (
        <form className='payment-form__card' onSubmit={handlePayment}>
            <CardElement />
            {isReady && <button className='btn btn--normal' disabled={isProcessing}>Pay now</button>}
        </form>
    );
};

export default Billing;