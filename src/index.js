import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext2';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './stripe/Stripe';
import App from './App';
import './index.scss';

const root = createRoot(document.querySelector('#root'));

root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ProductsProvider>
        <CartProvider>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
        </CartProvider>
      </ProductsProvider>
    </AuthContextProvider>
  </BrowserRouter>
);

