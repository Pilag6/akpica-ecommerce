import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext.jsx";

// Components
import Cards from "../components/Cards/Cards.jsx";
import { Link } from "react-router-dom";

const Home = () => {
    const {
        onlyWomen,
        onlyMen,
        onlyTech,
        onlyBeauty,
        onlyHome,
        onlyAccessories,
        onlySunglasses,
    } = useContext(ProductContext);

    return (
        <>
            {/* Women Section */}
            <section className="women-section product-section">
                <h2>Women</h2>

                <div className="cards-container">
                    {onlyWomen.slice(0, 4).map((item) => {
                        return (
                            <Cards
                                key={item.id}
                                product={item}
                                category={item.category.toUpperCase().slice(7)}
                                id={item.id}
                                images={item.images[0]}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                            />
                        );
                    })}
                </div>

                <Link to={"/women"}>See more products</Link>
            </section>

            {/* Men Section */}
            <section className="men-section product-section">
                <h2>Men</h2>

                <div className="cards-container">
                    {onlyMen.slice(0, 4).map((item) => {
                        return (
                            <Cards
                                key={item.id}
                                product={item}
                                category={item.category.toUpperCase().slice(5)}
                                id={item.id}
                                images={item.images[0]}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                            />
                        );
                    })}
                </div>
                <Link to={"/men"}>See more products</Link>
            </section>

            {/* Tech Section */}
            <section className="tech-section product-section">
                <h2>Tech</h2>

                <div className="cards-container">
                    {onlyTech.slice(0, 4).map((item) => {
                        return (
                            <Cards
                                key={item.id}
                                product={item}
                                category={item.category.toUpperCase()}
                                id={item.id}
                                images={item.images[0]}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                            />
                        );
                    })}
                </div>
                <Link to={"/tech"}>See more products</Link>
            </section>

            {/* Home Section */}
            <section className="home-section product-section">
                <h2>Home</h2>

                <div className="cards-container">
                    {onlyHome.slice(0, 4).map((item) => {
                        return (
                            <Cards
                                key={item.id}
                                product={item}
                                category={item.category.toUpperCase()}
                                id={item.id}
                                images={item.images[0]}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                            />
                        );
                    })}
                </div>
                <Link to={"/home-deco"}>See more products</Link>
            </section>

            {/* Beauty Section */}
            <section className="beauty-section product-section">
                <h2>Beauty</h2>

                <div className="cards-container">
                    {onlyBeauty.slice(0, 4).map((item) => {
                        return (
                            <Cards
                                key={item.id}
                                product={item}
                                category={item.category.toUpperCase()}
                                id={item.id}
                                images={item.images[0]}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                            />
                        );
                    })}
                </div>
                <Link to={"/beauty"}>See more products</Link>
            </section>

            {/* Sunglasses Section */}
            <section className="sunglasses-section product-section">
                <h2>Sunglasses</h2>

                <div className="cards-container">
                    {onlySunglasses.slice(0, 4).map((item) => {
                        return (
                            <Cards
                                key={item.id}
                                product={item}
                                category={item.category.toUpperCase()}
                                id={item.id}
                                images={item.images[0]}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                            />
                        );
                    })}
                </div>
                <Link to={"/sunglasses"}>See more products</Link>
            </section>

            {/* Accessories Section */}
            <section className="accesories-section product-section">
                <h2>Accesories</h2>

                <div className="cards-container">
                    {onlyAccessories.slice(0, 4).map((item) => {
                        return (
                            <Cards
                                key={item.id}
                                product={item}
                                category={item.category.toUpperCase()}
                                id={item.id}
                                images={item.images[0]}
                                title={item.title}
                                price={item.price}
                                rating={item.rating}
                            />
                        );
                    })}
                </div>
                <Link to={"/accessories"}>See more products</Link>
            </section>

        </>
    );
};

export default Home;
