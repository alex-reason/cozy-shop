import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';
import App from './App';
import './index.scss';

const root = createRoot(document.querySelector('#root'));

root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </AuthContextProvider>
  </BrowserRouter>
);

