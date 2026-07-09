"use client";
import Link from "next/link";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import  {Sound}  from "./components/sound";
import { LiveEx } from "./components/example/LiveEx";
import Copynpm from "./components/use/Copynpm"
import Usage from "./components/use/Usage";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: "800",
});

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[510px] px-4 mb-10">
      <header className="mt-10 flex items-center justify-between p-4">
        <h1
          className={`${inter.className} cursor-pointer text-[18px] transition-colors hover:text-neutral-600 `}
        >
          TapTone
         
           <motion.svg
           data-tone-tap
              whileHover={{
                scale: 1.2,
                rotate: 15,
               fill: "#F62440",
              }}
              animate={{
                
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="inline-block ml-1 align-middle"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M14.504 8.522l-1.758 -4.032a.814 .814 0 0 0 -1.492 0l-1.759 4.032c-.19 .436 -.537 .784 -.973 .973l-4.032 1.759a.814 .814 0 0 0 0 1.492l4.033 1.758c.436 .19 .784 .538 .973 .974l1.759 4.033a.814 .814 0 0 0 1.492 0l1.758 -4.033c.19 -.436 .538 -.784 .974 -.974l4.033 -1.758a.814 .814 0 0 0 0 -1.492l-4.033 -1.759a1.88 1.88 0 0 1 -.974 -.973" />
              <path d="M3 3l2 2" />
              <path d="M21 3l-2 2" />
              <path d="M3 21l2 -2" />
              <path d="M21 21l-2 -2" />
            </motion.svg>
        </h1>

        <p className="font-mono text-[12px] text-neutral-500">
          v1.0.0 /{" "}
          <Link
            href="https://www.npmjs.com/package/tap-tone?activeTab=readme"
            className="text-neutral-900 "
          >
            npm
          </Link>
        </p>
      </header>
      <section className="mt-3 px-4">
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
      <Footer/>
      
    </main>
  );
}

