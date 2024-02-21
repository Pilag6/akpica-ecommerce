import { useContext } from "react";
import { SidebarContext } from "../../contexts/SidebarContext.jsx";

// Router
import { Link, NavLink } from "react-router-dom";

// Styles
import "./Header.css";

// Icons
import { BsCart4 } from "react-icons/bs";
import { CartContext } from "../../contexts/CartContext.jsx";

// Logo

import logo from "../../assets/logo-2.png";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { cart } = useContext(CartContext)
  return (
    <div className="header">
      <Link className="header-logo" to={"/"}>
        <img src={logo} alt="" />
      </Link>

      <nav className="header-nav">
        <NavLink to={"/women"}>Women</NavLink>
        <NavLink to={"/men"}>Men</NavLink>
        <NavLink to={"/tech"}>Tech</NavLink>
        <NavLink to={"/home-deco"}>Deco</NavLink>
        <NavLink to={"/beauty"}>Beauty</NavLink>
        <NavLink to={"/sunglasses"}>Sunglasses</NavLink>
        <NavLink to={"/accessories"}>Accessories</NavLink>
      </nav>

      <div className="header-cart" onClick={() => setIsOpen(!isOpen)}>
        <BsCart4 />
        <span className="header-cart-span">{cart.length}</span>
      </div>
    </div>
  );
};

export default Header;
