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

const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);

    const { cart } = useContext(CartContext);

    return (
        <div className={`${!isOpen ? "" : "show-sidebar"} sidebar-container`}>
            <div className="sidebar-top">
                <h3>Products in your Cart ({cart.length})</h3>
                <div onClick={handleClose}>
                    <FaArrowRightFromBracket />
                </div>
            </div>

            <div className="sidebar-middle">
                {[...cart].map((item) => {
                    return (
                        <CartItem key={item.id} item={item} />
                    );
                })}
            </div>
        </div>
    );
};

export default Sidebar;
