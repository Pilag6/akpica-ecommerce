/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext.jsx";

// Styles

import "./ProductDetails.css"

const ProductDetails = () => {
    const { id } = useParams();

    const { addToCart } = useContext(CartContext);

    const [data, setData] = useState([]);

    const INDIVIDUAL_URL = "https://dummyjson.com/products/";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${INDIVIDUAL_URL}/${id}`);
                const dataFetched = await response.json();
                setData(dataFetched);
            } catch (error) {
                console.error("Something went wrong", error);
            }
        };

        fetchData();
    }, [id]);

    return (
       <>
    
       <main>
        <div className="product-container">
            <div className="product-img">
            {data.images && data.images.length > 0 && (
                <img className="main-product-img" src={data.images[0]} alt="" />
            )}</div>
            <h1 className="product-title">{data.title}</h1>
            <h2 className="product-description">{data.description}</h2>
            <h3 className="product-id">ID: {data.id}</h3>
            <p className="product-price">${data.price}</p>
            <Link className="home-link" to={"/"}>Go Home</Link>
            <br />
            <button onClick={() => addToCart(data, data.id)} className="card-btn">Add to Cart</button>
        </div>
        </main>
        </>
    );
};

export default ProductDetails;
