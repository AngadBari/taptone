"use client";
import Link from "next/link";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import  {Sound}  from "./components/sound";
import { LiveEx } from "./components/example/LiveEx";
import Copynpm from "./use/Copynpm"
import Usage from "./use/Usage";
import Footer from "./components/Footer";
import NavBar from "./components/ui/NavBar";
import Hero from "./components/ui/hero";
import Heart from "./components/example/Heart";
import Wrong from "./components/example/Wrong";

const inter = Inter({
  subsets: ["latin"],
  weight: "800",
});

export default function Home() {
  return (
    <main  className=" relative mx-auto min-h-screen  px-4 mb-10">
      <NavBar/>
      <Hero/>
     <Heart/>
     <Wrong/>
     
       
    </main>
  );
}

