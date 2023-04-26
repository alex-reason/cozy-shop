import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import './styles/checkout.scss';

const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
    const cartTotal =  cartItems.reduce((acc, currVal) => acc + (currVal.price * currVal.quantity), 0);

    const renderedItems = cartItems.map(item => (
        <div className='checkout__row' key={item.id}>
            <img src={item.imageUrl} alt={`${item.name}, ${item.alt}`} />
            <p>{item.name}</p>
            <div className='checkout__quantity'>
                <AiOutlineMinus onClick={() => { removeItemFromCart(item) }} />
                <p>{item.quantity}</p>
                <AiOutlinePlus onClick={() => { addItemToCart(item) }} />
            </div>
            <p>{item.price}</p>
            <p className='checkout__remove' onClick={() => clearItemFromCart(item)}>X</p>
        </div>
    ))

    const renderedHeadings = ["Product", "Description", "Quantity", "Price", "Remove"].map(heading => (
        <h3 key={heading}>{heading}</h3>
    ))

    return (
        <section className='checkout'>
            <h2>Checkout</h2>
            <div className='checkout__table'>
                <div className='checkout__headings'>{renderedHeadings}</div>
                {renderedItems}
                <div className='checkout__total'>
                    <span>Total: </span>
                    <span>${cartTotal}</span>
                </div>
            </div>

        </section>
    )
}

export default Checkout