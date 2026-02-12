import React from "react";
import { RiHeartLine, RiChat1Line, RiCalendar2Line } from "@remixicon/react";
import { Comments } from "./Comments";

const Blog_Details_Comment = () => {
  function Comment_Post() {
    alert("Comment Posted");
  }

  return (
    <div className=" max-w-7xl mx-auto flex justify-center items-center ">
      <div className=" w-[70vw] ">
        <h1 className="text-3xl font-semibold">Post a Comment</h1>
        <div className="mt-5 flex flex-col  w-full">
          <div className="flex justify-between w-full gap-5">
            <input
              required
              className="w-full outline-none border h-12 rounded-2xl pl-5 border-gray-700"
              type="text"
              placeholder="Name*"
            />
            <input
              required
              className="w-full outline-none border h-12 rounded-2xl pl-5 border-gray-700"
              type="text"
              placeholder="Email*"
            />
          </div>
          <div>
            <input
              required
              className="w-full border border-gray-700 h-28 mt-5 rounded-2xl pl-5 align-text-top"
              type="address"
              placeholder="Write a comment"
            />
          </div>
          <div className="my-5 w-full flex justify-end gap-5 text-xl items-center">
            <button className="cursor-pointer">Cancle</button>
            <button
              onClick={Comment_Post}
              className="bg-[#00a890] px-10 cursor-pointer text-white py-2 rounded-xl"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog_Details_Comment;
