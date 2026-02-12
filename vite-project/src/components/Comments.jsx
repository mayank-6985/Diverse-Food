import { RiHeart2Line, RiHqFill } from "@remixicon/react";
import React, { useState } from "react";
import Blog_Details_Comment from "./Blog_Details_Comment";
 export const Comments = [
  {
    id: 1,
    name: "Patti Simpson",
    profile: "/imgs/blog2.jpg",
    email: "patti123@gmail.com",
    comment: "delicious food",
    likes: 2,
  },
  {
    id: 2,
    name: "Patti Simpson",
    profile: "/imgs/blog2.jpg",
    email: "patti123@gmail.com",
    comment: "delicious food",
    likes: 2,
  },
  {
    id: 3,
    name: "Patti Simpson",
    profile: "/imgs/blog2.jpg",

    email: "patti123@gmail.com",
    comment: "delicious food",
    likes: 2,
  },
  {
    id: 4,
    name: "Patti Simpson",
    profile: "/imgs/blog2.jpg",

    email: "patti123@gmail.com",
    comment: "delicious food",
    likes: 2,
  },
  {
    id: 5,
    name: "Patti Simpson",
    profile: "/imgs/blog2.jpg",

    email: "patti123@gmail.com",
    comment: "delicious food",
    likes: 2,
  },
  {
    id: 6,
    name: "Patti Simpson",
    profile: "/imgs/blog2.jpg",

    email: "patti123@gmail.com",
    comment: "delicious food",
    likes: 2,
  },
    {
    id: 7,
    name: "Patti Simpson",
    profile: "/imgs/blog2.jpg",

    email: "patti123@gmail.com",
    comment: "delicious food",
    likes: 2,
  },
    {
    id: 8,
    name: "Patti Simpson",
    profile: "/imgs/blog2.jpg",

    email: "patti123@gmail.com",
    comment: "delicious food",
    likes: 2,
  },
    {
    id: 9,
    name: "Patti Simpson",
    profile: "/imgs/blog2.jpg",

    email: "patti123@gmail.com",
    comment: "delicious food",
    likes: 2,
  },
    {
    id: 10,
    name: "Patti Simpson",
    profile: "/imgs/blog2.jpg",

    email: "patti123@gmail.com",
    comment: "delicious food",
    likes: 2,
  },
    {
    id: 11,
    name: "Patti Simpson",
    profile: "/imgs/blog2.jpg",

    email: "patti123@gmail.com",
    comment: "delicious food",
    likes: 2,
  },
    {
    id: 12,
    name: "Patti Simpson",
    profile: "/imgs/blog2.jpg",

    email: "patti123@gmail.com",
    comment: "delicious food",
    likes: 2,
  },
];

const Reviews = () => {

  const [like, setLike] = useState(0)

  const handleLike=(e)=>{
    setLike(like+1)
    console.log(like);
    
  }

  return (
    <div className=" h-screen w-screen">
      <div className="px-10 h-full w-full ">
        <div className="h-20 shadow-2xl w-full flex justify-center items-center">
          <h1 className="text-2xl font-bold">Reviews</h1>
        </div>
        <div className="mt-10 px-5">
          <h1 className="text-2xl font-bold">All Reviews ({Comments.length})</h1>
        </div>
        <div>
          <div className="flex flex-wrap h-[70vh] ring-1 rounded-xs overflow-y-auto [&::-webkit-scrollbar]:hidden mt-10 gap-5 justify-center items-center">
            {Comments.map((item) => (
              <div key={item.id}>
                <div className="h-[20vh] w-[40vw] rounded-2xl shadow-xl hover:shadow-2xl p-2">
                  <div className="flex gap-3">
                    <img
                      className="h-20 w-20 object-cover rounded-full"
                      src={item.profile}
                      alt=""
                    />
                    <div>
                      <h1 className="text-xl font-bold">{item.name}</h1>
                      <h1>{item.comment}</h1>
                        <div className="flex">
                          <RiHeart2Line className="mt-2" onClick={handleLike} />
                          <button  className="mt-1 ml-1 ">{like}</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
