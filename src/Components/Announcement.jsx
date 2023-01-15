import { Close } from "@mui/icons-material";
import React, { useState } from "react";

const Announcement = () => {
  const [announceStyle, setAnnounceStyle] = useState(
    "bg-[#EBF5FF] flex justify-center  items-center  p-2"
  );

  const handleClose = () => {
    setAnnounceStyle("hidden");
  };

  return (
    <div className={announceStyle}>
      <h1 className="text-red-400">
        Hurry up, We are having upto 50% exclusive discount in this week
      </h1>
      <Close
        onClick={handleClose}
        className="text-gray-700 cursor-pointer ml-4 
         "
      />
    </div>
  );
};

export default Announcement;
