import { RiSearch2Fill, RiSearch2Line } from "@remixicon/react";
import React from "react";

const Blog_Details_Hero = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-6  flex justify-center  ">
        <div className="flex flex-col w-[70vw] justify-center items-center mt-5 md:mt-10  ">
          <h1 className=" text-2xl md:text-2xl text-[#BF4C00] bg-[#F8E388] font-normal mb-3 px-2">
            Blogs & Articles
          </h1>
          <span className="font-bold sm:text-2xl text-2xl  md:text-5xl lg:text-8xl mb-3 text-[#00a890]">
            Blogs & Articles
          </span>
          <p className=" hidden md:flex  text-center mt-10">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odit quos sapiente eveniet vitae corrupti necessitatibus quae delectus sed architecto.
          </p>
          <p className="text-center">Lorem, ipsum dolor sit amet iposl</p>
          <div className="mt-10 w-70 sm:w-xs md:w-xl lg:w-2xl p-1  flex justify-between ">
            <input
              className="text-xs px-10 h-16 w-full rounded-tl-2xl rounded-bl-2xl border border-gray-400 outline-none "
              type="text"
              placeholder="Search Your Keyword"
            />
            <button className="px-10 h-16 bg-[#00a890] cursor-pointer text-white rounded-br-2xl rounded-tr-2xl">
              <RiSearch2Line className="size-10" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog_Details_Hero;
