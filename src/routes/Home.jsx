import { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { ProductContext } from "../contexts/ProductContext.jsx";

// Components
import Cards from "../components/Cards/Cards.jsx";
import Hero from "../components/Hero/Hero.jsx";
import SearchByCategory from "../components/SearchByCategory/SearchByCategory.jsx";
import Banner1 from "../components/Banner1/Banner1.jsx";
import Info from "../components/Info/Info.jsx";

// Icons
import { AiFillPlusCircle } from "react-icons/ai";
import { MdDashboardCustomize } from "react-icons/md";

const Home = () => {
    const {
        onlyWomen,
        onlyMen,
        onlyTech,
        onlyBeauty,
        onlyHome,
        onlyAccessories,
        onlySunglasses,
    } = useContext(ProductContext);

    return (
        <>
            <Hero />
            <SearchByCategory />

            {/* Women Section */}
            <section className="women-section product-section">
                <h2 className="product-section-title">
                    <MdDashboardCustomize /> Women
                </h2>

                <div className="cards-container">
                    {onlyWomen.slice(0, 4).map((item) => {
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

                <Link className="see-more" to={"/women"}>
                    See more products <AiFillPlusCircle />
                </Link>
            </section>

            {/* Men Section */}
            <section className="men-section product-section">
                <h2 className="product-section-title">
                    <MdDashboardCustomize /> Men
                </h2>

                <div className="cards-container">
                    {onlyMen.slice(0, 4).map((item) => {
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
                <Link className="see-more" to={"/men"}>
                    See more products <AiFillPlusCircle />
                </Link>
            </section>

            <Banner1 />

            {/* Tech Section */}
            <section className="tech-section product-section">
                <h2 className="product-section-title">
                    <MdDashboardCustomize /> Tech
                </h2>

                <div className="cards-container">
                    {onlyTech.slice(0, 4).map((item) => {
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
                <Link className="see-more" to={"/tech"}>
                    See more products <AiFillPlusCircle />
                </Link>
            </section>

            {/* Home Section */}
            <section className="home-section product-section">
                <h2 className="product-section-title">
                    <MdDashboardCustomize /> Deco
                </h2>

                <div className="cards-container">
                    {onlyHome.slice(0, 4).map((item) => {
                        return (
                            <Cards
                                key={item.id}
                                product={item}
                                category={
                                    item.category.startsWith("home")
                                        ? item.category.toUpperCase().slice(5)
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
                <Link className="see-more" to={"/home-deco"}>
                    See more products <AiFillPlusCircle />
                </Link>
            </section>

            {/* Beauty Section */}
            <section className="beauty-section product-section">
                <h2 className="product-section-title">
                    <MdDashboardCustomize /> Beauty
                </h2>

                <div className="cards-container">
                    {onlyBeauty.slice(0, 4).map((item) => {
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
                <Link className="see-more" to={"/beauty"}>
                    See more products <AiFillPlusCircle />
                </Link>
            </section>

            {/* Sunglasses Section */}
            <section className="sunglasses-section product-section">
                <h2 className="product-section-title">
                    <MdDashboardCustomize /> Sunglasses
                </h2>

                <div className="cards-container">
                    {onlySunglasses.slice(0, 4).map((item) => {
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
                <Link className="see-more" to={"/sunglasses"}>
                    See more products <AiFillPlusCircle />
                </Link>
            </section>

            {/* Accessories Section */}
            <section className="accesories-section product-section">
                <h2 className="product-section-title">
                    <MdDashboardCustomize /> Accesories
                </h2>

                <div className="cards-container">
                    {onlyAccessories.slice(0, 4).map((item) => {
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
                <Link className="see-more" to={"/accessories"}>
                    See more products <AiFillPlusCircle />
                </Link>
            </section>

            <Info />
        </>
    );
};

export default Home;
