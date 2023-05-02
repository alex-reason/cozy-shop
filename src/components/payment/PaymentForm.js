import { BillingProvider } from '../../context/BillingContext';
import Shipping from './Shipping';
import Billing from './Billing';
import './payment-form.scss';

const PaymentForm = () => {

    return (
        <div className='payment-form'>
            <h2>Shipping and Billing Details</h2>
            <BillingProvider>
                <div className='payment-form__sections'>
                    <Shipping />
                    <Billing />
                </div>
            </BillingProvider>
        </div>
    )
}

export default PaymentForm