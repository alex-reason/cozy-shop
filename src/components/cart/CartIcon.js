import { useContext } from "react";
import { CartContext } from "../../context/CartContext2";
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg';

import './cart-icon.scss';

const CartIcon = () => {
    const { cartOpen, openOrCloseCart, cartItems } = useContext(CartContext);
    let cartCount = cartItems.reduce((acc, currVal) => acc + currVal.quantity, 0)

    return (
        <div className='cart-icon' onClick={() => openOrCloseCart(!cartOpen)}>
            <ShoppingIcon />
            <span className='cart-icon__count'>{cartCount}</span>
        </div>
    )
};

export default CartIcon;