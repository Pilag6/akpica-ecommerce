/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

// Utils function
import filterAndShuffle from "../utils/filterAndShuffle.js";

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


    // Funcion filter and shuffle

    const onlyWomen = filterAndShuffle(productData, ["women", "tops"]);
    const onlyMen = filterAndShuffle(productData, ["men"]);
    const onlyTech = filterAndShuffle(productData, ["smartphones", "laptops"]);
    const onlyBeauty = filterAndShuffle(productData, ["fragrances","skincare",]);
    const onlySunglasses = filterAndShuffle(productData, ["sunglasses"]);
    const onlyHome = filterAndShuffle(productData, ["home", "furniture", "lighting",]);
    const onlyAccessories = filterAndShuffle(productData, ["automotive", "motorcycle",]);

    return (
        <ProductContext.Provider
            value={{
                productData,
                setProductData,
                onlyWomen,
                onlyMen,
                onlyTech,
                onlyBeauty,
                onlyHome,
                onlyAccessories,
                onlySunglasses,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;
