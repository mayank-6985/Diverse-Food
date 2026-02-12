import React from "react";

const Chef_Content = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-6  p-5 ">
      <div className="md:h-[350px] py-10 w-full md:flex justify-center items-center px-5 shadow-[0px_0px_5.6px_0px_rgba(0,0,0,0.25)] md:rounded-tl-full md:rounded-bl-full mb-15 ">
        <img
          className="md:h-[250px] md:w-[250px] h-[150px] w-[150px] content-center rounded-full border-2 p-1 border-black "
          src="/imgs/Chef1.jpg"
        />
        <div className="px-5">
          <div className="w-60 ">
            <h1 className="text-xl md:text-4xl font-bold">
              Chip Wade
              <span className="text-sm sm:text-sm  md:text-2xl font-medium">
                {" "}
                Head Chef
              </span>
            </h1>
          </div>
          <div className=" mt-3 sm:mt-5 md:mt-10">
            <p className="text-xs sm:text-sm  md:text-[15px] lg:text-xl">
              With over 12 years of culinary experience, Chef Chip leads our
              kitchen with passion and precision. Specializing in Indian and
              fusion cuisine, he believes in using fresh, locally sourced
              ingredients to create bold and memorable flavors. His dishes
              balance tradition with creativity, ensuring every plate tells a
              story of taste and quality.
            </p>
          </div>
        </div>
      </div>
      <div className="md:h-[350px] py-10 w-full md:flex justify-end items-center px-5 shadow-[0px_0px_5.6px_0px_rgba(0,0,0,0.25)] md:rounded-tr-full md:rounded-br-full mb-15 ">
        <div className="px-5 ">
          <div className="w-60  w-full text-end ">
            <div className="md:hidden flex justify-end"> 
              <img
                className="h-[150px] w-[150px] rounded-full border-2 p-1 border-black md:hidden"
                src="/imgs/Chef2.jpg"
              />
            </div>
            <h1 className=" text-sm sm:text-sm  md:text-4xl font-bold">
              Patti Simpson
              <br />
              <span className="md:text-2xl text-sm sm:text-sm  font-medium"> Chef</span>
            </h1>
          </div>
          <div className="mt-10 sm:mt-5 md:mt-10">
            <p className="text-right text-xs sm:text-sm md:text-[15px] lg:text-xl">
              Chef Patti brings elegance and innovation to every dish she
              prepares. Known for her expertise in continental and modern
              comfort food, she focuses on perfect textures and balanced
              flavors. Her attention to detail and love for plating turn each
              meal into a visual and flavorful delight for our guests.
            </p>
          </div>
        </div>
        <img
          className="h-[250px] w-[250px] rounded-full border-2 p-1 border-black hidden md:flex "
          src="/imgs/Chef2.jpg"
        />
      </div>

















      <div className="md:h-[350px] py-10 w-full md:flex justify-center items-center px-5 shadow-[0px_0px_5.6px_0px_rgba(0,0,0,0.25)] md:rounded-tl-full md:rounded-bl-full mb-15 ">
        <img
          className="md:h-[250px] md:w-[250px] h-[150px] w-[150px] content-center rounded-full border-2 p-1 border-black "
          src="/imgs/Chef1.jpg"
        />
        <div className="px-5">
          <div className="w-60 ">
            <h1 className="text-xl md:text-4xl font-bold">
              Chip Wade
              <span className="text-sm sm:text-sm  md:text-2xl font-medium">
                {" "}
                Head Chef
              </span>
            </h1>
          </div>
          <div className=" mt-3 sm:mt-5 md:mt-10">
            <p className="text-xs sm:text-sm  md:text-[15px] lg:text-xl">
              With over 12 years of culinary experience, Chef Chip leads our
              kitchen with passion and precision. Specializing in Indian and
              fusion cuisine, he believes in using fresh, locally sourced
              ingredients to create bold and memorable flavors. His dishes
              balance tradition with creativity, ensuring every plate tells a
              story of taste and quality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chef_Content;
