/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// React Icons
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

// Styles
import "./Cards.css";

const Cards = ({ id, images, title, category, price, rating }) => {
    return (
        <>
            <article className="card-article">
                <div className="card-img">
                    <img src={images} alt="" />
                    <p className="card-category">{category}</p>
                </div>

                <Link className="card-title" to={`/product/${id}`}>
                    <h2 className="card-title-content">{title}</h2>
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
                            <FaStarHalf />
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
                            <FaStarHalf />
                        </>
                    )}

                    <sup> ({rating})</sup>
                </p>

                <div className="card-price-btn">
                    <p className="card-price">${price}</p>
                    <button className="card-btn">Add to Cart</button>
                </div>
            </article>
        </>
    );
};

export default Cards;
