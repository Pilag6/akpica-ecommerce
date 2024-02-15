import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext.jsx";

const Home = () => {
    const { productData } = useContext(ProductContext);

    return (
        <>
            {productData.map((item) => {
                return <h2 key={item.id}>{item.title}</h2>;
            })}
        </>
    );
};

export default Home;
