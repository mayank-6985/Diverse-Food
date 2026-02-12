import {
  RiArrowDownDoubleLine,
  RiArrowDownLine,
  RiMenu2Line,
  RiMore2Fill,
  RiMore2Line,
  RiUserFollowLine,
} from "@remixicon/react";
import { useState } from "react";

const Blog_Hero = () => {
    let [num, setnum] = useState('Subscribe');
  function Button_Clicked() {
    setnum(num='Subscribed');
          alert("Subscribed")
  }
  return (
    <div>
      <div className="max-w-7xl md:mx-auto p-2  md:p-6  flex justify-center ">
        <div className="flex flex-col w-[100vw] justify-center items-center  md:mt-10 ">
          <h1 className=" text-xl  md:text-2xl text-[#BF4C00] bg-[#F8E388] font-normal mb-3 px-2">
            Blogs & Articles
          </h1>
          <span className="font-bold text-3xl md:text-6xl lg:text-8xl mb-3 text-[#00a890]">
            Blogs & Articles
          </span>
          <p className=" hidden md:flex  text-center mt-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            temporibus
          </p>
          <p className="text-center">Lorem, ipsum dolor sit amet iposl</p>
          <div className="border border-gray-300 rounded-4xl mt-10 md:w-2xl w-full p-1 flex justify-center items-center ">
            <input
              className="px-2 h-5   md:px-10 md:h-16 w-[80%] outline-none"
              type="text"
              placeholder="Please Enter you Email Address"
            />
            <button onClick={Button_Clicked} className="bg-[#00a890] text-white  md:text-xl font-bold w-[20%] h-16 rounded-4xl flex justify-center items-center">
              <h1 className="hidden md:flex">{num}</h1>
              <RiUserFollowLine className="md:hidden " />
            </button>
          </div>

          <span className="font-bold text-2xl md:text-6xl lg:text-8xl mt-3 md:mt-5 lg:mt-20 text-[#00a890]">
            Recent Blog Post
          </span>

          <div className=" justify-between md:mt-10 lg:mt-20 w-[80%]  hidden md:flex">
            <h1 className=" rounded-2xl bg-[#00a890] text-white  text-xl px-2">
              All
            </h1>
            <h1 className=" rounded-2xl bg-[#f0f0f0] px-2 text-xl">
              Newsletter
            </h1>
            <h1 className=" rounded-2xl bg-[#f0f0f0] px-2 text-xl">Tips</h1>
            <h1 className=" rounded-2xl bg-[#f0f0f0] px-2 text-xl">Insight</h1>
            <h1 className=" rounded-2xl bg-[#f0f0f0] px-2 text-xl">
              Success Story
            </h1>
          </div>
          <div className="md:hidden flex w-full mt-5 justify-center text-center  ">
            <button className="bg-[#00a890] text-white flex w-[80%] justify-center px-5 py-2 rounded-xl   ">See All Options
            <RiArrowDownDoubleLine className="text-white  "/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog_Hero;
