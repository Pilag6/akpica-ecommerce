//Context
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext.jsx";

// Component
import Cards from "../../components/Cards/Cards.jsx";

// Style
import "./NotFound.css";

// Icons
import { AiFillPlusCircle } from "react-icons/ai";
import { MdDashboardCustomize } from "react-icons/md";
import { Link } from "react-router-dom";

// Images
import notFound from "../../assets/not-found.svg";

const NotFound = () => {
    const { allOfThem } = useContext(ProductContext);
    return (
        <div className="not-found">
            <hr />
            <div className="not-found-title">
                <img src={notFound} alt="" />
                <h2>Houston, We Have a Problem</h2>
            </div>

            <p className="not-found-p">
                Looks like the page you&apos;re searching for has embarked on a
                cosmic journey without us. While we wait for ground control to
                reestablish contact, why not explore our stellar collection of
                products? Spacewalk through our featured collections and
                discover stellar finds! 🚀🌌
            </p>

            <hr />

            <section className="product-section">
                <h2 className="product-section-title">
                    <MdDashboardCustomize /> YOU MAY BE INTERESTED IN
                </h2>

                <div className="cards-container">
                    {allOfThem.slice(0, 8).map((item) => {
                        return (
                            <Cards
                                key={item.id}
                                product={item}
                                category={
                                    item.category.startsWith("women")
                                        ? item.category.toUpperCase().slice(7)
                                        : item.category.startsWith("men")
                                        ? item.category.toUpperCase().slice(5)
                                        : item.category.startsWith("home")
                                        ? item.category.toUpperCase().slice(5)
                                        : item.category.toUpperCase()
                                }
                                id={item.id}
                                images={item.images[0]}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                            />
                        );
                    })}
                </div>
                <Link className="see-more" to={"/"}>
                    See more products <AiFillPlusCircle />
                </Link>
            </section>
        </div>
    );
};

export default NotFound;
