import { useContext } from "react";
import { ProductsContext } from '../context/ProductsContext';
import ProductCard from "../components/product-card/ProductCard";
import './styles/shop.scss'

const Shop = () => {
  const { products } = useContext(ProductsContext);

  const renderedShop = products.map((item) => (<ProductCard product={item} key={item.id}/>));

  return (
    <section className='shop'>
      {renderedShop}
    </section>
  )
};

export default Shop;