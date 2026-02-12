import React from "react";
import { RiMenuLine } from "@remixicon/react";
import { Link } from "react-router-dom";
import Spacial from "../components/spacial";
import Services from "../components/Services";
import Footer from "../components/Footer";

const Landing_page = () => {
  return (
    <>
      <div className="min-h-screen min-w-fit overflow-hidden  bg-cover bg-[url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] relative"></div>
      <div className="content absolute top-0 left-0 h-screen  w-screen bg-black/70 text-white">
        <div className="flex justify-between py-4 sm:py-6 md:py-10 px-6 sm:px-8 md:px-10">
          <div>
            <h1 className="text-xl sm:text-2xl md:text-4xl cursor-pointer font-semibold">
              Diverse Food
            </h1>
          </div>
          <div className="hidden md:flex gap-5 text-sm sm:text-xl md:text-2xl font-bold">
            <Link to="/">Home</Link>
            <Link to="/Menu">Menu</Link>
            <Link to="/About">About US</Link>
            <Link to="/Best">Best Seller</Link>
            <Link to="/Blog">Blog</Link>
            <Link to="/FAQ">FAQs</Link>
          </div>
          <div className="md:hidden">
            <RiMenuLine />
          </div>
        </div>
        <div className="mx-6 md:mx-0 sm:px-4 md:px-10 absolute top-30 sm:top-40 md:top-50 ">
          <h1 className="md:text-6xl sm:text-4xl text-4xl  font-sans font-normal">
            Welcom to{" "}
          </h1>
          <span className="md:text-8xl sm:text-6xl text-5xl font-bold font-sans text-[#00a890]">
            Diverse Restaurant
          </span>
        </div>
        <div className="mx-6 absolute md:top-120 md:mx-9 top-80 sm:top-90 font-normal text-sm sm:text-2xl md:text-4xl w-70 sm:w-90 md:w-165 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            nostrum labore ut enim.
          </p>
        </div>
        <div className="mx-6 sm:px-4  absolute top-150 md:top-160">
          <Link to="/Menu">
            {" "}
            <button className=" cursor-pointer w-40 sm:w-30 md:w-67.5 h-16.25 bg-[#00A890] rounded-4xl md:text-2xl sm:text-xl text-xl">
              Order Now
            </button>
          </Link>
        </div>
      </div>
      <Spacial />
      <Services />
      <Footer />
    </>
  );
};

export default Landing_page;
