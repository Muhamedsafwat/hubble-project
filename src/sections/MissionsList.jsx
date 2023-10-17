"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MissionsList = ({ missions }) => {
  const [filter, setFilter] = useState("all");

  return (
    <div className="px-16">
      <h1 className="mt-32 text-5xl font-bold">Missions</h1>
      <div className="flex mt-16 gap-20 sticky top-48">
        <aside className="text-lg flex flex-col gap-2">
          <h2 className="text-2xl font-semi-bold mb-2">Status</h2>
          <div className="flex gap-2">
            <input
              id="past"
              type="radio"
              name="filter"
              onClick={() => setFilter("Past")}
            />
            <label htmlFor="past">Past</label>
          </div>
          <div className="flex gap-2">
            <input
              id="current"
              type="radio"
              name="filter"
              onClick={() => setFilter("Current")}
            />
            <label htmlFor="current">Current</label>
          </div>
          <div className="flex gap-2">
            <input
              id="future"
              type="radio"
              name="filter"
              onClick={() => setFilter("Future")}
            />
            <label htmlFor="future">Future</label>
          </div>
          <div className="flex gap-2">
            <input
              id="proposed"
              type="radio"
              name="filter"
              onClick={() => setFilter("Proposed")}
            />
            <label htmlFor="propsed">Proposed</label>
          </div>
          <div className="flex gap-2">
            <input
              id="all"
              type="radio"
              name="filter"
              onClick={() => setFilter("all")}
            />
            <label htmlFor="all">All</label>
          </div>
        </aside>
        {missions.filter(
          (item) => item.properties[3].text == filter || filter == "all"
        ).length ? (
          <main className="flex-1 px-20 flex flex-col">
            {missions
              .filter(
                (item) => item.properties[3].text == filter || filter == "all"
              )
              .map((item, index) => (
                <div key={index} className="border-b-2 border-gray-500 py-10">
                  <Link href={`/missions/${item.slug}`} className="flex gap-32">
                    <div className="w-3/4">
                      <p className="text-lg mb-5">
                        Mission | {item.properties[3].text}{" "}
                      </p>
                      <h2 className="text-2xl font-medium">{item.title}</h2>
                      <p className="line-clamp-3 text-xl mt-5">
                        {item.description}
                      </p>
                    </div>
                    <div className="relative w-1/4 aspect-square">
                      <Image src={item.cover} fill className="object-cover" />
                    </div>
                  </Link>
                </div>
              ))}
          </main>
        ) : (
          <main className="flex-1 px-20 flex flex-col items-center text-3xl mt-40">
            <h2>There are no {filter} missions at the moment</h2>
          </main>
        )}
      </div>
    </div>
  );
};

export default MissionsList;
