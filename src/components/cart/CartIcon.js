import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';


import './cart-icon.scss';

const CartIcon = () => {
    const { cartOpen, setCartOpen, cartItems } = useContext(CartContext);
    let cartCount = cartItems.reduce((acc, currVal) => acc + currVal.quantity, 0)

    return (
        <div className='cart-icon' onClick={() => setCartOpen(!cartOpen)}>
            <ShoppingIcon />
            <span className='cart-icon__count'>{cartCount}</span>
        </div>
    )
};

export default CartIcon;