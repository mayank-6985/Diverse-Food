import React from "react";
const menuImages = [
  { id: 1, src: "/imgs/menu-img1.png", size: "h-[200px] w-[200px]" },
  { id: 2, src: "/imgs/menu-2.png", size: "h-[250px] w-[200px]" },
  { id: 3, src: "/imgs/menu-3.png", size: "h-[300px] w-[250px]" },
  { id: 4, src: "/imgs/menu-4.png", size: "h-[250px] w-[200px]" },
  { id: 5, src: "/imgs/menu-5.png", size: "h-[200px] w-[200px]" },
];
const Menu_hero = () => {
  return (
    <div className="flex flex-col items-center justify-center px-5 ">
      <div className="h-[30vh] sm:w-full  md:w-[50vw] flex flex-col items-center justify-center mb-10 ">
        <h1 className=" text-[#00A890] sm:text-4xl md:text-5xl lg:text-8xl font-bold">
          Our Menu
        </h1>
        <p className=" sm:text-sm md:text-xl lg:text-3xl mt-5 text-center ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate,
          quaerat eaque. Illo adipisci
        </p>
      </div>
      <div
        id="menu-pic"
        className=" flex flex-nowrap justify-center items-center  gap-10 overflow-x-auto"
      >
        <img
          className="h-[200px] w-[200px]  rounded-3xl "
          src="/imgs/menu-img1.png"
          alt=""
        />
        <img
          className="h-[250px] w-[200px]  rounded-3xl "
          src="/imgs/menu-2.png"
          alt=""
        />
        <img
          className="h-[300px] w-[250px]   rounded-3xl "
          src="/imgs/menu-3.png"
          alt=""
        />
        <img
          className="h-[250px] w-[200px]    rounded-3xl "
          src="/imgs/menu-4.png"
          alt=""
        />
        <img
          className="h-[200px] w-[200px]   rounded-3xl "
          src="/imgs/menu-5.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Menu_hero;
