import { Link } from "react-router-dom";
import { useState } from "react";
import "./Hero.css";

//icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

//images
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";


const Hero = () => {
  //array of image-slider
  const imageSlider = [banner1, banner2];

  //array of texts
  const textSlider = [
    {promo: "New Collection", title: "Women Fashion"},
    {promo: "New Collection", title: "Men Fashion"}
  ]

  const [slide, setSlide] = useState(0);
  // const [slideText, setSlideText] = useState(0)

  const handlePrevSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === 0 ? imageSlider.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setSlide((prevSlide) =>
      prevSlide === 0 ? imageSlider.length - 1 : prevSlide - 1
    );
  };

  return (
    <>
      <div className="hero">

        <img src={imageSlider[slide]} alt={`image ${slide + 1}`} />

        <div className="btn-wrapper">
          <button onClick={handlePrevSlide}><IoIosArrowBack /></button>
          <button onClick={handleNextSlide}><IoIosArrowForward /></button>
        </div>

        <div className="hero-text">
          <p>{textSlider[slide].promo}</p>
          <h1>{textSlider[slide].title}</h1>
          <Link className="shop-now">SHOP NOW</Link>
        </div>

      </div>
    </>
  );
};

export default Hero;
