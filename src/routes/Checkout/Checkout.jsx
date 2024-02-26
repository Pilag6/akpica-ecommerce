import { Link } from "react-router-dom";

// Context
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext.jsx";
import { ProductContext } from "../../contexts/ProductContext.jsx";

// Styles
import "./Checkout.css";

// Component
import Cards from "../../components/Cards/Cards.jsx";
import CartItem from "../../components/Sidebar/CartItem.jsx";

// Icons
import { AiFillPlusCircle } from "react-icons/ai";
import { MdDashboardCustomize } from "react-icons/md";
import { SlBasketLoaded } from "react-icons/sl";

const Checkout = () => {
    const { cart, total } = useContext(CartContext);
    const { allOfThem } = useContext(ProductContext);

    return (
        <div className="checkout-container">
            {cart.length > 0 ? (
                <div className="checkout-title">
                    <SlBasketLoaded />
                    <h2>Shopping Basket</h2>
                </div>
            ) : <div className="checkout-title">
            <SlBasketLoaded />
            <h2>Shopping Basket Empty</h2>
        </div>}

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
                    <Link className="sidebar-bottom-checkout" to={"/checkout"}>
                        PROCEED TO PAYMENT
                    </Link>
                </div>
            ) : null}

            {cart.length === 0 ? (
                <section className="product-section">
                    <h2 className="product-section-title">
                        <MdDashboardCustomize /> YOU MAY BE INTERESTED IN
                    </h2>

                    <div className="cards-container">
                        {allOfThem.slice(0, 8).map((item) => {
                            return (
                                <Cards
                                    key={item.id}
                                    product={item}
                                    category={
                                        item.category.startsWith("women")
                                            ? item.category
                                                  .toUpperCase()
                                                  .slice(7)
                                            : item.category.startsWith("men")
                                            ? item.category
                                                  .toUpperCase()
                                                  .slice(5)
                                            : item.category.startsWith("home")
                                            ? item.category
                                                  .toUpperCase()
                                                  .slice(5)
                                            : item.category.toUpperCase()
                                    }
                                    id={item.id}
                                    images={item.images[0]}
                                    title={item.title}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            );
                        })}
                    </div>
                    <Link className="see-more" to={"/"}>
                        See more products <AiFillPlusCircle />
                    </Link>
                </section>
            ) : null}
        </div>
    );
};

export default Checkout;
