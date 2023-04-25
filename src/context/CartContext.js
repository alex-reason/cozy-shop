import { createContext, useState } from "react";

// helper function to filter cart
const addToCart = (cartItems, productToAdd) => {
    const itemInCart = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (itemInCart) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    };

    return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const CartContext = createContext({
    cartOpen: false,
    setCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { }
});

export const CartProvider = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addToCart(cartItems, productToAdd))
    }

    const values = { cartOpen, setCartOpen, cartItems, addItemToCart };

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
};