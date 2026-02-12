import { RiCalendar2Line, RiChat1Line, RiHeart2Line } from "@remixicon/react";

const Blog_Details_reviews = () => {
  return (
    <div className=" max-w-7xl mx-auto flex justify-center items-center ">
      <div className=" w-[70vw] ">
        <h1 className="text-3xl font-semibold">More from Patti Simpson</h1>
        <div className="mt-5 md:flex w-full gap-5 md:gap-14 justify-between">
          <div className="h-[572px] w-full mb-32 ">
            <img
              className="h-[330px] rounded-xl object-cover w-full"
              src="/imgs/blog1.png"/>
            <div className="flex items-center gap-5 mt-3">
              <img className="h-10 w-10 rounded-full " src="/imgs/blog2.jpg" alt="" />
              <h1 className="text-sm">Patti Simpson</h1>
            </div>
            <div className=" mt-3">
                <h1 className="text-3xl font-semibold">A Glimpse into the Culinary Innovations at Diverse Food </h1>
                <p className="mt-3 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorem quod et magni dicta, inventore eligendi.</p>
            <div className="mt-2 flex gap-2
            ">
                <RiCalendar2Line/>
                <p>30 August 2023</p>
                <RiHeart2Line/>
                <p>10</p>
                <RiChat1Line/>
                <p>1 reply </p>
            </div>
            </div>
          </div>
           <div className="h-[572px] w-full hidden md:block ">
            <img
              className="h-[330px] rounded-xl object-cover w-full"
              src="/imgs/blog1.png"/>
            <div className="flex items-center gap-5 mt-3">
              <img className="h-10 w-10 rounded-full " src="/imgs/blog2.jpg" alt="" />
              <h1 className="text-sm">Patti Simpson</h1>
            </div>
            <div className=" mt-3">
                <h1 className="text-3xl font-semibold">A Glimpse into the Culinary Innovations at Diverse Food </h1>
                <p className="mt-3 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dolorem quod et magni dicta, inventore eligendi.</p>
            <div className="mt-2 flex gap-2
            ">
                <RiCalendar2Line/>
                <p>30 August 2023</p>
                <RiHeart2Line/>
                <p>10</p>
                <RiChat1Line/>
                <p>1 reply </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog_Details_reviews;
