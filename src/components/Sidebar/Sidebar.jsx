/* eslint-disable react/prop-types */
// Sidebar Context
import { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarContext.jsx";
import { CartContext } from "../../contexts/CartContext.jsx";

// Styles
import "./Sidebar.css";

// Icons
import { FaArrowRightFromBracket } from "react-icons/fa6";

// Components
import CartItem from "./CartItem.jsx";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext.jsx";

const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);
    const { productData } = useContext(ProductContext);
    const { cart, total } = useContext(CartContext);

    return (
        <div className={`${!isOpen ? "" : "show-sidebar"} sidebar-container`}>
            <div className="sidebar-top">
                <h3>Products in your Cart ({cart.length})</h3>
                <div onClick={handleClose}>
                    <FaArrowRightFromBracket />
                </div>
            </div>

            {cart.length > 0 ? (
                <div className="sidebar-middle">
                    {[...cart].map((item) => {
                        return <CartItem key={item.id} item={item} />;
                    })}
                </div>
            ) : null}

            {cart.length > 0 ? (
                <div className="sidebar-bottom">
                    <div className="sidebar-total-price">
                        Total: <span>${total}.-</span>
                    </div>
                    <Link className="sidebar-bottom-checkout" to={"/"}>
                        CHECKOUT
                    </Link>
                </div>
            ) : null}

            {cart.length === 0 ? (
                <div className="sidebar-empty">
                    <h3>Your cart is empty</h3>

                    <h4>You may like</h4>
                    <div className="sidebar-may-like">
                        {productData.slice(0, 4).map((product) => {
                            return (
                                <Link
                                    key={product.id}
                                    to={`/product/${product.id}`}
                                >
                                    <div className="sidebar-may-like-item">
                                        <img src={product.images[0]} alt="" />
                                        <div className="sidebar-may-like-content">
                                            <h3 className="sidebar-may-like-title">
                                                {product.title.length > 15
                                                    ? `${product.title.slice(
                                                          0,
                                                          20
                                                      )}...`
                                                    : product.title}
                                            </h3>
                                            <h3 className="sidebar-may-like-price">
                                                ${product.price}
                                            </h3>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}

                        <Link to={"/"}>
                            Go to the shop and find some products
                        </Link>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Sidebar;
