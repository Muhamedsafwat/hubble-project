"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const History = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1.3 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 1.13]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "15px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "15px",
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
    <>
      <section className="pb-28 w-screen overflow-hidden">
        <motion.div
          className="relative w-full h-16 mt-16 lg:mt-0 lg:h-96"
          style={{
            opacity: scrollYProgress,
            scale: scaleProgress,
          }}
          ref={containerRef}
        >
          <Image
            src="/horizon.webp"
            fill
            className="object-cover"
            alt="horizon"
          />
        </motion.div>
        <h2 className="text-3xl lg:text-4xl mx-5 font-semibold text-center my-16">
          THE ROAD TO MAKING HUMANITY <br /> MULTIPLANETARY
        </h2>
      </section>
    </>
  );
};

export default History;
