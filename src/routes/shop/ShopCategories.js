import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

const ShopCategories = () => {
  const { products } = useContext(ProductsContext);

  const renderedShop = Object.keys(products).map((categoryTitle) => {
    const productsArr = products[categoryTitle];
    return (<CategoryPreview key={categoryTitle} categoryTitle={categoryTitle} products={productsArr} />)
  })

  return (
    <section className='shop-categories'>
      {renderedShop}
    </section>
  )
};

export default ShopCategories;
