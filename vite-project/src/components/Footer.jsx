import React from 'react'
import {RiInstagramFill} from '@remixicon/react'
import {RiGlobalLine}from '@remixicon/react'
import {RiFacebookCircleFill}from '@remixicon/react'
import {RiLinkedinBoxFill}from '@remixicon/react'


const Footer = () => {
  return (
    //  <!-- FOOTER -->
    <div className=" bg-[#00A890] text-center text-white h-70 w-full flex flex-col justify-center gap-4 ">
      <h2 className="text-2xl md:text-5xl font-bold ">Diverse Food</h2>
      <p className="text-lg w-80 sm:w-40 md:w-96 mx-auto ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit posuere 
      </p>
      <div className=" flex justify-center gap-2 sm:gap-4 md:gap-8">
        <div>
          <RiInstagramFill />
        </div>
        <div>
          <RiGlobalLine />
        </div>
        <div>
          <RiFacebookCircleFill />
        </div>
        <div>
          <RiLinkedinBoxFill />
        </div>
      </div>
      <div className="flex w-full justify-center gap-5 sm:gap-10  md:gap-20 text-sm sm:text-xl md:text-2xl font-semibold">
        <p>Quick Links</p>
        <p>Pages</p>
        <p>Contact Us</p>
      </div>
    </div>
  );
}

export default Footer