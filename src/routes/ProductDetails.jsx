/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext.jsx";

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
        <div>
            <h1>{data.title}</h1>
            <h2>{data.description}</h2>
            <h3>ID: {data.id}</h3>
            <p>${data.price}</p>
            {data.images && data.images.length > 0 && (
                <img src={data.images[0]} alt="" />
            )}
            <Link to={"/"}>Go Home</Link>
            <br />
            <button onClick={() => addToCart(data, data.id)} className="card-btn">Add to Cart</button>
        </div>
    );
};

export default ProductDetails;
