import { RiArrowRightBoxLine, RiArrowRightDoubleLine } from '@remixicon/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Spacial = () => {
  return (
    <>
    <section className="bg-white px-6 py-20">
      <h1
        className="text-center text-4xl md:text-6xl font-bold text-[#00A890] mb-14 self-start"
      >
        Our Special
        <span
          className="ml-3 px-3 py-1 bg-[#F8E388] text-[#BF4C00] text-lg md:text-2xl font-medium rounded"
        >
          Highly Recommended
        </span>
      </h1>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-10">
        <div
          className="bg-white w-full sm:w-90 min-h-110 flex flex-col items-center justify-center gap-4 shadow-[0_0_6.7px_rgba(0,0,0,0.25)] border border-gray-200 rounded-[27px] px-6 text-center"
        >
          <img
            src="https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D"
            className="w-32 h-32 rounded-full object-cover"
          />
          <h2 className="text-lg font-semibold text-[#00A890]">Burger</h2>
          <p className="text-gray-600 text-sm">
            A juicy, freshly grilled patty layered with crisp lettuce, ripe
            tomatoes...
          </p>
          <button className="text-[#00A890] font-semibold hover:underline">
            Order Now
          </button>
        </div>

        <div
          className="bg-white w-full sm:w-90 min-h-110 flex flex-col items-center justify-center gap-4 shadow-[0_0_6.7px_rgba(0,0,0,0.25)] border border-gray-200 rounded-[27px] px-6 text-center"
        >
          <img
            src="https://images.unsplash.com/photo-1637273484026-11d51fb64024?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="w-32 h-32 rounded-full object-cover"
          />
          <h2 className="text-lg font-semibold text-[#00A890]">Chicken Wings</h2>
          <p className="text-gray-600 text-sm">
            Crispy on the outside and tender on the inside, our chicken wings
            are...
          </p>
          <button className="text-[#00A890] font-semibold hover:underline">
            Order Now
          </button>
        </div>

        <div
          className="bg-white w-full sm:w-90 min-h-110 flex flex-col items-center justify-center gap-4 shadow-[0_0_6.7px_rgba(0,0,0,0.25)] border border-gray-200 rounded-[27px] px-6 text-center"
        >
          <img
            src="https://images.unsplash.com/photo-1612927601601-6638404737ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9vZGxlfGVufDB8fDB8fHww"
            className="w-32 h-32 rounded-full object-cover"
          />
          <h2 className="text-lg font-semibold text-[#00A890]">Noodles</h2>
          <p className="text-gray-600 text-sm">
            Stir-fried noodles cooked on high heat with fresh vegetables,
            aromatic...
          </p>
          <button className="text-[#00A890] font-semibold hover:underline">
            Order Now
          </button>
        </div>
      </div>

      <div className="text-center mt-16 flex justify-center ">
        <button
          className="bg-[#00A890] px-12 py-4 rounded-md text-xl text-white hover:bg-[#008f79] transition ">
            <Link to='/Menu' className='flex justify-center items-center'>View Full Menu <RiArrowRightDoubleLine className='mt-1 size-10'/> </Link>
        </button>
      </div>
    </section>
    </>
  )
}

export default Spacial