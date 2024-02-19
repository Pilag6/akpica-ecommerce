import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext.jsx";

// Components
import Cards from "../components/Cards/Cards.jsx";

const Home = () => {
    const { productData } = useContext(ProductContext);

    return (
        <>
            <section>Women</section>
            <section>Men</section>
            <section>Tech</section>
            <section>Home</section>
            <section>Beauty</section>

            <div className="cards-container">
                {productData.map((item) => {
                    return (
                        <Cards key={item.id} product={item} />

                        // <article className="card-article" key={item.id}>
                        //     <div className="card-img">
                        //         <img src={item.images[0]} alt="" />
                        //         <p className="card-category">{item.category}</p>
                        //     </div>

                        //     <Link
                        //         className="card-title"
                        //         to={`/product/${item.id}`}
                        //     >
                        //         <h2 className="card-title-content">
                        //             {item.title}
                        //         </h2>
                        //     </Link>

                        //     <p className="card-rating">

                        //         {item.rating > 4.75 ? (
                        //             <>
                        //                 <FaStar />
                        //                 <FaStar />
                        //                 <FaStar />
                        //                 <FaStar />
                        //                 <FaStar />
                        //             </>
                        //         ) : item.rating > 4.5 ? (
                        //             <>
                        //                 <FaStar />
                        //                 <FaStar />
                        //                 <FaStar />
                        //                 <FaStar />
                        //                 <FaStarHalf />
                        //             </>
                        //         ) : item.rating > 4.25 ? (
                        //             <>
                        //                 <FaStar />
                        //                 <FaStar />
                        //                 <FaStar />
                        //                 <FaStar />
                        //             </>
                        //         ) : (
                        //             <>
                        //                 <FaStar />
                        //                 <FaStar />
                        //                 <FaStar />
                        //                 <FaStarHalf />
                        //             </>
                        //         )}

                        //         <sup> ({item.rating})</sup>
                        //     </p>

                        //     <div className="card-price-btn">
                        //         <p className="card-price">${item.price}</p>
                        //         <button className="card-btn">
                        //             Add to Cart
                        //         </button>
                        //     </div>
                        // </article>
                    );
                })}
            </div>
        </>
    );
};

export default Home;
