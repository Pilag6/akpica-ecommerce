/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const [total, setTotal] = useState(0);

    const [quantity, setQuantity] = useState(0);

    // set quantity 

    useEffect(() => {
        const items = cart.reduce((acc, item) => {
            return acc + item.quantity;
        }, 0);

        setQuantity(items);
    }, [cart]);

    console.log(quantity);

    // Update Total on Cart Change

    useEffect(() => {
        const total = cart.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);

        setTotal(total);
    }, [cart]);

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
    };

    // Increase Quantity

    const increaseQuantity = (id) => {
        const cartItem = cart.find((item) => item.id === id);

        addToCart(cartItem, id);
    };

    // Decrease Quantity

    const decreaseQuantity = (id) => {
        const cartItem = cart.find((item) => item.id === id);

        if (cartItem.quantity > 1) {
            const newCart = [...cart].map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: cartItem.quantity - 1 };
                } else {
                    return item;
                }
            });

            setCart(newCart);
        } else {
            removeFromCart(id);
        }
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity,
                total,
                quantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
