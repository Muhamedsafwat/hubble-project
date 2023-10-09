"use client";
import React from "react";
import Image from "next/image";

import Link from "next/link";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AiOutlineArrowRight } from "react-icons/ai";

const Gallery = () => {
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
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
    <section
      id="gallery"
      className="py-20 pb-40 px-16 w-screen overflow-hidden"
    >
      <Slider {...sliderSettings}>
        {gallery.map((item, index) => (
          <Link href={item.href} key={index} className="p-2">
            <div className="relative aspect-[4/5] lg:h-[80vh] lg:aspect-auto group">
              <Image
                className="object-cover"
                fill
                src={item.img}
                alt={`project image #${index}`}
              />
              <div className="absolute w-full h-full bg-black bg-opacity-30 group-hover:bg-opacity-0 duration-300">
                <div className="absolute bottom-0 px-5 py-8 flex justify-between w-full items-center">
                  <h3 className="text-2xl font-semibold capitalize">
                    {item.title}
                  </h3>
                  <div className="rounded-full p-1 bg-red-600 flex justify-center items-center">
                    <AiOutlineArrowRight />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </section>
  );
};

const gallery = [
  {
    img: "/launch-crop.jpg",
    title: "Missions",
    href: "/missions",
  },
  {
    img: "/climate-change.webp",
    title: "climate change",
    href: "/climate-change",
  },
  {
    img: "/Training_01.jpg",
    title: "Our team",
    href: "/our-team",
  },
];

export default Gallery;
