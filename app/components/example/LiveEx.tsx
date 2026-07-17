import React from "react";
import SuccessToastDemo from "./SuccessToastDemo";

export const LiveEx = () => {
  return (
    <section className="px-4 mt-8 ">
      <h3
        className={` font-mono text-neutral-900 text-[12px]   border-b py-2 border-neutral-200 `}
      >
        {" "}
        Example / Live
      </h3>

      {/* Example 1 */}
      <div className=" flex items-center justify-between border-b py-2 border-neutral-200">
        <div className="mt-2 px-3">
          <h2 className="font-mono text-[12px] text-neutral-900 tracking-tight ">
            Sound Press
          </h2>
          <p className="font-mono text-[12px] text-neutral-500">
            +data-tone-press
          </p>
        </div>
        <div className="mt-2">
          <button
            data-tone-press
            className="px-5 py-2 rounded-full bg-neutral-950 text-white font-mono text-[12px] hover:bg-neutral-800 hover:scale-110 transition-all duration-200 hover:text-sky-300"
          >
            Save
          </button>
        </div>
      </div>

      <div className=" flex items-center justify-between border-b py-2 border-neutral-200">
        <div className="mt-5 px-3">
          <h2 className="font-mono text-[12px] text-neutral-900 tracking-tight ">
            Sound Success
          </h2>
          <p className="font-mono text-[12px] text-neutral-500">
            +data-tone-success
          </p>
        </div>
        <div className="">
          <SuccessToastDemo />
        </div>
      </div>

      <div className="border-b border-neutral-200 py-2">
  <div className="mt-5 flex w-full items-center justify-between px-3">
    <div>
      <h2 className="font-mono text-[12px] tracking-tight text-neutral-900">
        Sound hover
      </h2>
      <p className="font-mono text-[12px] text-neutral-500">
      +data-hover-tap <br/>
      +data-hover-tick 
      </p>
    </div>

    <div className="flex gap-3 font-mono text-[12px] tracking-tight text-blue-600 " >
      <p data-hover-tap className=" cursor-pointer hover:text-neutral-900">Home</p>
      <p  data-hover-tap className=" cursor-pointer hover:text-neutral-900">Project</p>
      <p  data-hover-tap  className=" cursor-pointer hover:text-neutral-900">About</p>
    </div>
  </div>
</div>


    </section>
  );
};
