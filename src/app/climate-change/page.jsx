import React from "react";
import Image from "next/image";

import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const Page = () => {
  return (
    <div>
      <section className="relative h-[90vh] ">
        <Image src="/climate-change.webp" fill className="object-cover" />
        <div className="absolute w-2/3 px-20 h-full bg-gradient-to-r from-black to-transparent bg-opacity-40 flex flex-col justify-center">
          <h1 className="text-7xl font-semibold">Climate Change</h1>
          <p className="text-xl mt-5">
            NASA is a global leader in studying Earth’s changing climate. The
            agency’s observations of our home planet from space, the air, and on
            the ground are helping us learn how the interconnected systems of
            our planet interact.
          </p>
        </div>
      </section>
      <section className="relative h-screen">
        <Image src="/horizon.webp" fill className="object-cover" />
        <div className="absolute w-full h-full p-20 bg-black bg-opacity-30">
          <h2 className="text-4xl font-bold">
            Understanding our planet to benefit humankind
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-10">
            {cards.map((item, index) => (
              <div
                key={index}
                className="border-t-2 border-gray-500 pt-5 mt-8 cursor-pointer hover:translate-y-[-5px] duration-300"
              >
                <h3 className="text-[#57A5E7] text-3xl font-bold capitalize [text-shadow:_0_3px_0_rgb(200_200_200_/_50%)]">
                  {item.title}
                </h3>
                <div className="flex">
                  <>{item.icon}</>
                  <p className="text-6xl font-bold mr-2">{item.num}</p>
                  <p>{item.unit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const cards = [
  {
    icon: <AiOutlineArrowUp size={60} />,
    title: "carbon dioxide",
    num: "420",
    unit: "parts per million",
  },
  {
    icon: <AiOutlineArrowUp size={60} />,
    title: "global temprature",
    num: "1.1",
    unit: "C",
  },
  {
    icon: <AiOutlineArrowUp size={60} />,
    title: "methane",
    num: "1923.6",
    unit: "parts per million",
  },
  {
    icon: <AiOutlineArrowUp size={60} />,
    title: "carbon dioxide",
    num: "420",
    unit: "parts per million",
  },
  {
    icon: <AiOutlineArrowDown size={60} />,
    title: "Arctic sea minimim extent",
    num: "12.3",
    unit: "percent per decade",
  },
  {
    icon: <AiOutlineArrowDown size={60} />,
    title: "ice sheets",
    num: "424",
    unit: "billion metric tons per year",
  },
  {
    icon: <AiOutlineArrowUp size={60} />,
    title: "sea level",
    num: "4",
    unit: "inches",
  },
  {
    icon: <AiOutlineArrowUp size={60} />,
    title: "ocean warming",
    num: "345",
    unit: "zettajoules",
  },
];

export default Page;
