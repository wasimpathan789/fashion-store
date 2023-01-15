import React from "react";
import { TopDealsApi } from "../Api/TopDealsApi";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const TopDeals = () => {
  return (
    <div className="container grid gap-6 grid-cols-3 p-8 cursor-pointer">
      {TopDealsApi.map((deals, index) => {
        return (
          <div className=" p-4 bg-white rounded-md border-yellow-600  shadow-sm shadow-yellow-600">
            <img
              className="w-full h-80 rounded-md object-cover"
              src={deals.src}
              alt=""
            />
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <h1 className="font-semibold text-xl text-gray-500 capitalize ">{deals.title}</h1>
                <div className="text-pink-600 ">
                  <FavoriteBorderIcon />
                </div>
              </div>
              <div className="flex justify-between items-center mt-4">
              <button className="btn flex pl-2 p-1 justify-center items-center gap-3 bg-[#388e3c]">
                {deals.rating} <StarBorderIcon />
              </button>
              <h3> {deals.price} only</h3>

              </div>

             
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopDeals;
