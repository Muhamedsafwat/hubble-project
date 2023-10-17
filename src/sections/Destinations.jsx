"use client";
import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const Destinations = () => {
  //define scroll progress
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["0 1", "1.5 1"],
  });

  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  //iss scroll animation
  const desktopIssRotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [-10, 0])
  );
  const mobileIssRotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [-10, 5])
  );
  const issRotateProgress = isDesktop ? desktopIssRotate : mobileIssRotate;

  const desktopIssImgRotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [10, 0])
  );
  const mobileIssImgRotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [10, -5])
  );
  const issImgRotateProgress = isDesktop
    ? desktopIssImgRotate
    : mobileIssImgRotate;

  //dragon scroll animation

  const desktopDragonRotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [5, 25])
  );
  const mobileDragonRotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [20, 30])
  );
  const dragonRotateProgress = isDesktop
    ? desktopDragonRotate
    : mobileDragonRotate;

  const deskTopDragonImgRotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [-5, -25])
  );
  const mobileDragonImgRotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [-20, -30])
  );

  const dragonImgRotateProgress = isDesktop
    ? deskTopDragonImgRotate
    : mobileDragonImgRotate;

  //moon scroll animation
  const desktopMoonRotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [45, 60])
  );
  const mobileMoonRotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [55, 64])
  );
  const moonRotateProgress = isDesktop ? desktopMoonRotate : mobileMoonRotate;

  const desktopMoonImgRotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [-45, -60])
  );
  const mobileMoonImgRotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [-55, -64])
  );
  const moonImgRotateProgress = isDesktop
    ? desktopMoonImgRotate
    : mobileMoonImgRotate;

  //mars scroll animation

  const desktopMarsRotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [73, 80])
  );
  const mobileMarsRotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [60, 68])
  );
  const marsRotateProgress = isDesktop ? desktopMarsRotate : mobileMarsRotate;

  const desktopMarsImgRotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [-73, -80])
  );
  const mobileMarsImgRotate = useSpring(
    useTransform(scrollYProgress, [0, 1], [-60, -68])
  );
  const marsImgRotateProgress = isDesktop
    ? desktopMarsImgRotate
    : mobileMarsImgRotate;

  return (
    <section ref={containerRef} className="overflow-hidden mt-10">
      <h2 className="text-center text-4xl lg:text-5xl font-semibold mb-10 lg:mb-0">
        DESTINATIONS
      </h2>
      <div className="relative w-screen h-[80vh] flex items-center flex-col overflow-hidden">
        <div className="absolute bottom-0 left-1/2 translate-x-[-50%] ">
          <Image alt="earth" src="/Earth.svg" width={350} height={350} />
        </div>
        <div className="flex justify-center items-center bottom-[-10%] absolute">
          <motion.div
            style={{
              rotate: issRotateProgress,
            }}
            className="absolute aspect-square w-[26rem] lg:w-[40rem] rounded-full border-[2px] border-dotted border-gray-400 z-[5]"
          >
            <motion.div
              style={{ rotate: issImgRotateProgress }}
              className="absolute top-[-3rem] w-36 h-36"
            >
              <Image
                className="opacity-60 hover:opacity-100 duration-300"
                fill
                alt="iss"
                src="/destination-iss.svg"
              />
            </motion.div>
          </motion.div>
          <motion.div
            style={{
              rotate: dragonRotateProgress,
            }}
            className="absolute aspect-square w-[38rem] lg:w-[48rem] rounded-full border-[2px] border-dotted border-gray-400 z-[4]"
          >
            <motion.div
              style={{ rotate: dragonImgRotateProgress }}
              className="absolute top-2 w-40 h-40 lg:w-52 lg:h-52"
            >
              <Image
                alt="dragon"
                className="opacity-60 hover:opacity-100 duration-300"
                src="/destination-dragon.svg"
                fill
              />
            </motion.div>
          </motion.div>
          <motion.div
            style={{
              rotate: moonRotateProgress,
            }}
            className="absolute w-[51rem] lg:w-[65rem] aspect-square rounded-full border-[2px] border-dotted border-gray-400 z-[3]"
          >
            <motion.div
              style={{
                rotate: moonImgRotateProgress,
              }}
              className="absolute top-36 lg:w-48 lg:h-48 w-32 h-32"
            >
              <Image
                alt="moon"
                className="opacity-60 hover:opacity-100 duration-300"
                src="/destination-moon.svg"
                fill
              />
            </motion.div>
          </motion.div>
          <motion.div
            style={{
              rotate: marsRotateProgress,
            }}
            className="absolute aspect-square w-[70rem] lg:w-[80rem] rounded-full z-[2]"
          >
            <motion.div
              className="absolute top-28 lg:w-48 lg:h-48 w-64 h-64"
              style={{
                rotate: marsImgRotateProgress,
              }}
            >
              <Image
                alt="mars"
                className="opacity-60 hover:opacity-100 duration-300"
                src="/destination-mars.svg"
                fill
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
