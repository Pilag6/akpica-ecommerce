/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

// Icons
import { IoTrash } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

// Cart Context
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext.jsx";

const CartItem = ({ item }) => {
    const { removeFromCart, increaseQuantity, decreaseQuantity} = useContext(CartContext);

    return (
        <div className="sidebar-middle-items">
            {/* Image */}
            <Link className="sidebar-img" to={`/product/${item.id}`}>
                <img src={item.images[0]} alt="" />
            </Link>

            <div className="sidebar-content">
                <div className="sidebar-title">
                    {/* Title & Remove Icon*/}
                    <Link to={`/product/${item.id}`}>
                        {item.title.length > 25
                            ? `${item.title.slice(0, 20)}...`
                            : item.title}
                    </Link>

                    <IoTrash
                        onClick={() => removeFromCart(item.id)}
                        className="sidebar-title-icon"
                    />
                </div>

                <div className="sidebar-info">
                    <div className="sidebar-quantity">
                        <div onClick={() => decreaseQuantity(item.id)}  className="info-minus">
                            <FaMinusCircle />
                        </div>
                        <div className="info-quantity">{item.quantity}</div>
                        <div onClick={() => increaseQuantity(item.id)}  className="info-plus">
                            <FaPlusCircle />
                        </div>
                    </div>

                    <div className="info-price">${item.price}</div>
                    <div className="info-final-price">
                        ${parseFloat(item.price * item.quantity).toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
