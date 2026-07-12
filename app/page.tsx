"use client";
import Link from "next/link";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import  {Sound}  from "./components/sound";
import { LiveEx } from "./components/example/LiveEx";
import Copynpm from "./components/use/Copynpm"
import Usage from "./components/use/Usage";
import Footer from "./components/Footer";
import NavBar from "./components/ui/NavBar";
import Hero from "./components/ui/hero";

const inter = Inter({
  subsets: ["latin"],
  weight: "800",
});

export default function Home() {
  return (
    <main className="mx-auto min-h-screen  px-4 mb-10">
      <NavBar/>
      <Hero/>
     
      {/* <section className="mt-3 px-4">
        <p className={` font-mono text-[13px] text-neutral-500`}>
          <span className=" text-neutral-900">
            Beautiful UI interaction sounds that make websites feel physical.
          </span>{" "}
          no audio files, no dependencies, just a simple and lightweight
          package.
          <span className=" text-neutral-900">Only Install and Use it!!</span>
        </p>
      </section>
      <Sound/>
      <LiveEx/>
      <Usage/>
      <Footer/> */}
       
    </main>
  );
}

