import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocs } from '../firebase/config'

export const ProductsContext = createContext({
    products: {},
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState({});

    useEffect(() => {
        const getCategories = async () => {
            const res = await getCategoriesAndDocs('categories')
            setProducts(res);
        };
        getCategories();
    }, [])

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}