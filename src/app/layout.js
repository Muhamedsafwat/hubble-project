import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Hubble",
  description: "We simplify science!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className + "w-screen overflow-x-hidden"}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
