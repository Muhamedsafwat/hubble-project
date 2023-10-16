import MissionsList from "@/sections/MissionsList";

import { notFound } from "next/navigation";

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/missions`, {
    next: { revalidate: 100 },
  });
  if (res.ok) {
    return res.json();
  } else {
    return notFound();
  }
}

const Page = async () => {
  const missions = await getData();
  return <MissionsList missions={missions} />;
};

export default Page;
