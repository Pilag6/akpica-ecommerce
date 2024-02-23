import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext.jsx";

// Components
import Banner1 from "../components/Banner1/Banner1.jsx";
import Info from "../components/Info/Info.jsx";
import Cards from "../components/Cards/Cards.jsx";

const Men = () => {
    const { onlyMen } = useContext(ProductContext);
    return (
        <>
            <section className="men-section product-section">
                <h2 className="product-section-title">Men</h2>

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

            <Banner1 />
            <Info />
        </>
    );
};

export default Men;
