import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

//styles
import "./Navbar.css";

//icon
import { FaBarsStaggered } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  //for menu bar
  const [isToggle, setIsToggle] = useState(false);
  //for viewport--comment to delete later
  const [vpWidth, setVpWidth] = useState(window.innerWidth);

  const handleToggle = () => {
    setIsToggle(!isToggle);
  };

  useEffect(() => {
    const changeViewPort = () => {
      setVpWidth(window.innerWidth);
    };
    window.addEventListener("resize", changeViewPort);

    return () => {
      window.removeEventListener("resize", changeViewPort);
    };
  }, []);

  return (
    <>
      {vpWidth > 700 && (
        <nav className="header-nav">
          <div className="navbar-wrapper">
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
          </div>
        </nav>
      )}

      {vpWidth <= 700 && (
        <div className={`${isToggle ? "" : "show-toggle"} navbar-container`}>
          {isToggle && (
            <nav className="header-nav">
              <div className="navbar-wrapper">
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
              </div>
            </nav>
          )}
          <div className="bar-btn" onClick={handleToggle}>
            <FaBarsStaggered />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
