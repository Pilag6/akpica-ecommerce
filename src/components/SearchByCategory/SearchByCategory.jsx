// Contexts
import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext.jsx";

// Styles
import "./SearchByCategory.css";

// Images
import Sunglasses from "../../assets/categories/category-5.jpg";
import Tech from "../../assets/categories/category-3.jpg";
import Women from "../../assets/categories/category-1.jpg";
import Men from "../../assets/categories/category-4.jpg";
import Deco from "../../assets/categories/category-7.jpg";
import Beauty from "../../assets/categories/category-8.webp";

// Search Card Component
import SearchCard from "./SearchCard.jsx";

const SearchByCategory = () => {
    const {
        onlyWomen,
        onlyMen,
        onlyTech,
        onlyBeauty,
        onlyHome,
        onlySunglasses,
    } = useContext(ProductContext);
    return (
        <div className="search-by-category">
            <h2 className="category-main-title">Search By Category</h2>
            <div className="category-cards">
                <SearchCard
                    image={Beauty}
                    title={"Beauty"}
                    quantity={onlyBeauty.length}
                    link={"/beauty"}
                />
                <SearchCard
                    image={Women}
                    title={"Women"}
                    quantity={onlyWomen.length}
                    link={"/women"}
                />
                <SearchCard
                    image={Men}
                    title={"Men"}
                    quantity={onlyMen.length}
                    link={"/men"}
                />
                <SearchCard
                    image={Deco}
                    title={"Deco"}
                    quantity={onlyHome.length}
                    link={"/home-deco"}
                />
                <SearchCard
                    image={Tech}
                    title={"Tech"}
                    quantity={onlyTech.length}
                    link={"/tech"}
                />
                <SearchCard
                    image={Sunglasses}
                    title={"Sunglasses"}
                    quantity={onlySunglasses.length}
                    link={"/sunglasses"}
                />
            </div>
        </div>
    );
};

export default SearchByCategory;
