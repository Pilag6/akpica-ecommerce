import { useState } from "react";
import "./Hero.css";

//icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GoDotFill } from "react-icons/go";

//images import
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";

const Hero = () => {
  //array of image-slider
  const imageSlider = [banner1, banner2, banner3];

  //array of texts
  const textSlider = [
    { promo: "Spring Collection", title: "Blossom in Style" },
    { promo: "New Collection", title: "Elite Elegance" },
    { promo: "Our Gadgets", title: "Only Tech" },
  ];

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

  const handleDot = (index) => {
    setSlide(index)
  };

  return (
    <>
      <div className="hero">
        <img src={imageSlider[slide]} alt={`image ${slide + 1}`} />

        <div className="btn-wrapper">
          <button className="left-btn" onClick={handleNextSlide}><IoIosArrowForward /></button>
          <button className="right-btn" onClick={handlePrevSlide}><IoIosArrowBack /></button>
        </div>

        <div className="hero-text">
          <p>{textSlider[slide].promo}</p>
          <h1>{textSlider[slide].title}</h1>
          {/* <Link className="shop-now">SHOP NOW</Link> */}

          
        </div>

        {/* dot-slider */}
        <div className="dot-container">
            {imageSlider.map((slide, index) => (
              <div className="dot-btn" key={index} onClick={() => handleDot(index)}>
                <GoDotFill />
              </div>
            ))}
          </div>
      </div>
    </>
  );
};

export default Hero;
