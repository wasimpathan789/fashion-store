import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import slider1 from "../assets/images/slider1.png";
import { sliderApi } from "../Api/sliderApi";
import './Slides.css'

const Slides = () => {
  const [slides] = useState(sliderApi);
  const [activeSlides, setActiveSlides] = useState(0);

  const nextSlide= () =>{
    if(activeSlides==slides.length-1){
        setActiveSlides(0);
    }else{
        setActiveSlides(activeSlides +1);
    }

  }

  const prevSlide = () =>{
    if(activeSlides==0){
        setActiveSlides(slides.length-1);
    }else{
        setActiveSlides(activeSlides -1);
    }

  }

  const arrowStyle =
    "rounded-full p-1 pl-2 shadow-md cursor-pointer flex justify-center items-center";

  return (
    <div className="wrapper flex p-4 justify-between items-center h-[500px]">
      <div className="leftArrow">
        <ArrowBackIosIcon onClick={prevSlide}
          className={arrowStyle}
          style={{ height: "30px", width: "30px" }}
        />
      </div>
      {slides.map((slide, index) => {
        if (index == activeSlides) {
          return (
            <div className={`imageDiv p-4 mt-6 rounded-md w-full h-[480px] flex justify-center items-center bg-yellow-400 ` +  slide.background}>
              <div className="flex-1 flex justify-center">
                <img className="h-96 object-cover " src={slide.src} alt="" />
              </div>

              <div className="flex-1">
                <h1 className="text-5xl mt-4 font-semibold">
                  {slide.content.h1}
                </h1>
                <h2 className="text-2xl mt-4 font-semibold text-gray-700">
                  {" "}
                  {slide.content.h2}

                </h2>
                <button className="btn mt-6"> Shop Now</button>
              </div>
            </div>
          );
        }
      })}

      <div className="rightArrow">
        <ArrowForwardIosIcon onClick={nextSlide}
          className={arrowStyle}
          style={{ height: "30px", width: "30px" }}
        />
      </div>
    </div>
  );
};

export default Slides;

// https://pin.it/1AX2F9p
