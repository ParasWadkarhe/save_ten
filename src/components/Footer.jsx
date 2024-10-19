import React from "react";
import { FaRegCopyright } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="bg-[#53599A] text-lg text-white">
        <div className=" flex items-center gap-2 pl-8">
          <div>
            <FaRegCopyright classname=" flex items-center font-bold" />
            Saveten-All Rights Reserved
          </div>
          <div>
            <FiInstagram />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
