import { Link } from "react-router-dom";
import ProductCard from "../product-card/ProductCard";
import './category-preview.scss';

const CategoryPreview = ({ categoryTitle, products }) => {

    const renderedPreview = products
        .filter((_, idx) => idx < 4)
        .map((product) => (<ProductCard key={product.id} product={product} />))

    return (
        <div className='category-preview'>
            <h2>
                <Link to={`/shop/${categoryTitle}`}>
                <span className='category-preview__title'>{categoryTitle}</span>
                </Link>
            </h2>

            <div className='category-preview__products'>
                {renderedPreview}
            </div>

            <Link to={`/shop/${categoryTitle}`} className='btn btn--normal'>see all</Link>
        </div>
    )
}

export default CategoryPreview