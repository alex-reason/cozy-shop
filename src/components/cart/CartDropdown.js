import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';
import './cart-dropdown.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const renderedCartItems = cartItems.map(item => <CartItem product={item} key={item.id} />)

  return (
    <div className='cart-dropdown'>
      <div className='cart-dropdown__items'>
        {renderedCartItems}
      </div>
      <button className='btn btn--normal'>Checkout</button>
    </div>
  )
}

export default CartDropdown