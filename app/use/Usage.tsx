import React from "react";
import Copynpm from "./Copynpm";
import CodeBook from "./CodeBook";

const Usage = () => {
  return (
    <>
      <div className="px-4 mt-5 ">

{/* Install */}
        <h3 className={` font-mono text-neutral-900 text-[14px]    `}>
          Install
        </h3>

        <Copynpm />

{/* Usage */}        

        <h3 className={` font-mono text-neutral-900 text-[14px] mt-7    `}>
          Usage
        </h3>
       <CodeBook/>

        
      </div>
    </>
  );
};

export default Usage;
