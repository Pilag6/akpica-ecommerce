import "./Footer.css";
import mainLogo from "../../assets/logo-2.png";
import { Link } from "react-router-dom";

//favcons
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";
import { SiAmericanexpress } from "react-icons/si";
import { SiKlarna } from "react-icons/si";
import { FaBitcoin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer-main-container">
        <div className="footer-middle-container">

          <div className="footer-store-info">
            <div className="footer-logo">
              <Link to={"/"}>
                <img src={mainLogo} alt="akpica store logo" />
              </Link>
            </div>
            <p className="footer-address">
              131 Galtymore rd, County Dublin, Ireland
            </p>
            <p className="footer-email">akpica@email.com</p>
            <p className="footer-tel">+353 123 456 789</p>

            <div className="footer-favicons">
              <FaFacebook />
              <FaTwitter />

              <FaInstagram />
              <FaTiktok />
              <FaYoutube />
            </div>
          </div>

          <div className="footer-wrapper">
            <div className="footer-company-column">
              <h6>COMPANY</h6>
              <ul>
                <li>About us</li>
                <li>Careers</li>
                <li>Affiliates</li>
                <li>Blog</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="footer-shop-column">
              <h6>SHOP</h6>
              <ul>
                <li>
                  <Link to={"women"}>Women</Link>
                </li>
                <li>
                  <Link to={"men"}>Men</Link>
                </li>
                <li>
                  <Link to={"tech"}>Tech</Link>
                </li>
                <li>
                  <Link to={"home-deco"}>Home-Deco</Link>
                </li>
                <li>
                  <Link to={"beauty"}>Beauty</Link>
                </li>
                <li>
                  <Link to={"sunglasses"}>Sunglasses</Link>
                </li>
                <li>
                  <Link to={"accessories"}>Acessories</Link>
                </li>
              </ul>
            </div>
            <div className="footer-help-column">
              <h6>HELP</h6>
              <ul>
                <li>Customer Service</li>
                <li>Find a Store</li>
                <li>Legal and Privacy</li>
                <li>Gift Card</li>
              </ul>
            </div>
          </div>

          <div className="footer-subscribe-column">
            <h6>SUBSCRIBE</h6>
            <p>Get the latest news, new trends, promotions and much more!</p>
            <form className="footer-form">
              <input
                className="footer-input"
                type="email"
                name="email"
                placeholder="Your email address"
              />
              <input
                className="footer-submit"
                type="submit"
                value="JOIN"
              ></input>
            </form>
            <div className="footer-payment-methods">
              <p className="footer-secure-name">Secure Payments</p>
              <div className="footer-payment-icons">
                <FaPaypal />
                <FaCcVisa />
                <SiAmericanexpress />
                <SiKlarna />
                <FaBitcoin />
              </div>
            </div>
          </div>
          
        </div>
      </footer>
    </>
  );
};

export default Footer;
