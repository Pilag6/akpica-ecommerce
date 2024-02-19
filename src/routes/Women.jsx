import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext.jsx";
import Cards from "../components/Cards/Cards.jsx";

const Women = () => {
    const { onlyWomen } = useContext(ProductContext);
    return (
        <>
            <section className="women-section">
                <h2>Women</h2>

                <div className="cards-container">
                    {onlyWomen.map((item) => {
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
            </section>
        </>
    );
};

export default Women;
