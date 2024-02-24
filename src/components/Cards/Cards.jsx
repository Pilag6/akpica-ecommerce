/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// React Icons
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

// Styles
import "./Cards.css";

// Cart Context
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext.jsx";

const Cards = ({ id, images, title, category, price, rating, product }) => {
    const { cart, addToCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    

    // console.log(product)
    return (
        <>
            <article className="card-article">
                <div className="card-img">
                    <img src={images} alt="" />
                    <p className="card-category">{category}</p>
                </div>

                <Link className="card-title" to={`/product/${id}`}>
                    <h3 className="card-title-content">{title}</h3>
                </Link>

                <p className="card-rating">
                    {rating > 4.75 ? (
                        <>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </>
                    ) : rating > 4.5 ? (
                        <>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </>
                    ) : rating > 4.25 ? (
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

                    <sup> ({rating})</sup>
                </p>

                <div className="card-price-btn">
                    <p className="card-price">${price}.-</p>
                    {/* <button onClick={() => addToCart(product, id)} className="card-btn">Add to Cart</button> */}

                    {cart.find(item => item.id === id) ? (
                        <div className="btn-card-info">
                            <div className="btn-card-quantity">
                                <div onClick={() => decreaseQuantity(id)} className="info-minus">
                                    <FaMinusCircle />
                                </div>
                                <div className="info-quantity">{cart.find(item => item.id === id).quantity}</div>
                                <div onClick={() => increaseQuantity(id)} className="info-plus">
                                    <FaPlusCircle />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <button onClick={() => addToCart(product, id)} className="card-btn">Add to Cart</button>
                    )}
                </div>
            </article>
        </>
    );
};

export default Cards;
