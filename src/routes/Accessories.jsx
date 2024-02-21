import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext.jsx";
import Cards from "../components/Cards/Cards.jsx";

const Accessories = () => {
    const { onlyAccessories } = useContext(ProductContext);
    return (
        <>
            <section className="accessories-section product-section">
                <h2 className="product-section-title">Accessories</h2>

                <div className="cards-container">
                    {onlyAccessories.map((item) => {
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

export default Accessories;
