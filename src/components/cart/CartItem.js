import './cart-item.scss';

const CartItem = ({ product }) => {
    const { name, quantity, imageUrl, alt, price } = product;

    return (
        <div className='cart-item'>
            <img src={imageUrl} alt={`${name}, ${alt}`} />
            <div className='cart-item__details'>
                <span className='cart-item__name'>{`${name} x ${quantity}`}</span>
                <span className='cart-item__price'>{`$${price * quantity}`}</span>
            </div>
        </div>
    )
}

export default CartItem