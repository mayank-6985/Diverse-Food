import React from "react";
import { RiStarSFill } from "@remixicon/react";
const bestSellers = [
  {
    id: 1,
    name: "Burger",
    image: "/imgs/menu-3.png",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, esse.",
    price: "$35",
  },
  {
    id: 2,
    name: "Pizza",
    image: "/imgs/menu-4.png",
    rating: 4,
    description:
      "Freshly baked pizza with premium ingredients and rich flavors.",
    price: "$40",
  },
  {
    id: 3,
    name: "Pasta",
    image: "/imgs/menu-5.png",
    rating: 5,
    description:
      "Creamy pasta cooked with authentic Italian herbs and cheese.",
    price: "$30",
  },
  {
    id: 4,
    name: "Sandwich",
    image: "/imgs/menu-6.png",
    rating: 4,
    description:
      "Healthy and tasty sandwich with fresh vegetables and sauce.",
    price: "$25",
  },
    {
    id: 5,
    name: "Burger",
    image: "/imgs/menu-3.png",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, esse.",
    price: "$35",
  },
  {
    id: 6,
    name: "Pizza",
    image: "/imgs/menu-4.png",
    rating: 4,
    description:
      "Freshly baked pizza with premium ingredients and rich flavors.",
    price: "$40",
  },
  {
    id: 7,
    name: "Pasta",
    image: "/imgs/menu-5.png",
    rating: 5,
    description:
      "Creamy pasta cooked with authentic Italian herbs and cheese.",
    price: "$30",
  },
  {
    id: 8,
    name: "Sandwich",
    image: "/imgs/menu-6.png",
    rating: 4,
    description:
      "Healthy and tasty sandwich with fresh vegetables and sauce.",
    price: "$25",
  },
  
];


const Best_Seleers_content = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {bestSellers.map((item) => (
          <div
            key={item.id}
            className="flex gap-5 items-start bg-white rounded-2xl shadow-sm hover:shadow-lg transition p-4"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="h-[140px] w-[140px] sm:h-[180px] sm:w-[180px] object-cover rounded-xl"
            />

            {/* Content */}
            <div className="flex flex-col">
              <p className="font-semibold text-2xl sm:text-3xl">
                {item.name}
              </p>

              {/* Rating */}
              <div className="flex my-1">
                {[...Array(item.rating)].map((_, i) => (
                  <RiStarSFill key={i} className="text-[#FFCF00]" />
                ))}
              </div>

              <p className="text-sm sm:text-base text-gray-600 mt-1">
                {item.description}
              </p>

              <p className="text-lg font-medium mt-3">
                {item.price}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Best_Seleers_content;
