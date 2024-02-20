/* eslint-disable react/prop-types */
// Sidebar Context
import { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarContext.jsx";
import { CartContext } from "../../contexts/CartContext.jsx";

// Styles
import "./Sidebar.css";

// Icons
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Sidebar = () => {
    const { isOpen, handleClose } = useContext(SidebarContext);

    const { cart } = useContext(CartContext);

    return (
        <div className={`${!isOpen ? "" : "show-sidebar"} sidebar-container`}>
            <h1>Sidebar</h1>
            <div onClick={handleClose}>
                <FaArrowRightFromBracket />
            </div>

            <ul>
                {[...cart].map((item) => {
                    return (
                        <li key={item.id}>
                            {item.title} | {item.quantity}x
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Sidebar;
