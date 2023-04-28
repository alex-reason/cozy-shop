import { Route, Routes } from "react-router-dom";
import ShopCategories from './ShopCategories';
import ShopCategory from "./ShopCategory";

const Shop = () => {

  return (
    <Routes>
      <Route index element={<ShopCategories />} />
      <Route path=':category' element={<ShopCategory />} />
    </Routes>
  )
};

export default Shop;
