/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

// Create the Context

import { createContext } from "react";

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const [productData, setProductData] = useState([]);

    const MAIN_URL = "https://dummyjson.com/products/?limit=100";

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(MAIN_URL);
                const dataFetched = await response.json();
                // console.log(dataFetched.products);
                setProductData(dataFetched.products);
            } catch (error) {
                console.error("Something went wrong", error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ productData, setProductData }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;
