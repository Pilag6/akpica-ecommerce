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
    
     
        <div className="product-container">
            <div className="product">
            <div className="product-img-box">
            {data.images && data.images.length > 0 && (
                <img className="main-product-img" src={data.images[0]} alt="" />
            )}</div>
            <div className="product-details-box">
            <Link className="home-link" to={"/"}>Home/The Shop</Link>
            <h1 className="product-details-title">{data.title}</h1>
            <h2 className="product-details-price">${data.price}</h2>
            <p className="product-details-description">{data.description}</p>
            <h3 className="product-details-id">ID: {data.id}</h3>
            <br />
            <button onClick={() => addToCart(data, data.id)} className="card-btn">Add to Cart</button>
            </div>
            </div>
        </div>
      
        </>
    );
};

export default ProductDetails;
