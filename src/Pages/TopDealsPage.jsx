import React from "react";
import TopDeals from "../Components/TopDeals";

const TopDealsPage = () => {
  return (
    <div className="bg-[#e3efef]">
      <div className="flex justify-between items-center px-8 pt-8">
        <h1 className="text-3xl font-bold text-green-600 ">Top Deals</h1>
        <button className="btn bg-blue-700 font-semibold hover:bg-green-600 text-white">View All</button>
      </div>
      <TopDeals />
    </div>
  );
};

export default TopDealsPage;
