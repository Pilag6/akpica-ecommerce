/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext.jsx";

// Styles
import "./ProductDetails.css";

// React Icons
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

// Components
import Banner1 from "../../components/Banner1/Banner1.jsx";
import ProductDescriptions from "./ProductDescriptions.jsx";
import Info from "../../components/Info/Info.jsx";

const ProductDetails = () => {
    const { id } = useParams();

    const { cart, addToCart, increaseQuantity, decreaseQuantity } =
        useContext(CartContext);

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

    const [mainImage, setMainImage] = useState("");

    const handleImageClick = (img) => {
        setMainImage(img);
    };

    useEffect(() => {
        if (data.images && data.images.length > 0) {
            setMainImage(data.images[0]);
        }
    }, [data]);

    return (
        <>
            <div className="product-container">
                <div className="product-img-box">
                    {data.images && data.images.length > 1 && (
                        <div className="product-imgs">
                            {data.images.slice(0, 4).map((img, index) => (
                                <img
                                    key={index}
                                    className="product-img"
                                    src={img}
                                    alt=""
                                    onMouseOver={() => handleImageClick(img)}
                                />
                            ))}
                        </div>
                    )}
                    {data.images && data.images.length > 0 && (
                        <div className="main-product-img">
                            <img src={mainImage} alt="" />
                        </div>
                    )}
                </div>

                <div className="product-details-box">
                    <Link className="home-link" to={"/"}>
                        Home / The Shop
                    </Link>

                    <h1 className="product-details-title">{data.title}</h1>

                    <p className="card-rating">
                        {data.rating > 4.75 ? (
                            <>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </>
                        ) : data.rating > 4.5 ? (
                            <>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </>
                        ) : data.rating > 4.25 ? (
                            <>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </>
                        ) : (
                            <>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStarHalfAlt />
                            </>
                        )}

                        <sup> ({data.rating})</sup>
                    </p>

                    <p className="product-details-brand">
                        <span>{data.brand}</span>
                    </p>
                    <h2 className="product-details-price">${data.price}.-</h2>

                    <p className="product-details-description">
                        {data.description}
                    </p>
                    <div className="product-details-idStock">
                        <h3 className="product-details-id">
                            | ID: {data.id} |
                        </h3>
                        <p className="product-details-stock">
                            Only{" "}
                            {data.stock -
                                (cart.find((item) => item.id === data.id)
                                    ?.quantity || 0)}{" "}
                            left
                        </p>
                    </div>

                    {cart.find((item) => item.id === data.id) ? (
                        <div className="btn-info">
                            <div className="btn-quantity">
                                <div
                                    onClick={() => decreaseQuantity(data.id)}
                                    className="info-minus"
                                >
                                    <FaMinusCircle />
                                </div>
                                <div className="info-quantity">
                                    {
                                        cart.find((item) => item.id === data.id)
                                            .quantity
                                    }
                                </div>
                                <div
                                    onClick={() => increaseQuantity(data.id)}
                                    className="info-plus"
                                >
                                    <FaPlusCircle />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <button
                            onClick={() => addToCart(data, data.id)}
                            className="product-card-btn"
                        >
                            Add to Cart
                        </button>
                    )}
                </div>
            </div>

            <ProductDescriptions desc={data.description} rev={data.stock}/>

            <Banner1 />
            <Info />
        </>
    );
};

export default ProductDetails;
