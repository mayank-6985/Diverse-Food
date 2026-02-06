import React from 'react'

const OurMission = () => {
  return (
    <div>
    {/* <!-- OUR MISSION --> */}
    <section
      className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12"
    >
      <div>
        <h2
          className="text-4xl text-[#00A890] sm:text-6xl lg:text-7xl font-bold text-primary mb-4"
        >
          Our Mission
        </h2>
        <p className="text-gray-500 max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
          aliquam urna ut.
        </p>
      </div>

      <img
        src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1"
        className="rounded-xl w-full md:w-96 lg:w-[450px] object-cover"
        alt="Food"
      />
    </section></div>
  )
}

export default OurMission