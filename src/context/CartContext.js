import { createContext, useState } from "react";

// ------ helper functions to filter and update cart ------ //
// ADD item to cart or increase quantity
const addToCart = (cartItems, productToAdd) => {
    const itemInCart = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (itemInCart) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    };

    return [...cartItems, { ...productToAdd, quantity: 1 }]
};
// REMOVE item from cart or decrease quantity
const removeFromCart = (cartItems, productToUpdate) => {
    const itemInCart = cartItems.find((cartItem) => cartItem.id === productToUpdate.id);

    // if cartItem quantity === 1; remove item
    if (itemInCart.quantity === 1) {
        return cartItems.filter(item => (item.id !== productToUpdate.id))
    }

    return cartItems.map((cartItem) => cartItem.id === productToUpdate.id ?
        { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    )
};
// CLEAR item from cart
const clearCart = (cartItems, productToClear) => {
    return cartItems.filter(item => (item.id !== productToClear.id))
}

// ------ Exports for context and provider ------  //

export const CartContext = createContext({
    cartOpen: false,
    setCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    clearItemFromCart: () => { },
});

export const CartProvider = ({ children }) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addToCart(cartItems, productToAdd))
    };

    const removeItemFromCart = (productToUpdate) => {
        setCartItems(removeFromCart(cartItems, productToUpdate))
    };

    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCart(cartItems, productToClear))
    };

    const values = { cartOpen, setCartOpen, cartItems, addItemToCart, removeItemFromCart, clearItemFromCart };

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
};