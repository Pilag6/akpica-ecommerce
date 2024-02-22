import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../contexts/SidebarContext.jsx";
import { ProductContext } from "../../contexts/ProductContext.jsx";
import { CartContext } from "../../contexts/CartContext.jsx";

// Router
import { Link } from "react-router-dom";

// Styles
import "./Header.css";

// Icons
import { BsCart4 } from "react-icons/bs";

// Logo
import logo from "../../assets/logo-2.png";

// Components
import SearchBar from "../Search/SearchBar.jsx";
import Navbar from "./Navbar.jsx";

const Header = () => {
    const { isOpen, setIsOpen, handleToggle } = useContext(SidebarContext);
    const { quantity } = useContext(CartContext);

    //navbar--comment to be remove later
    const [scrollNavbar, setScrollNavbar] = useState(window.scrollY);
    const [isVisible, setIsVisible] = useState(true);
    const { productData } = useContext(ProductContext);

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            setIsVisible(scroll < scrollNavbar || scroll === 0);
            setScrollNavbar(scroll);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollNavbar]);

    return (
        <div className={`header ${isVisible ? "nav-visible" : "nav-hidden"}`}>
            <Link onClick={handleToggle} className="header-logo" to={"/"}>
                <img src={logo} alt="" />
            </Link>

            {/* SEARCH BAR */}

            <div className="header-search">
                <SearchBar
                    placeholder="Find your product..."
                    data={productData}
                />
            </div>

            {/* navbar */}
            <Navbar />

            <div className="header-cart" onClick={() => setIsOpen(!isOpen)}>
                <BsCart4 />
                <span className="header-cart-span">{quantity}</span>
            </div>
        </div>
    );
};

export default Header;
