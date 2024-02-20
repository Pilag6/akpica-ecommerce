import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext.jsx";
import Cards from "../components/Cards/Cards.jsx";

const Men = () => {
    const { onlyMen } = useContext(ProductContext);
    return (
        <>
            <section className="men-section">
                <h2>Men</h2>

                <div className="cards-container">
                    {onlyMen.map((item) => {
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
            </section>
        </>
    );
};

export default Men;
