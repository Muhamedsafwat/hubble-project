"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { BiCategoryAlt } from "react-icons/bi";
import { CiLocationOn, CiMail } from "react-icons/ci";

const Page = () => {
  return (
    <div className="py-28 flex flex-col items-center">
      <h1 className="text-center text-6xl font-semibold mb-10">Our Team</h1>
      {members.map((item, index) => (
        <motion.div
          initial={{ x: 10 }}
          whileInView={{ x: 0 }}
          key={index}
          className="flex gap-10 even:flex-row-reverse max-w-6xl w-full group"
        >
          <div className="relative w-1/4 aspect-square rounded-full overflow-hidden border-4 border-gray-500">
            <Image
              src={item.img}
              fill
              className="object-cover object-top group-hover:scale-110 grayscale group-hover:grayscale-0 duration-300"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-3xl font-bold mb-5">{item.role}</p>
            <p className="flex items-center gap-1">
              <BiCategoryAlt /> {item.edu}
            </p>
            <p className="flex items-center gap-1">
              <CiLocationOn /> {item.uni}
            </p>
            <div className="flex items-center gap-1">
              <CiMail />
              <Link href={`mailto:${item.email}`}>{item.email}</Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const members = [
  {
    name: "Ramy Mohamed Mohamed Said",
    img: "/team/ramy.png",
    edu: "Mechatronics Engineering",
    uni: "ITMO University",
    role: "Team Leader & Data Planner",
    email: "ramymhmd198@gmail.com",
  },
  {
    name: "Muhamed Safwat Muhamed",
    img: "/team/safwat.png",
    edu: "Computer & Systems Engineering",
    uni: "Zagazig University",
    role: "Web developer",
    email: "Musafwat666@gmail.com",
  },
  {
    name: "Peter Talaat Abdelmeseh Qozman",
    img: "/team/peter.png",
    edu: "Business Administration",
    uni: "Suez Canal University",
    role: "Presentation",
    email: "peter.talaat.abdelmeseh@gmail.com",
  },
  {
    name: "Mohamed Metwaly Abdelaziz",
    img: "/team/metwaly.png",
    edu: "Information technology",
    uni: "Suez Canal University",
    role: "Video Editor",
    email: "metwaly834@gmail.com",
  },
  {
    name: "Esraa Sheren Mostafa Ahmed Abdullah",
    img: "/team/israa.png",
    edu: "Physics and Chemistry student",
    uni: "Ain Shams University",
    role: "Graphic Designer",
    email: "esraasheren1@gmail.com",
  },
];

export default Page;
