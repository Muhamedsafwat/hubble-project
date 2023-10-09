"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="h-screen bg-[url('/HS-hero.png')] bg-top bg-cover bg-no-repeat">
      <div className="w-full h-full absolute bg-black bg-opacity-30 flex justify-center items-center flex-col">
        <motion.div
          initial={{ opacity: 0, translateY: 100 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="font-mono text-center text-5xl lg:text-[120px] font-semibold mt-[-6.5rem]">
            HUBBLE
          </h1>
          <p className="mt-2 text-center text-lg">Making life multiplanetary</p>
        </motion.div>
        <Link href="/#gallery">
          <BsChevronDown
            size={30}
            className="absolute bottom-8 animate-pulse left-1/2 translate-x-[-50%]"
          />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
