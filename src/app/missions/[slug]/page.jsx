import React from "react";
import Image from "next/image";

import { notFound } from "next/navigation";

import RelatedTopics from "@/components/RelatedTopics";

async function getData(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/missions/${slug}`,
    {
      next: { revalidate: 100 },
    }
  );
  if (res.ok) {
    return res.json();
  } else {
    return notFound();
  }
}

const page = async ({ params }) => {
  const data = await getData(params.slug);
  return (
    <>
      <header>
        <div className="w-full h-screen relative">
          <Image src={data.cover} fill className="object-cover" />
        </div>
        <div className="absolute top-0 left-0 h-full pl-40 w-full flex flex-col items-start justify-center bg-gradient-to-r from-black to-transparent">
          <div className="w-1/3">
            <h1 className="text-7xl font-extrabold">{data.title}</h1>
            <p className="text-2xl mt-8 line-clamp-6">{data.description}</p>
          </div>
        </div>
      </header>
      <div className="flex justify-end relative mt-[-3rem]">
        <div className="flex w-[80vw] bg-slate-800 px-10 py-14 gap-20">
          {data.properties.map((item, index) => (
            <div key={index}>
              <h2 className="uppercase text-teal-400 font-medium mb-2">
                {item.label}
              </h2>
              <p className="text-lg">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <main className="px-40 mt-20 max-w-6xl text-2xl">
        {data.body.map((item, index) => (
          <section key={index}>
            <h2 className="text-4xl font-medium mt-16 mb-8">{item.heading}</h2>
            <p className="text-lg">{item.text}</p>
          </section>
        ))}
      </main>
      <RelatedTopics
        heading="MORE ABOUT STARS AND GALAXIES"
        topics={relatedCards}
      />
    </>
  );
};

const cards = [
  {
    label: "launch date",
    details: "Dec. 1, 2024",
  },
  {
    label: "type",
    details: "Airborne, Instrument",
  },
  {
    label: "target",
    details: "Stars and Galaxies",
  },
  {
    label: "status",
    details: "Future",
  },
];

const sections = [
  {
    heading: "About the mission",
    text: ` ASTHROS (short for Astrophysics Stratospheric Telescope for High
       Spectral Resolution Observations at Submillimeter-wavelengths) is a high-altitude balloon
        mission for studying astrophysical phenomena.
      Tentatively scheduled to launch in December 2023 from NASA's Long
      Duration Balloon Camp near McMurdo Station in Antarctica, ASTHROS will
      aim to fly for 21 to 28 days an altitude of about 130,000 feet (24.6
      miles or 40 kilometers) - high enough to observe wavelengths of light
      blocked by Earth's atmosphere. When fully inflated, the
      40-million-cubic-feet helium balloon will be about 400 feet (150
      meters) wide, or roughly the size of a football stadium. The current
      best estimate for the weight of the observatory, including the
      gondola, solar panels, antenna, scientific instrument and
      communication systems, is about 5,500 pounds (2,500 kilograms).`,
  },
  {
    heading: "Telescope",
    text: `The ASTHROS telescope features a lightweight 8.4-foot (2.5-meter) antenna to collect far-infrared light. (The telescope is tied for the largest ever to fly on a high-altitude balloon.) A gondola beneath the balloon will carry the telescope, instrument and other hardware. During flight, scientists can precisely control the direction the telescope points and download data in real time using satellite links. The telescope's detectors must be cooled down to 4 Kelvin (minus 452.47 degrees Fahrenheit, or minus 269.15 Celsius). While many balloon and space missions carry liquid helium to keep instruments cold, that means the means the mission lifetime is limited by how much helium is on board. ASTHROS will instead use a cryocooler powered by electricity from its solar panels.`,
  },
  {
    heading: "Instrument and Science",
    text: `One of ASTHROS' main science goals is to provide new information about stellar feedback in the Milky Way and other galaxies, a process in which stars either accelerate or decelerate the formation of new stars in their galaxy. Stellar feedback has played a critical role in the evolution of galaxies throughout the universe's history. Without it, the available gas and dust in galaxies like our own would have coalesced into stars long ago and no new star formation would take place.
    To investigate stellar feedback, ASTHROS will use technique called high-spectral resolution spectrometry, which allows scientists to identify specific chemical elements in gas and dust clouds, and to measure precisely the density and dynamics of those elements. ASTHROS will be the first mission to conduct high spectral resolution spectrometry in a few specific wavelengths of light, and identify two specific nitrogen ions that are formed by the processes that drive stellar feedback. This will enable astronomers to create 3D maps of star-forming regions, as well as the density and movement of the gas, to learn about the influence of stellar feedback.
    As a target of opportunity, ASTHROS will observe TW Hydrae, a young star surrounded by a wide disk of dust and gas where planets may be forming. With its unique capabilities, ASTHROS will measure the total mass of this protoplanetary disk and show how this mass is distributed throughout. These observations could potentially reveal places where the dust is clumping together to form planets. Learning more about protoplanetary disks could help astronomers understand how different types of planets form in young solar systems.
    ASTHROS' science observations will complement datasets from other NASA missions that have observed in the infrared wavelength range, including the Stratospheric Observatory for Infrared Astronomy (SOFIA), the Wide-Field Infrared Survey Explorer (WISE), the Herschel Space Telescope, the Spitzer Space Telescope, and the Hubble Space Telescope.
    `,
  },
  {
    heading: "Mission Partners",
    text: "NASA's Balloon Science Program, which operates out of the Wallops Island Flight Facility in Virginia and its Columbia Science Balloon Facility, will provide the balloon and launch services. The Applied Physics Laboratory at Johns Hopkins University in Maryland is developing the gondola and pointing systems. Media Lario S.r.l. in Lecco, Italy, is building the 8.4-foot (2.5-meter) antenna unit. The Lockheed Martin Space Advanced Technology Center in Palo Alto, CA, developed the payload cryocooler under NASA's Advanced Cryocooler Technology Development Program. The National Science Foundation, through the U.S. Antarctic Program, manages McMurdo Station. NASA's Jet Propulsion Laboratory, a division of Caltech in Pasadena, California, manages the mission on behalf of the Astrophysics Division in NASA's Science Mission Directorate. JPL is also responsible for the mission payload (which includes the science instrument, telescope, and other subsystems, such as the cryogenic cooling, instrument command and data handling systems). Jose Siles, an engineer at JPL, is the project manager. Jorge Pineda, a JPL astrophysicist, is the principal investigator.",
  },
  {
    heading: "Science Team",
    text: "Jorge L. Pineda (Principal Investigator, JPL), Jose V. Siles (Project Manager, JPL), Jonathan Kawamura (JPL), Paul Goldsmith (JPL), William Langer (JPL), Youngmin Seo (JPL), Darren Hayton (JPL), Imran Mehdi (JPL), Christopher Groppi (Arizona State University), Pietro Bernasconi (Johns Hopkins Applied Physics Laboratory), Casey Lisse (Johns Hopkins Applied Physics Laboratory), Loren Anderson (University of West Virginia), Cara Battersby (University of Connecticut), Ilsedore Cleeves (University of Virginia), Ralf Klessen (Heidelberg University, Germany), Laurent Pagani (Observatory of Paris), Markus Roellig (University of Cologne, Germany), Nicola Schneider (University of Cologne, Germany), Xander Tielens (Leiden University, The Netherlands), Tanio Diaz Santos (Diego Portales University, Chile), Roberto Assef (Diego Portales University, Chile), Rodrigo Herrera (Concepcion University, Chile), Joshua Gundersen (University of Miami)",
  },
];

const relatedCards = [
  {
    img: "/2008.webp",
    title: "Herschel space observatory",
  },
  {
    img: "/2010.jpg",
    title: "infrared astronomical satellite",
  },
  {
    img: "/2012.webp",
    title: "NuStar",
  },
  {
    img: "/2015.jpg",
    title: "Cold atom Laboratory",
  },
  {
    img: "/2016.jpeg",
    title: "Galxy evolution Explorer",
  },
];

export default page;
