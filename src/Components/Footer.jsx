import React from "react";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Instagram from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <div className="flex gap-4 items-center p-8">
      <div className="flex-1 ">
        <h1 className="text-2xl font-semibold">Royal Fashion Store</h1>
        <p className="text-gray-800 text-md mt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste at a
          corporis numquam! Natus, libero?
        </p>
        <div className="social-media flex justify-start mt-4 items-center">
          <div className="bg-blue-600 text-white p-2  rounded-full">
            <FacebookIcon />
          </div>
          <div className="bg-pink-600 text-white p-2 ml-8 rounded-full">
            <Instagram />
          </div>
          <div className="bg-blue-600 text-white p-2 ml-8  rounded-full">
            <TwitterIcon  />
          </div>
          <div className="bg-red-600 text-white p-2 ml-8  rounded-full">
            <YouTubeIcon  />
          </div>
        </div>
      </div>

      {/* address div */}
      <div className="flex flex-col space-y-4 flex-1">
        <div>
          <span className="text-purple-600">
            <PersonPinCircleIcon />
          </span>
          <span className="text-gray-700 ml-4">State of Maharashtra</span>
        </div>
        <div>
          <span className="text-purple-600">
            <PhoneIcon />
          </span>
          <span className="text-gray-700 ml-4">+91-1234567890</span>
        </div>

        <div>
          <span className="text-purple-600">
            <EmailIcon />
          </span>
          <span className="text-gray-700 ml-4">asfiyan789@gmail.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
