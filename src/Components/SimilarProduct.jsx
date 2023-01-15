import React from "react";
import { useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const SimilarProduct = () => {
  const [slides] = useState();
  const [activeSlides, setActiveSlides] = useState(0);

  const nextSlide = () => {
    if (activeSlides == slides.length - 1) {
      setActiveSlides(0);
    } else {
      setActiveSlides(activeSlides + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlides == 0) {
      setActiveSlides(slides.length - 1);
    } else {
      setActiveSlides(activeSlides - 1);
    }
  };
  const arrowStyle =
    "rounded-full p-1 pl-2 shadow-md cursor-pointer flex justify-center items-center";

  return (
    <div className="flex justify-between items-center shadow-lg mt-8 border-gray-100 p-8 w-full border-b-2">
      <div className="leftArrow">
        <ArrowBackIosIcon
          onClick={prevSlide}
          className={arrowStyle}
          style={{ height: "30px", width: "30px" }}
        />
      </div>
      <div className="middle-div overflow-hidden flex flex-col bg-green-400">
      <div className="similar-heading flex justify-between items-center">
        <h1 className="text-xl font-bold">Similar Product</h1>
        <div className="flex gap-1">
          <div>Page</div>
          <div>1</div>
          <span>of</span>
          <div>9</div>
        </div>
      </div>
      <div className="product-container mb-8 mt-6 flex gap-8 justify-start items-center">
        <div>
          <div className=" w-72 p-4 bg-white rounded-md border-yellow-600  shadow-sm shadow-yellow-600">
            <div className="img-div flex items-start justify-end">
              <img
                className="w-full h-60 rounded-md object-cover relative"
                src=""
                alt=""
              />
              <div className="text-gray-400 text-2xl absolute flex justify-end items-end p-4 ">
                <FavoriteIcon className="text-xl" />
              </div>
            </div>

            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h1 className="font-semibold text-xl text-gray-500 capitalize ">
                  title
                </h1>
                <button className="btn flex pl-2 p-1 justify-center items-center gap-3 bg-[#388e3c]">
                  rating <StarBorderIcon />
                </button>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-green-600 font-bold italic ">
                  <span>50% Off</span>
                </div>

                <h3>
                  {" "}
                  <b className="italic">₹899</b> only
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div>
          <div className=" w-72 p-4 bg-white rounded-md border-yellow-600  shadow-sm shadow-yellow-600">
            <div className="img-div flex items-start justify-end">
              <img
                className="w-full h-60 rounded-md object-cover relative"
                src=""
                alt=""
              />
              <div className="text-gray-400 text-2xl absolute flex justify-end items-end p-4 ">
                <FavoriteIcon className="text-xl" />
              </div>
            </div>

            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h1 className="font-semibold text-xl text-gray-500 capitalize ">
                  title
                </h1>
                <button className="btn flex pl-2 p-1 justify-center items-center gap-3 bg-[#388e3c]">
                  rating <StarBorderIcon />
                </button>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-green-600 font-bold italic ">
                  <span>50% Off</span>
                </div>

                <h3>
                  {" "}
                  <b className="italic">₹899</b> only
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div>
          <div className=" w-72 p-4 bg-white rounded-md border-yellow-600  shadow-sm shadow-yellow-600">
            <div className="img-div flex items-start justify-end">
              <img
                className="w-full h-60 rounded-md object-cover relative"
                src=""
                alt=""
              />
              <div className="text-gray-400 text-2xl absolute flex justify-end items-end p-4 ">
                <FavoriteIcon className="text-xl" />
              </div>
            </div>

            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h1 className="font-semibold text-xl text-gray-500 capitalize ">
                  title
                </h1>
                <button className="btn flex pl-2 p-1 justify-center items-center gap-3 bg-[#388e3c]">
                  rating <StarBorderIcon />
                </button>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-green-600 font-bold italic ">
                  <span>50% Off</span>
                </div>

                <h3>
                  {" "}
                  <b className="italic">₹899</b> only
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/*  */}

        {/*  */}
        <div>
          <div className=" w-72 p-4 bg-white rounded-md border-yellow-600  shadow-sm shadow-yellow-600">
            <div className="img-div flex items-start justify-end">
              <img
                className="w-full h-60 rounded-md object-cover relative"
                src=""
                alt=""
              />
              <div className="text-gray-400 text-2xl absolute flex justify-end items-end p-4 ">
                <FavoriteIcon className="text-xl" />
              </div>
            </div>

            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h1 className="font-semibold text-xl text-gray-500 capitalize ">
                  title
                </h1>
                <button className="btn flex pl-2 p-1 justify-center items-center gap-3 bg-[#388e3c]">
                  rating <StarBorderIcon />
                </button>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-green-600 font-bold italic ">
                  <span>50% Off</span>
                </div>

                <h3>
                  {" "}
                  <b className="italic">₹899</b> only
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div>
          <div className=" w-72 p-4 bg-white rounded-md border-yellow-600  shadow-sm shadow-yellow-600">
            <div className="img-div flex items-start justify-end">
              <img
                className="w-full h-60 rounded-md object-cover relative"
                src=""
                alt=""
              />
              <div className="text-gray-400 text-2xl absolute flex justify-end items-end p-4 ">
                <FavoriteIcon className="text-xl" />
              </div>
            </div>

            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h1 className="font-semibold text-xl text-gray-500 capitalize ">
                  title
                </h1>
                <button className="btn flex pl-2 p-1 justify-center items-center gap-3 bg-[#388e3c]">
                  rating <StarBorderIcon />
                </button>
              </div>
              <div className="flex justify-between items-center mt-4">
                <div className="text-green-600 font-bold italic ">
                  <span>50% Off</span>
                </div>

                <h3>
                  {" "}
                  <b className="italic">₹899</b> only
                </h3>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>

      </div>
     

      
      <div className="rightArrow">
        <ArrowForwardIosIcon
          onClick={nextSlide}
          className={arrowStyle}
          style={{ height: "30px", width: "30px" }}
        />
      </div>
    </div>
  );
};

export default SimilarProduct;
