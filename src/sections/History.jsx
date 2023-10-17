"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const History = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1.3 1"],
  });

  const scaleProgress = useSpring(
    useTransform(scrollYProgress, [0, 1], [1.3, 1.8])
  );

  return (
    <>
      <section className="w-screen overflow-hidden">
        <motion.div
          className="relative w-full h-10 mt-16 lg:mt-0 lg:h-96"
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
        <h2 className="text-2xl lg:text-4xl mx-5 font-semibold text-center my-16">
          THE ROAD TO MAKING HUMANITY <br /> MULTIPLANETARY
        </h2>
      </section>
    </>
  );
};

export default History;
