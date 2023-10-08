import { Gallery, Hero, Destinations, History } from "@/sections";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <Destinations />
      <History />
      <Footer />
    </main>
  );
}
