"use client";

import React from "react";
import "tap-tone";

export const Sound = () => {
  return (
    <section className="px-4 mt-8 max-w-2xl flex  flex-wrap gap-3">
      <SoundBtn data-tone-beep>
        <CirclePattern className="bg-amber-700" />
        <SoundName>Beep</SoundName>
      </SoundBtn>

      <SoundBtn data-tone-success>
        <CirclePattern className="bg-green-600" />
        <SoundName>Success</SoundName>
      </SoundBtn>

      <SoundBtn data-tone-copy>
        <CirclePattern className="bg-purple-500" />
        <SoundName>Copy</SoundName>
      </SoundBtn>

      <SoundBtn data-tone-click>
        <CirclePattern className="bg-pink-400" />
        <SoundName>Click</SoundName>
      </SoundBtn>


      <SoundBtn data-tone-error>
        <CirclePattern className="bg-red-500" />
        <SoundName>Error</SoundName>
      </SoundBtn>

     <SoundBtn data-tone-tap>
        <CirclePattern className="bg-yellow-400" />
        <SoundName>Tap</SoundName>
      </SoundBtn>

       <SoundBtn data-tone-press>
        <CirclePattern className="bg-sky-400" />
        <SoundName>Press</SoundName>
      </SoundBtn>

       <SoundBtn data-tone-remove>
        <CirclePattern className="bg-pink-700" />
        <SoundName>Remove</SoundName>
      </SoundBtn>

       <SoundBtn data-tone-droplet>
        <CirclePattern className="bg-mauve-950" />
        <SoundName>Droplet</SoundName>
      </SoundBtn>

       <SoundBtn data-tone-mouse1>
        <CirclePattern className="bg-cyan-500" />
        <SoundName>Mouse</SoundName>
      </SoundBtn>

       <SoundBtn data-tone-tick>
        <CirclePattern className="bg-mist-500" />
        <SoundName>tick</SoundName>
      </SoundBtn>

        <SoundBtn data-tone-drum>
        <CirclePattern className="bg-mist-500" />
        <SoundName>Drum</SoundName>
      </SoundBtn>

      <SoundBtn data-tone-change>
        <CirclePattern className="bg-mist-500" />
        <SoundName>Change</SoundName>
      </SoundBtn>




    </section>

    
  );
};

const SoundBtn = ({
  className = "",
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      
      className={`flex items-center gap-3 border border-neutral-400 rounded-md px-2  hover:border-dashed hover:scale-105 transition-all duration-300 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const CirclePattern = ({
  className = "",
}: {
  className?: string;
}) => {
  return (
    <div
      className={`w-2 h-2 rounded-full border  border-black ${className} `}
    />
  );
};

const SoundName = ({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span className={`font-mono text-[13px] text-neutral-900 ${className}`}>
      {children}
    </span>
  );
};