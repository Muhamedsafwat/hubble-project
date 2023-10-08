"use client";
import React from "react";
import Image from "next/image";

import { AiOutlineArrowRight } from "react-icons/ai";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RelatedTopics = ({ heading, topics }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
    ],
    customPaging: function (i) {
      return (
        <div className="rounded-full w-2 h-2 bg-gray-400 duration-200 mt-2"></div>
      );
    },
  };

  return (
    <section className="px-20 my-24">
      <h2 className="text-4xl mx-20 mb-10 font-medium">{heading}</h2>
      <Slider {...sliderSettings}>
        {topics.map((item, index) => (
          <div key={index} className="p-4 group cursor-pointer">
            <div className=" aspect-square relative w-full h-full brightness-95 group-hover:brightness-105 duration-300">
              <Image src={item.img} fill />
              <div className="absolute w-full h-full flex items-end ">
                <div className="bg-gradient-to-t from-gray-900 to-transparent p-5 pt-8 w-full">
                  <h2 className="text-2xl font-medium">{item.title}</h2>
                  <AiOutlineArrowRight
                    size={24}
                    className="mt-3 opacity-0 group-hover:opacity-100 group-hover:ml-3 duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default RelatedTopics;
