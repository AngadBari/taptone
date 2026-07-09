import React from "react";
import SuccessToastDemo from "./SuccessToastDemo";

export const LiveEx = () => {
  return (
    <section className="px-4 mt-8 ">
      <h3
        className={` font-mono text-neutral-900 text-[14px]   border-b py-2 border-neutral-200 `}
      >
        {" "}
        Example / Live
      </h3>

{/* Example 1 */}
      <div className=" flex items-center justify-between border-b py-2 border-neutral-200">
        <div className="mt-2 px-3">
          <h2 className="font-mono text-[14px] text-neutral-900 tracking-tight ">
            Sound Press
          </h2>
          <p className="font-mono text-[12px] text-neutral-500">
            +data-tone-press
          </p>
        </div>
        <div className="mt-2">
          <button
            data-tone-press
            className="px-5 py-2 rounded-full bg-neutral-950 text-white font-mono text-[15px] hover:bg-neutral-800 transition-all duration-200"
          >
            Save
          </button>
        </div>
      </div>

<div className=" flex items-center justify-between border-b py-2 border-neutral-200">
    <div className="mt-5 px-3">
          <h2 className="font-mono text-[14px] text-neutral-900 tracking-tight ">
            Sound Success
          </h2>
          <p className="font-mono text-[12px] text-neutral-500">
           +data-tone-success
          </p>
        </div>
      <div className="">
        <SuccessToastDemo/>
        </div>  
    
</div>


        




    </section>
  );
};
