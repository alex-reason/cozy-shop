import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../context/CartContext2';
import CartItem from './CartItem';
import './cart-dropdown.scss';

const CartDropdown = () => {
  const navigate = useNavigate()
  const { cartItems, openOrCloseCart, cartOpen } = useContext(CartContext);
  const renderedCartItems = cartItems.map(item => <CartItem product={item} key={item.id} />)
  const handleClick = () => {
    navigate('checkout');
    openOrCloseCart(!cartOpen)
  }

  return (
    <div className='cart-dropdown'>
      <div className='cart-dropdown__items'>
        {renderedCartItems}
      </div>
      <button className='btn btn--normal' onClick={handleClick}>Checkout</button>
    </div>
  )
}

export default CartDropdown