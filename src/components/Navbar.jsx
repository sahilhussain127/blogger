import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <h1 className="text-xl font-bold text-darkText">MyApp</h1>
      <div className="flex items-center space-x-4">
        <button className="bg-gradient-to-br from-primaryGradientEnd to-primaryGradientStart text-white px-4 py-2 rounded-full text-sm font-semibold">
          Home
        </button>
        <button className="bg-gradient-to-br from-primaryGradientEnd to-primaryGradientStart text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
          <span>Profile</span>
          <img
            src="https://i.pravatar.cc/30"
            alt="avatar"
            className="w-6 h-6 rounded-full"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
