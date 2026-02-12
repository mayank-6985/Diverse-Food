import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    image: "imgs/img1.jpg",
    date: "30 August 2023",
    title: "Introducing Our New Seasonal Menu",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit enim ad quos autem.",
    link: "/Blog_Details",
  },
  {
    id: 2,
    image: "imgs/img2.jpg",
    date: "12 September 2023",
    title: "Why Fresh Ingredients Matter",
    description:
      "Fresh ingredients define taste, nutrition, and overall quality of food.",
    link: "/Blog_Details",
  },
  {
    id: 3,
    image: "imgs/img3.jpg",
    date: "05 October 2023",
    title: "Chef’s Special: Behind the Scenes",
    description:
      "Take a look at how our chefs craft signature dishes every day.",
    link: "/Blog_Details",
  },
  {
    id: 4,
    image: "imgs/img4.jpg",
    date: "18 October 2023",
    title: "Customer Favorites This Month",
    description:
      "Here are the top dishes our customers loved the most this month.",
    link: "/Blog_Details",
  },
];



const Blog_Content = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 sm:h-64 object-cover rounded-t-2xl"
            />

            <div className="p-6 flex flex-col flex-grow">
              <p className="text-sm text-gray-500">{blog.date}</p>

              <h1 className="text-xl sm:text-2xl font-semibold text-[#00a890] mt-3">
                {blog.title}
              </h1>

              <p className="text-base sm:text-lg text-gray-700 mt-4 flex-grow">
                {blog.description}
              </p>

              <Link
                to={blog.link}
                className="mt-6 underline text-[#00a890] font-medium w-fit"
              >
                View Full Article
              </Link>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Blog_Content;
