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
                setProductData(dataFetched.products);
            } catch (error) {
                console.error("Something went wrong", error);
            }
        };

        fetchProducts();
    }, []);

    // Filters (Women, Men, Tech, Home, etc)

    // Only Womens Products

    const filteredWomen = productData.filter((item) => {
        return item.category.toLowerCase().startsWith("women");
    });

    const onlyWomen = [...filteredWomen].sort(() => Math.random() - 0.5);

    // Filtered Womens Products

    const filteredMen = productData.filter((item) => {
        return item.category.toLowerCase().startsWith("men");
    });

    const onlyMen = [...filteredMen].sort(() => Math.random() - 0.5);


    return (
        <ProductContext.Provider
            value={{ productData, setProductData, onlyWomen, onlyMen }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;
