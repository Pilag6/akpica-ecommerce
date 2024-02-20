import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext.jsx";
import Cards from "../components/Cards/Cards.jsx";

const Tech = () => {
    const { onlyTech } = useContext(ProductContext);
    return (
        <>
            <section className="tech-section">
                <h2>Tech</h2>

                <div className="cards-container">
                    {onlyTech.map((item) => {
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

export default Tech;
