import './product-card.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext2';

const ProductCard = ({ product }) => {
    const { name, price, imageUrl, alt } = product;
    const { addItemToCart } = useContext(CartContext);

    const handleClick = () => {
        addItemToCart(product)
    };

    return (
        <div className='product-card'>
            <img src={imageUrl} alt={`${name}, ${alt}`} />
            <div className='product-card__detail'>
                <span className='product-card__name'>{name}</span>
                <span className='product-card__price'>{price}</span>
            </div>
            <button className='btn btn--invert' onClick={handleClick}>Add to Cart</button>
        </div>
    )
}

export default ProductCard