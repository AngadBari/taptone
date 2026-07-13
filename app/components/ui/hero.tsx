
import React from 'react'
import { Doto } from 'next/font/google'
import CopyNpm from "@/app/use/Copynpm"
import { Sound } from '../sound';
import Link from 'next/link';
import "tap-tone"
import ViewCounter from '../ViewCounter';


const doto = Doto({
  subsets: ["latin"],
  weight: "800",
});


const Hero = () => {
  return (
    <main className='  mt-25'>

       

        <div className= "max-w-2xl mx-auto">

        <Link href={"https://github.com/AngadBari/taptone"}  className=" flex justify-center">
            <p className=" text-center border border-red-600 px-8 py-1 font-mono text-[13px] bg-red-300 text-red-700"> v1  . <span className="">Early Preview</span> </p>
        </Link>


<div className=" flex justify-center items-center mt-4">
        <ViewCounter/>

        </div>

        <div className=" mt-3">
         <h1 className={` text-neutral-950 text-center text-[50px]  ${doto.className}`}>Your <span className=" text-red-600">Buttons</span> are </h1> 
          <h1 className={` text-neutral-950 text-center text-[40px]  ${doto.className}`}>missing a sound.</h1>
         </div>
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

         <div className=" flex justify-center items-center ">
            <Sound/>
         </div>

         <div className=" font-mono mt-8 flex gap-30 items-center justify-center ">
            <a href='https://github.com/AngadBari/taptone' data-tone-droplet className=" text-[13px]"> <span className=" text-red-600">[</span> Start on Github <span className=" text-red-600">]</span></a>
            <Link href='/use' data-tone-droplet className="text-[13px]"> <span className=" text-red-600">[</span> How to Use <span className=" text-red-600">]</span></Link>
         </div>
    </main>
  ) 
}

export default Hero