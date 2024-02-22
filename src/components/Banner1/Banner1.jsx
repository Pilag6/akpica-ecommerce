import "./Banner1.css";

import photo1 from "../../assets/photo1.jpg";
import { Link } from "react-router-dom";

const Banner1 = () => {
    return (
        <section className="banner-1">
            <article>
                <div className="banner-1-img">
                    <img
                        src={photo1}
                        alt=""
                    />
                </div>
                <div className="banner-1-content">
                    <h4>SUNGLASSES</h4>
                    <h3>SALE UP TO 50% OFF</h3>
                    <Link to={"/sunglasses"}>SHOP NOW</Link>
                    <hr />
                </div>
            </article>

            <article>
                <div className="banner-1-img">
                    <img
                        src="https://korando-demo.myshopify.com/cdn/shop/files/banner-style2_2.jpg?v=1613746893"
                        alt=""
                    />
                </div>
                <div className="banner-1-content">
                    <h4>DSLR CAMERAS</h4>
                    <h3>SALE UP TO 30% OFF</h3>
                    <a href="">SHOP NOW</a>
                    <hr />
                </div>
            </article>

            <article>
                <div className="banner-1-img">
                    <img
                        src="https://korando-demo.myshopify.com/cdn/shop/files/banner-style2_3.jpg?v=1613746893"
                        alt=""
                    />
                </div>
                <div className="banner-1-content">
                    <h4>WOMEN&aposS FASHION</h4>
                    <h3>SALE UP TO 40% OFF</h3>
                    <a href="">SHOP NOW</a>
                    <hr />
                </div>
            </article>
        </section>
    );
};

export default Banner1;
