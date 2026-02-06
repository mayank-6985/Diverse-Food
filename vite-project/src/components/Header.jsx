import React from "react";
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-2xl sm:text-3xl font-semibold text-primary">
          Diverse Food
        </h1>

        <nav className="hidden md:flex gap-8 text-lg font-semibold">
          <Link to="/">Home</Link>
          <a href="#">Menu</a>
          <a href="#" className="text-primary">
            About Us
          </a>
          <a href="#">Best Seller</a>
        </nav>
      </header>
    </div>
  );
};

export default Header;
