import "./Banner1.css";

import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";

import Banner1Card from "./Banner1Card.jsx";

const Banner1 = () => {
    return (
        <section className="banner-1">

            <Banner1Card image={photo1} title={"SUNGLASSES"} sale={"SALE UP TO 50% OFF"} linkTo={"/sunglasses"}/>
            <Banner1Card image={photo2} title={"SMARTPHONES"} sale={"SALE UP TO 30% OFF"} linkTo={"/tech"}/>
            <Banner1Card image={photo3} title={"HOME DECO"} sale={"SALE UP TO 20% OFF"} linkTo={"/home-deco"}/>
            
        </section>
    );
};

export default Banner1;
