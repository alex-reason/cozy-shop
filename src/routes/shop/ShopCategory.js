import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import ProductCard from "../../components/product-card/ProductCard";
import '../styles/shop.scss'

const ShopCategory = () => {
    const { category } = useParams();
    const { products } = useContext(ProductsContext);
    const [currProducts, setCurrProducts] = useState(products[category]);

    useEffect(() => {
        setCurrProducts(products[category])
    }, [category, products]);

    const renderedProducts = currProducts && currProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
    ));

    return (
        <div className='shop-category'>
            <h2>{category}</h2>
            {renderedProducts}
        </div>
    )
}

export default ShopCategory