import React from "react";

const FAQ_Questions = [
  {
    id: 1,
    question: "  What are your opening hours?",
  },
  {
    id: 2,
    question: "  Do I need a reservation?",
  },
  {
    id: 3,
    question: "  Where are you located?",
  },
  {
    id: 4,
    question: "  Do you offer online ordering?",
  },
  {
    id: 5,
    question: "  What is the average delivery time?",
  },
  {
    id: 6,
    question: "  Is there a minimum order value for delivery?",
  },
  {
    id: 7,
    question: "  What payment methods do you accept?",
  },
  {
    id: 8,
    question: "  Is online payment safe?",
  },
];

const FAQ_Content = () => {
  return (
    <div className="flex justify-center items-center flex-col px-5">
      <div className=" md:mt-10 w-full  md:w-[50%]  rounded-xl mb-10">
        {FAQ_Questions.map((que) => (
          <div
            key={que.id}
            className="bg-white rounded-2xl border border-gray-600 px-2
             shadow-[0px 0px 7px 0px (#00000040)];
              hover:shadow-xl transition duration-300 flex flex-col mb-5">
            <select className="h-[68px] text-xs sm:text-xl md:text-2xl mb-5 outline-none">
              <option>
                {que.id}
                {que.question}
              </option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ_Content;
