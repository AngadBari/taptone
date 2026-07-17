"use client";

import React, { useState } from "react";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Heart, Cancel01Icon } from "@hugeicons/core-free-icons";

import { Smooch_Sans } from "next/font/google";

const smoochSans = Smooch_Sans({
  subsets: ["latin"],
  weight: ["400"],
});

export const SupportButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
      data-tone-press
        onClick={() => setOpen(!open)}
        className="
        fixed bottom-6 right-16
        flex h-10 w-10 cursor-pointer items-center justify-center
        rounded-full border border-neutral-300 bg-white
        shadow-lg
       
      "
      >
        {open ? (
          <HugeiconsIcon
            icon={Cancel01Icon}
            size={24}
            color="currentColor"
            strokeWidth={1.5}
          />
        ) : (
          <HugeiconsIcon
            icon={Heart}
            size={24}
            color="currentColor"
            strokeWidth={1.5}
          />
        )}
      </div>

      {open && (
        <div
        data-tone-mouse1
          className="
          fixed bottom-20 right-16
          w-72 rounded-2xl border border-neutral-200
          bg-white p-4 shadow-2xl

        
        "
        >
          <div className="flex flex-col gap-3">
            <a href="https://buymeacoffee.com/angadbari2i" target="_blank">
              <div className=" rounded-xl border border-neutral-300 px-4 py-2 text-center text-sm font-medium flex items-center gap-3">
                <Image
                  src="/img/buyme.svg"
                  alt="Buy Me a Coffee"
                  width={32}
                  height={32}
                />
                <p
                  className={`text-xl text-neutral-500 ${smoochSans.className}`}
                >
                  Buy Me a Coffee
                </p>
              </div>
            </a>

            
              <div className=" rounded-xl border border-neutral-300 px-4 py-2 text-center text-[12px] font-medium  font-mono ">
                
                <Image
                  src="/img/QRGpay.png"
                  alt="Buy Me a Coffee"
                  width={500}
                  height={500}
                  className=" "
                />
                <p className=" text-neutral-700"><span className="">UPI ID:</span>angadbari2-1@oksbi</p>
              </div>
           
          </div>
        </div>
      )}
    </>
  );
};
