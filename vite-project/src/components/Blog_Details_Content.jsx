import {
  RiFacebookLine,
  RiInstagramLine,
  RiPinterestLine,
  RiStarFill,
  RiTwitterLine,
} from "@remixicon/react";

const Blog_Details_Content = () => {
  return (
    <div className=" max-w-7xl mx-auto flex justify-center items-center   ">
      <div className=" w-[70vw] ">
        <img
          className="h-[70vh] w-full object-center rounded-xl"
          src="/imgs/blog1.png"
          alt="img"
        />
        <p>30 August 2023</p>
        <div className="">
          <div className="md:flex justify-between">
            <div className="mt-10 w-[45vw] ">
              <div className="md:hidden h-[350px] w-[300px] p-8 rounded-2xl shadow-[0px_0px_5.6px_0px_rgba(0,0,0,0.25)] mb-10 ">
              <div className=" h-full w-full  flex flex-col items-center">
                <div>
                  <img
                    className="h-[100px] w-[100px] rounded-full"
                    src="/imgs/blog2.jpg"
                    alt=""
                  />
                </div>
                <div className="w-[78%] text-center ">
                  <h1 className="text-xl font-bold">
                    Patti Simpson
                    <br />
                    <span className="text-sm font-normal">Blogger</span>
                  </h1>
                  <div className="flex justify-center items-center gap-2 mt-2">
                    <RiStarFill className="size-5 text-[#ffcf00]" />
                    <RiStarFill className="size-5 text-[#ffcf00]" />
                    <RiStarFill className="size-5 text-[#ffcf00]" />
                    <RiStarFill className="size-5 text-[#ffcf00]" />
                    <RiStarFill className="size-5 text-[#ffcf00]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Tenetur quod numquam assumenda, sint sapiente adipisci?
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-5 mt-3">
                    <RiFacebookLine />
                    <RiTwitterLine />
                    <RiInstagramLine />
                    <RiPinterestLine />
                  </div>
                </div>
              </div>
            </div>
              <div>
                <span className="text-4xl font-semibold ">
                  Introducing Our New Seasonal Menu{" "}
                </span>
                <p className="mt-10 text-xs    md:text-xl lg:text-xl">
                  Exercitationem quisquam perferendis rerum atque aliquam
                  aliquid, fugiat dolores asperiores odit at impedit distinctio
                  pariatur voluptatem sequi vitae amet doloribus quas id
                  repudiandae maiores inventore excepturi iure. Odio
                  consequuntur eveniet assumenda sequi earum ducimus accusamus,
                  eligendi veritatis. Dignissimos modi alias quos accusantium.
                  Quibusdam laborum eum vitae tenetur provident nulla rerum enim
                  voluptates? Tempora veniam maxime rerum, perferendis
                  laboriosam reprehenderit corporis veritatis.
                </p>
              </div>
            </div>
            <div className="hidden sm:flex h-[350px] w-[300px] p-8 rounded-2xl shadow-[0px_0px_5.6px_0px_rgba(0,0,0,0.25)]   ">
              <div className=" h-full w-full  flex flex-col items-center">
                <div>
                  <img
                    className="h-[100px] w-[100px] rounded-full"
                    src="/imgs/blog2.jpg"
                    alt=""
                  />
                </div>
                <div className="w-[78%] text-center ">
                  <h1 className="text-xl font-bold">
                    Patti Simpson
                    <br />
                    <span className="text-sm font-normal">Blogger</span>
                  </h1>
                  <div className="flex justify-center items-center gap-2 mt-2">
                    <RiStarFill className="size-5 text-[#ffcf00]" />
                    <RiStarFill className="size-5 text-[#ffcf00]" />
                    <RiStarFill className="size-5 text-[#ffcf00]" />
                    <RiStarFill className="size-5 text-[#ffcf00]" />
                    <RiStarFill className="size-5 text-[#ffcf00]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">
                      Tenetur quod numquam assumenda, sint sapiente adipisci?
                    </p>
                  </div>
                  <div className="flex items-center justify-center gap-5 mt-3">
                    <RiFacebookLine />
                    <RiTwitterLine />
                    <RiInstagramLine />
                    <RiPinterestLine />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <p className="md:text-xl font-normal">
              {" "}
              esse doloribus eveniet dolorum asperiores veritatis? Esse
              asperiores labore ex impedit beatae quas neque magnam corrupti
              ipsam vitae accusantium architecto, odio vel cumque eos in quae.
              Tempore quibusdam dignissimos, magni esse unde corrupti natus
              perspiciatis tenetur ex dolor excepturi odit eveniet quae eaque
              deserunt dolore nemo pariatur consequuntur iste ab nisi numquam
              delectus soluta! Distinctio odit, rem provident minima amet
              possimus sequi quaerat odio, placeat cupiditate eum magnam
              asperiores.
            </p>
          </div>
          <div className="mt-10">
            <p className="md:text-xl font-normal">
              {" "}
              esse doloribus eveniet dolorum asperiores veritatis? Esse
              asperiores labore ex impedit beatae quas neque magnam corrupti
              ipsam vitae accusantium architecto, odio vel cumque eos in quae.
              Tempore quibusdam dignissimos, magni esse unde corrupti natus
              perspiciatis tenetur ex dolor excepturi odit eveniet quae eaque
              deserunt dolore nemo pariatur consequuntur iste ab nisi numquam
              delectus soluta! Distinctio odit, rem provident minima amet
              possimus sequi quaerat odio, placeat cupiditate eum magnam
              asperiores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog_Details_Content;
