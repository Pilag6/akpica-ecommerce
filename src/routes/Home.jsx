import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext.jsx";
import { Link } from "react-router-dom";

const Home = () => {
    const { productData } = useContext(ProductContext);

    return (
        <>
            {productData.map((item) => {
                return (
                    <Link to={`/product/${item.id}`} key={item.id}>
                        <h2>{item.title}</h2>
                    </Link>
                );
            })}
        </>
    );
};

export default Home;
