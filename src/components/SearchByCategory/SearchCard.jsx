import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SearchCard = ({image, title, quantity, link}) => {
    return (
        <Link to={link}>
            <article className="category-article">
                <div className="category-img">
                    <img src={image} alt="" />
                </div>
                <h3 className="category-title">{title}</h3>
                <p className="category-quantity">{quantity} Products</p>
            </article>
        </Link>
    );
};

export default SearchCard;
