import React from 'react'
import {RiChessFill} from '@remixicon/react'
import {RiRestaurantLine} from '@remixicon/react'


const Services = () => {
  return (
    //  <!-- OUR BEST SERVICES -->
    <section className="bg-white px-6 py-20">
      <h1 className="text-center text-4xl md:text-6xl font-bold text-[#00A890] mb-14">
        Our Best Services
      </h1>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-10">
        <div className="bg-white w-full sm:w-96 min-h-[420px] flex flex-col items-center justify-center gap-4 shadow-[0_0_6.7px_rgba(0,0,0,0.25)] border border-gray-200 rounded-[27px] px-6 text-center">
          <RiChessFill />
          <h2 className="text-xl font-semibold">Best Chef</h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className="bg-white w-full sm:w-96 min-h-[420px] flex flex-col items-center justify-center gap-4 shadow-[0_0_6.7px_rgba(0,0,0,0.25)] border border-gray-200 rounded-[27px] px-6 text-center">
          <RiRestaurantLine />

          <h2 className="text-xl font-semibold">Quality Food</h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div className="bg-white w-full sm:w-96 min-h-[420px] flex flex-col items-center justify-center gap-4 shadow-[0_0_6.7px_rgba(0,0,0,0.25)] border border-gray-200 rounded-[27px] px-6 text-center">
          <RiChessFill />
          <h2 className="text-xl font-semibold">Perfect Chef</h2>
          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services


