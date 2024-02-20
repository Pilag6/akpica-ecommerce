import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext.jsx";
import Cards from "../components/Cards/Cards.jsx";

const Home = () => {
    const { onlyHome } = useContext(ProductContext);
    return (
        <>
            <section className="home-section">
                <h2>Home</h2>

                <div className="cards-container">
                    {onlyHome.map((item) => {
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
            </section>
        </>
    );
};

export default Home