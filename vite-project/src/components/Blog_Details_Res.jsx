import React from "react";
import { RiCalendar2Line, RiHeartLine, RiChat1Line } from "@remixicon/react";
import { Link } from "react-router-dom";
import {Comments} from '../components/Comments';
const Blog_Details_Res = () => {
  return (
    <div className=" max-w-7xl mx-auto flex justify-center items-center ">
      <div className=" w-[70vw] ">
        <div className="mt-10 h-[50vh] w-full mb-20 sm:mb-10 ">
          <h1 className="text-3xl font-semibold">Responses {Comments.length}</h1>
          <div className="mt-5 md:flex">
            <img className="h-20 w-20 rounded-full" src="/imgs/blog3.jpg" />
            <div className="ml-5">
              <h1 className="md:text-2xl">Chris Raymond</h1>
              <div className="flex">
                <RiCalendar2Line />
                <h1 className="ml-2 text-xl">30 August 2023</h1>
              </div>
              <p className="md:text-xl">
                ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum
                dolores, incidunt doloremque alias quis.
              </p>
              <div className="flex gap-2">
                <RiHeartLine />
                10 <RiChat1Line /> reply
              </div>
            </div>
          </div>
          <div className="mt-5 hidden md:flex">
            <img className="h-20 w-20 rounded-full" src="/imgs/blog4.jpg" />
            <div className="ml-5">
              <h1 className="text-2xl">Chris Raymond</h1>
              <div className="flex">
                <RiCalendar2Line />
                <h1 className="ml-2 text-xl">30 August 2023</h1>
              </div>
              <p className="text-xl">
                ipsum dolor sit amet consectetur adipisicing elit. Dolorem eum
                dolores, incidunt doloremque alias quis.
              </p>
              <div className="flex gap-2">
                <RiHeartLine />
                10 <RiChat1Line /> reply
              </div>
            </div>
          </div>
         <Link to='/Comments'> <button  className=" cursor-pointer text-2xl hover:bg-gray-100 border border-gray-400 px-10 mt-10 rounded-3xl">
            See All Responses
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Blog_Details_Res;
