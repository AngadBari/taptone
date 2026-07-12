
import React from 'react'
import { Doto } from 'next/font/google'
import CopyNpm from "@/app/components/use/Copynpm"

const doto = Doto({
  subsets: ["latin"],
  weight: "800",
});


const Hero = () => {
  return (
    <main className='mt-25'>

        <div className= "max-w-2xl mx-auto">
         <h1 className={` text-neutral-950 text-center text-[50px]  ${doto.className}`}>Your <span className=" text-red-600">Buttons</span> are </h1> 
          <h1 className={` text-neutral-950 text-center text-[40px]  ${doto.className}`}>missing a sound.</h1>
         </div>

         <div className="max-w-xl mt-8 mx-auto  px-8">
             <p className={` font-mono text-[15px] text-neutral-500`}>
          <span className=" text-neutral-900">
            Beautiful UI interaction sounds that make websites feel physical.
          </span>{" "}
          no audio files, no dependencies, just a simple and lightweight
          package.
          <span className=" text-neutral-900">Only Install and Use it!!</span>
        </p>
         </div>


         <div className=" flex justify-center items-center">
            <CopyNpm/>
         </div>
    </main>
  ) 
}

export default Hero