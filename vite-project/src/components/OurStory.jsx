const OurStory = () => {
  return (
    <div>
   
    {/* <!-- OUR STORY --> */}
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h3 className="text-4xl text-[#00A890] sm:text-5xl font-bold text-primary mb-4">
        Our Story
      </h3>
      <p className="max-w-lg mb-12">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* <!-- Card --> */}
        <div className="text-center">
          <div
            className="h-64 w-full bg-cover bg-center rounded-3xl"
            style={{backgroundImage: `url(/imgs/img1.jpg)`}}
            >
            </div>
          <h4 className="font-bold my-4">2020</h4>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="text-center">
          <div
            className="h-64 w-full bg-cover bg-center rounded-3xl"
            style={{backgroundImage: `url(/imgs/img2.jpg)`}}

          ></div>
          <h4 className="font-bold my-4">2021</h4>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        <div className="text-center">
          <div
            className="h-64 w-full bg-cover bg-center rounded-3xl"
            style={{backgroundImage: `url(/imgs/img3.jpg)`}}

          ></div>
          <h4 className="font-bold my-4">2022</h4>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </section>
</div>
  )
}

export default OurStory