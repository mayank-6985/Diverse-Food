import React from "react";
import { Link } from "react-router-dom";
import { RiMenuLine } from "@remixicon/react";

const Header = () => {
  return (
    <div>
      <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-primary">
          <Link to="/"> Diverse Food</Link>
        </h1>
        <nav className="hidden md:flex gap-8 text-lg font-semibold">
          <Link to="/">Home</Link>
          <Link to="/Menu">Menu</Link>
          <Link to="/About">About Us</Link>
          <Link to="/Best">Best Sellers</Link>
          <Link to="/Blog">Blog</Link>
          <Link to="/FAQ">FAQs</Link>
        </nav>
        <RiMenuLine className="md:hidden" />
      </header>
    </div>
  );
};

export default Header;
