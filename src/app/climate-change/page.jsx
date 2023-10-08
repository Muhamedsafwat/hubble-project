import React from "react";
import Image from "next/image";

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
    </div>
  );
};

export default Page;
