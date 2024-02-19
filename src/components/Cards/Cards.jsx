/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// React Icons
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";

// Styles
import "./Cards.css";

const Cards = ({product}) => {
  

    return (
        <>
            <article className="card-article">
                <div className="card-img">
                    <img src={product.images[0]} alt="" />
                    <p className="card-category">{product.category}</p>
                </div>

                <Link className="card-title" to={`/product/${product.id}`}>
                    <h2 className="card-title-content">{product.title}</h2>
                </Link>

                <p className="card-rating">
                    {product.rating > 4.75 ? (
                        <>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </>
                    ) : product.rating > 4.5 ? (
                        <>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalf />
                        </>
                    ) : product.rating > 4.25 ? (
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

                    <sup> ({product.rating})</sup>
                </p>

                <div className="card-price-btn">
                    <p className="card-price">${product.price}</p>
                    <button className="card-btn">Add to Cart</button>
                </div>
            </article>
        </>
    );
};

export default Cards;
