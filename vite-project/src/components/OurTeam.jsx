import React from "react";

const OurTeam = () => {
  return (
    <div>
      {/* <!-- OUR TEAM --> */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h3 className="text-4xl text-[#00A890] sm:text-5xl font-bold text-primary mb-12">
          Our Team
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
          {/* <!-- Member --> */}
          <div>
            <div
              className="h-72 w-full bg-cover bg-center rounded-3xl mb-4"
              style={{ backgroundImage: `url(/imgs/img4.jpg)` }}
            ></div>
            <h4 className="font-bold">Chip Wade</h4>
            <p className="text-sm text-gray-500 mb-4">
              Chief Executive Officer
            </p>
            <button className=" text-[#00A890]  border border-[#00A890] px-6 py-2 rounded-full">
              Read More
            </button>
          </div>

          <div>
            <div
              className="h-72 w-full bg-cover bg-center rounded-3xl mb-4"
              style={{ backgroundImage: `url(/imgs/img5.jpg)` }}
            ></div>
            <h4 className="font-bold">Danny Meyer</h4>
            <p className="text-sm text-gray-500 mb-4">
              Founder & Executive Chairman
            </p>
            <button className=" text-[#00A890]  border border-[#00A890] px-6 py-2 rounded-full">
              Read More
            </button>
          </div>

          <div>
            <div
              className="h-72 w-full bg-cover bg-center rounded-3xl mb-4"
              style={{ backgroundImage: `url(/imgs/img6.jpg)` }}
            ></div>
            <h4 className="font-bold">Phil Simpson</h4>
            <p className="text-sm text-gray-500 mb-4">
              Chief Administrative Officer
            </p>
            <button className=" text-[#00A890]  border border-[#00A890] px-6 py-2 rounded-full">
              Read More
            </button>
          </div>

          <div>
            <div
              className="h-72 w-full bg-cover bg-center rounded-3xl mb-4"
              style={{ backgroundImage: `url(/imgs/img7.jpg)` }}
            ></div>
            <h4 className="font-bold">Phil Simpson</h4>
            <p className="text-sm text-gray-500 mb-4">
              Chief Administrative Officer
            </p>
            <button className=" text-[#00A890]  border border-[#00A890] px-6 py-2 rounded-full">
              Read More
            </button>
          </div>

          <div>
            <div
              className="h-72 w-full bg-cover bg-center rounded-3xl mb-4"
              style={{ backgroundImage: `url(/imgs/img8.jpg)` }}
            ></div>
            <h4 className="font-bold">Phil Simpson</h4>
            <p className="text-sm text-gray-500 mb-4">
              Chief Administrative Officer
            </p>
            <button className=" text-[#00A890]  border border-[#00A890] px-6 py-2 rounded-full">
              Read More
            </button>
          </div>

          <div>
            <div
              className="h-72 w-full bg-cover bg-center rounded-3xl mb-4"
              style={{ backgroundImage: `url(/imgs/img9.jpg)` }}
            ></div>
            <h4 className="font-bold">Phil Simpson</h4>
            <p className="text-sm text-gray-500 mb-4">
              Chief Administrative Officer
            </p>
            <button className=" text-[#00A890]  border border-[#00A890] px-6 py-2 rounded-full">
              Read More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;
