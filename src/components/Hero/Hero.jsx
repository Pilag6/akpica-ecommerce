import { useState } from "react";
import "./Hero.css";

//icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

//images import
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";
import banner4 from "../../assets/banner-4.jpg";
import banner5 from "../../assets/banner-5.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
    //array of image-slider
    const imageSlider = [banner1, banner2, banner3, banner4, banner5];

    //array of texts
    const textSlider = [
        { promo: "Spring Collection", title: "Blossom in Style" },
        { promo: "New Collection", title: "Elite Elegance" },
        { promo: "Our Gadgets", title: "Only Tech" },
        { promo: "Our Watches", title: "Time to Be" },
        { promo: "The Future is Today", title: "New Reality" },
    ];

    const [slide, setSlide] = useState(0);

    const handlePrevSlide = () => {
        setSlide((prevSlide) =>
            prevSlide === 0 ? imageSlider.length - 1 : prevSlide - 1
        );
    };

    const handleNextSlide = () => {
        setSlide((prevSlide) =>
        prevSlide === imageSlider.length - 1 ? 0 : prevSlide + 1
        );
    };

    const handleDot = (index) => {
        setSlide(index);
    };

    return (
        <>
            <div className="hero">
                <img src={imageSlider[slide]} alt={`image ${slide + 1}`} />

                <div className="btn-wrapper">
                    <button className="left-btn" onClick={handleNextSlide}>
                        <IoIosArrowForward />
                    </button>
                    <button className="right-btn" onClick={handlePrevSlide}>
                        <IoIosArrowBack />
                    </button>
                </div>

                <div className="hero-text">
                    <p className="animate__bounceInLeft">
                        {textSlider[slide].promo}
                    </p>
                    <h2 className="animate__bounceInLeft">
                        {textSlider[slide].title}
                    </h2>
                    {textSlider[slide].title === "Elite Elegance" ? (
                        <Link to={"/men"} className="animate__bounceInLeft">
                            Shop Now
                        </Link>
                    ) : textSlider[slide].title === "Blossom in Style" ? (
                        <Link to={"/women"} className="animate__bounceInLeft">
                            Shop Now
                        </Link>
                    ) : textSlider[slide].title === "Only Tech" ? (
                        <Link to={"/tech"} className="animate__bounceInLeft">
                            Shop Now
                        </Link>
                    ) : textSlider[slide].title === "Time to Be" ? (
                        <Link to={"/men"} className="animate__bounceInLeft">
                            Shop Now
                        </Link>
                    ) : textSlider[slide].title === "New Reality" ? (
                        <Link to={"/tech"} className="animate__bounceInLeft">
                            Shop Now
                        </Link>
                    ) : null}
                </div>

                {/* dot-slider */}
                <div className="dot-container">
                    {imageSlider.map((slide, index) => (
                        <div
                            className="dot-btn"
                            key={index}
                            onClick={() => handleDot(index)}
                        >
                            <GoDotFill />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Hero;
