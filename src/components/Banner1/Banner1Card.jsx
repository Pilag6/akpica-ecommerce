/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Banner1Card = ({ image, title, sale, linkTo }) => {
    return (
        <article>
            <div className="banner-1-img">
                <img src={image} alt="" />
            </div>
            <div className="banner-1-content">
                <h4>{title}</h4>
                <h3>{sale}</h3>
                <Link to={linkTo}>SHOP NOW</Link>
                <hr />
            </div>
        </article>
    );
};

export default Banner1Card;
