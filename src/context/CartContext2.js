import { createContext, useReducer } from "react";

// ------------ HELPER FUNCTIONS ------------ //
// ADD item to cart or increase quantity
const addToCart = (cartItems, productToAdd) => {
    const itemInCart = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
    if (itemInCart) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?
            { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};
// REMOVE item from cart or decrease quantity
const removeFromCart = (cartItems, productToUpdate) => {
    const itemInCart = cartItems.find((cartItem) => cartItem.id === productToUpdate.id);
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
};

// ------------ CONTEXT and PROVIDER ------------  //
export const CartContext = createContext();

const CartReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_CART':
            return { ...state, cartItems: action.payload }
        case 'OPEN_CLOSE_CART':
            return {...state, cartOpen: action.payload}
        default:
            throw new Error('unhandled type in cartReducer')
    }
};

export const CartProvider = ({ children }) => {
    const [{ cartItems, cartOpen }, dispatch] = useReducer(CartReducer, {
        cartOpen: false,
        cartItems: []
    });

    const addItemToCart = (productToAdd) => {
        const updatedCart = addToCart(cartItems, productToAdd)
        dispatch({ type: 'UPDATE_CART', payload: updatedCart })
    };

    const removeItemFromCart = (productToUpdate) => {
        const updatedCart = removeFromCart(cartItems, productToUpdate)
        dispatch({ type: 'UPDATE_CART', payload: updatedCart })
    };

    const clearItemFromCart = (productToClear) => {
        const updatedCart = clearCart(cartItems, productToClear)
        dispatch({ type: 'UPDATE_CART', payload: updatedCart })
    };

    const openOrCloseCart = (bool) => {
        dispatch({ type: 'OPEN_CLOSE_CART', payload: bool })
    };

    const emptyCart = () => {
        dispatch({ type: 'UPDATE_CART', payload: [] })
    }

    const values = { cartItems, cartOpen, openOrCloseCart, addItemToCart, removeItemFromCart, clearItemFromCart, emptyCart }

    return (
        <CartContext.Provider value={values}>
            {children}
        </CartContext.Provider>
    )
};