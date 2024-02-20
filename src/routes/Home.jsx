import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext.jsx";

// Components
import Cards from "../components/Cards/Cards.jsx";
import { Link } from "react-router-dom";

const Home = () => {
    const { onlyWomen, onlyMen } = useContext(ProductContext);

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
                        return <Cards key={item.id}
                        product={item}
                        category={item.category.toUpperCase().slice(5)}
                        id={item.id}
                        images={item.images[0]}
                        title={item.title}
                        price={item.price}
                        rating={item.rating} />;
                    })}
                </div>
            </section>

            <section>Tech</section>
            <section>Home</section>
            <section>Beauty</section>
        </>
    );
};

export default Home;
