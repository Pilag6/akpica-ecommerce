/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    // Add to Cart
    const addToCart = (product, id) => {
        const newItem = { ...product, quantity: 1 };

        const cartItem = cart.find((item) => item.id === id);

        if (cartItem) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: cartItem.quantity + 1 };
                } else {
                    return item;
                }
            });

            setCart(newCart);
        } else {
            setCart([...cart, newItem]);
        }
    };

    // Remove from Cart
    const removeFromCart = (id) => {
        const newCart = [...cart].filter((item) => item.id !== id);
        setCart(newCart);
    }



    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
