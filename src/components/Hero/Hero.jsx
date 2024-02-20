import { Link } from "react-router-dom";
import { useState } from "react";
import "./Hero.css";

import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";

//icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Hero = () => {
  //array of image-slider
  const imageSlider = [banner1, banner2];

  const [slide, setSlide] = useState(0);

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

        <div className="hero-content">
          <p>New Collection</p>
          <h2>Women Fashion</h2>
          <Link className="shop-now">SHOP NOW</Link>
        </div>
      </div>
    </>
  );
};

export default Hero;
