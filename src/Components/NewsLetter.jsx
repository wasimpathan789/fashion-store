import React from "react";
import SendIcon from "@mui/icons-material/Send";

const NewsLetter = () => {
  return (
    <div className="flex justify-center bg-purple-400 p-20 flex-col items-center">
      <h1 className="text-3xl uppercase font-bold ">Newsletter</h1>
      <h2 className="mt-6 font-semibold text-gray-800 text-xl">
        Always in touch with us, for best Products with best price at markets
      </h2>
      <div className="flex justify-end mt-8 items-center">
        <input
          type="text"
          placeholder="Email"
          className="bg-white pl-4 relative w-[40vw] outline-none rounded-l-md h-8"
        />

        <div className="absolute h-8 w-8 bg-green-600 cursor-pointer text-white">
          <SendIcon />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
