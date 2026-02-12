import React, { useState } from "react";
import ToggleButton from "../components/ToggleButton.jsx";
import { RiFilter3Fill } from "@remixicon/react";
import { RiSearchLine } from "@remixicon/react";
import { RiStarSFill } from "@remixicon/react";
const menuItems = [
  // ===== BURGER =====
  {
    id: 1,
    name: "Veg Burger",
    category: "burger",
    veg: true,
    image: "/imgs/menu-2.png",
    ingredients: "Tomato, Cheese, Lettuce",
    price: 25,
    rating: 4,
  },
  {
    id: 2,
    name: "Chicken Burger",
    category: "burger",
    veg: false,
    image: "/imgs/menu-2.png",
    ingredients: "Chicken Patty, Mayo",
    price: 35,
    rating: 5,
  },

  // ===== PIZZA =====
  {
    id: 3,
    name: "Margherita Pizza",
    category: "pizza",
    veg: true,
    image: "/imgs/menu-3.png",
    ingredients: "Cheese, Tomato Sauce",
    price: 40,
    rating: 5,
  },
  {
    id: 4,
    name: "Pepperoni Pizza",
    category: "pizza",
    veg: false,
    image: "/imgs/menu-3.png",
    ingredients: "Pepperoni, Cheese",
    price: 50,
    rating: 4,
  },

  // ===== SANDWICH =====
  {
    id: 5,
    name: "Veg Sandwich",
    category: "sandwich",
    veg: true,
    image: "/imgs/menu-4.png",
    ingredients: "Cucumber, Tomato, Butter",
    price: 20,
    rating: 4,
  },
  {
    id: 6,
    name: "Grilled Chicken Sandwich",
    category: "sandwich",
    veg: false,
    image: "/imgs/menu-4.png",
    ingredients: "Chicken, Cheese",
    price: 30,
    rating: 5,
  },

  // ===== PASTA =====
  {
    id: 7,
    name: "White Sauce Pasta",
    category: "pasta",
    veg: true,
    image: "/imgs/menu-5.png",
    ingredients: "Cream, Herbs",
    price: 30,
    rating: 4,
  },
  {
    id: 8,
    name: "Chicken Alfredo Pasta",
    category: "pasta",
    veg: false,
    image: "/imgs/menu-5.png",
    ingredients: "Chicken, Cream",
    price: 45,
    rating: 5,
  },

  // ===== RICE =====
  {
    id: 9,
    name: "Veg Fried Rice",
    category: "rice",
    veg: true,
    image: "/imgs/menu-6.png",
    ingredients: "Vegetables, Soy Sauce",
    price: 22,
    rating: 4,
  },
  {
    id: 10,
    name: "Chicken Biryani",
    category: "rice",
    veg: false,
    image: "/imgs/menu-6.png",
    ingredients: "Chicken, Spices",
    price: 55,
    rating: 5,
  },

  // ===== NOODLES =====
  {
    id: 11,
    name: "Veg Hakka Noodles",
    category: "noodles",
    veg: true,
    image: "/imgs/menu-7.png",
    ingredients: "Vegetables, Sauces",
    price: 18,
    rating: 4,
  },
  {
    id: 12,
    name: "Chicken Noodles",
    category: "noodles",
    veg: false,
    image: "/imgs/menu-7.png",
    ingredients: "Chicken, Spices",
    price: 28,
    rating: 5,
  },
];

const Menu_content = () => {
  const [search, setSearch] = useState("");
  const [onlyVeg, setOnlyVeg] = useState(false);
  const [category, setCategory] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState(100);

  const filteredMenu = menuItems
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .filter((item) => (onlyVeg ? item.veg : true))
    .filter((item) => (category ? item.category === category : true))
    .filter((item) => item.price <= maxPrice)
    .sort((a, b) => {
      if (sortPrice === "low") return a.price - b.price;
      if (sortPrice === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-10">
      <div className="flex-1">
        <div className="hidden md:flex justify-between items-center mb-8">
          <div className="flex gap-6">
            <select className="outline-none">
              <option>Sort By: Default</option>
            </select>

            <select className="outline-none">
              <option>Price: Low to High</option>
            </select>

            <select className="outline-none">
              <option>Rating</option>
            </select>
          </div>

          <div className="flex items-center gap-3">
            <ToggleButton
              defaultOn={false}
              onToggle={(state) => setOnlyVeg(state)}
            />
            <span>Veg</span>
          </div>
        </div>

        <div className="md:hidden mb-5">
          <RiFilter3Fill size={24} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredMenu.map((item) => (
            <div key={item.id} className="w-full">
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover rounded-2xl"
              />

              <div className="mt-4">
                <div className="flex justify-between">
                  <h1 className="text-xl font-semibold text-[#00A890]">
                    {item.name}
                  </h1>
                  <span className="flex items-center gap-1">
                    <RiStarSFill className="text-[#FFCF00]" />
                    {item.rating}.00
                  </span>
                </div>

                <p className="text-sm mt-2">Ingredients: {item.ingredients}</p>

                <div className="flex justify-between mt-4">
                  <p>{item.price}</p>
                  <button className="border px-3 rounded-sm">+ Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full lg:w-[300px] lg:w-[300px] lg:sticky lg:top-[100px] h-fit">
        <form className="flex mb-6">
          <input
            className="w-full px-3 h-11 text-lg outline-none border rounded-l-lg"
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            placeholder="Search Menu"
          />
          <div className="w-12 bg-[#00a890] flex justify-center items-center rounded-r-lg">
            <RiSearchLine className="text-white" />
          </div>
        </form>

        <div className="p-5 shadow rounded-2xl">
          <h1 className="text-xl font-medium mb-3">Categories</h1>
          <div className="space-y-2 ">
            <input
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  setCategory("burger");
                } else setCategory("");
              }}
            />
            burger
            <input
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  setCategory("pizza");
                } else {
                  setCategory("");
                }
              }}
            />
            Pizza
            <input
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  setCategory("pasta");
                } else {
                  setCategory("");
                }
              }}
            />
            Pasta
            <input
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  setCategory("rice");
                } else {
                  setCategory("");
                }
              }}
            />{" "}
            Rice
            <input
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  setCategory("noodles");
                } else {
                  setCategory("");
                }
              }}
            />
            Noodles
          </div>

          <div className="mt-8">
            <h1 className="text-xl font-medium text-[#00A890] mb-2">
              Filter by price
            </h1>
            <div className="flex justify-between text-sm mb-2">
              <span>$5</span>
              <span>$100</span>
            </div>
            <input
              type="range"
              className="w-full accent-[#00A890]"
              min="5"
              max="100"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>

          <div className="mt-8">
            <h1 className="text-xl font-medium mb-3">Latest Product</h1>
            <div className="flex gap-3">
              <img
                src="/imgs/menu-3.png"
                className="h-14 w-14 rounded-xl"
                alt=""
              />
              <div>
                <div className="flex justify-between gap-4">
                  <p>Burger</p>
                  <p>$35</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <RiStarSFill key={i} className="text-[#FFCF00]" />
                  ))}
                </div>
                <p>5.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu_content;
