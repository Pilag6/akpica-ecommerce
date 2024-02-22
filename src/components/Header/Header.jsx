import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../contexts/SidebarContext.jsx";
import SearchBar from "../Search/SearchBar.jsx";
import { ProductContext } from "../../contexts/ProductContext.jsx";

// Router
import { Link, NavLink } from "react-router-dom";

// Styles
import "./Header.css";

// Icons
import { BsCart4 } from "react-icons/bs";
import { CartContext } from "../../contexts/CartContext.jsx";
import { FaChevronDown } from "react-icons/fa";

// Logo
import logo from "../../assets/logo-2.png";

const Header = () => {
    const { isOpen, setIsOpen } = useContext(SidebarContext);
    const { cart } = useContext(CartContext);
    const {productData} = useContext(ProductContext);

    const [scrollNavbar, setScrollNavbar] = useState(window.scrollY)
    const [isVisible, setIsVisible] = useState(true)

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

    
      
      console.log("scroll navbar", scrollNavbar);

    return (
        <div className={`header ${isVisible ? "nav-visible" : "nav-hidden"}`}>
            <Link className="header-logo" to={"/"}>
                <img src={logo} alt="" />
            </Link>

            {/* SEARCH BAR */}

            <div className="header-search">
                <SearchBar placeholder="Find your product..." data={productData} />
            </div>

            <nav className="header-nav">
                <NavLink to={"/women"}>Women</NavLink>
                <NavLink to={"/men"}>Men</NavLink>
                <NavLink to={"/tech"}>Tech</NavLink>
                <NavLink to={"/home-deco"}>Deco</NavLink>

                <div className="dropdown">
                    Others <FaChevronDown className="fa-angle-down" />
                    <div className="nav-others">
                        <NavLink to={"/beauty"}>Beauty</NavLink>
                        <NavLink to={"/sunglasses"}>Sunglasses</NavLink>
                        <NavLink to={"/accessories"}>Accessories</NavLink>
                    </div>
                </div>
            </nav>

            <div className="header-cart" onClick={() => setIsOpen(!isOpen)}>
                <BsCart4 />
                <span className="header-cart-span">{cart.length}</span>
            </div>
        </div>
    );
};

export default Header;
