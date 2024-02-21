import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext.jsx";
import Cards from "../components/Cards/Cards.jsx";

const Women = () => {
    const { onlyWomen } = useContext(ProductContext);
    return (
        <>
            <section className="women-section product-section">
                <h2 className="product-section-title">Women</h2>

                <div className="cards-container">
                    {onlyWomen.map((item) => {
                        return (
                            <Cards
                                key={item.id}
                                product={item}
                                category={
                                    item.category.startsWith("women")
                                        ? item.category.toUpperCase().slice(7)
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
            </section>
        </>
    );
};

export default Women;
