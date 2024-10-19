import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex font-bold justify-center text-xl gap-20 bg-[#068D9D] pb-8 pt-8">
        <Link to="/" className="transition-all duration-100 hover:scale-110">
          Home
        </Link>
        <Link
          to="/about"
          className="transition-all duration-100 hover:scale-110"
        >
          About Us
        </Link>
        <Link
          to="/community"
          className="transition-all duration-100 hover:scale-110"
        >
          Community
        </Link>
        <Link
          to="/fundraising"
          className="transition-all duration-100 hover:scale-110"
        >
          Fundraising
        </Link>
        <Link
          to="/stories"
          className="transition-all duration-100 hover:scale-110"
        >
          Impact Stories
        </Link>
      </div>
    </>
  );
};

export default Header;
