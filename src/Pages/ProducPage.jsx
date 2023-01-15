import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import SizeFilterComponent from "../Components/SizeFilterComponent";
import QuantityComponent from "../Components/QuantityComponent";
import img from "../../src/assets/images/topdeal1.jpg";
import SimilarProduct from "../Components/SimilarProduct";

const ProducPage = () => {
  return (
    <div>
      <Navbar />
      <div className="container p-8">
        <div className="parent-div flex pt-8 pb-8 justify-start gap-8 overflow-hidden">
          <div className="img-div">
            <img
              className="h-[25rem] w-[100%] cursor-pointer rounded-md shadow-lg shadow-gray-300  hover:scale-[1.1] duration-300 ease-in-out"
              src={img}
              alt=""
            />
          </div>
          <div className="content-div px-4 flex flex-col justify-between">
            <div className="headline">
              <h1 className="text-4xl font-semibold">Mens Jeans</h1>
              <p className="text-gray-800 text-lg mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laborum, qui.
              </p>
            </div>

            <div>
              <h2 className="text-2xl mt-4">
                Price: <b>₹90</b>
              </h2>
              <div className="color-div flex justify-start items-center gap-4">
                <span className="text-2xl mt-4"> Color :</span>
                <div className="flex justify-center items-center gap-4">
                  <span className="bg-green-500 flex justify-center items-center rounded-full w-6 h-6"></span>
                  <span className="bg-blue-500 flex justify-center items-center rounded-full w-6 h-6"></span>
                  <span className="bg-red-500 flex justify-center items-center rounded-full w-6 h-6"></span>
                  <span className="bg-yellow-500 flex justify-center items-center rounded-full w-6 h-6"></span>
                  <span className="bg-black flex justify-center items-center rounded-full w-6 h-6"></span>
                </div>
              </div>
              <div className="mt-3">
                <SizeFilterComponent className="text-2xl mt-4" />
              </div>
              <div className="mt-3">
                <QuantityComponent className="text-2xl mt-4" />
              </div>
              <button className="btn mt-4">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="product-description mt-8">
          <h1 className="font-bold text-2xl">Product Details</h1>
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            ipsam optio, laudantium hic quis a minus sit provident libero
            accusantium earum in nemo soluta tempore. Odit voluptas unde
            explicabo labore!
          </p>
        </div>
        <div>
          <SimilarProduct />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProducPage;
