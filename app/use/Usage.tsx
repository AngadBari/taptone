import React from "react";
import Copynpm from "./Copynpm";
import CodeBook from "./CodeBook";
import Footer from "../components/Footer";

const Usage = () => {
  return (
    <>
      <div className="px-4 mt-5 ">

{/* Install */}
        <h3 className={` font-mono text-neutral-900 text-[12px]   `}>
          Install
        </h3>

        <Copynpm />

{/* Usage */}        

        <h3 className={` font-mono text-neutral-900 text-[12px] mt-7    `}>
          Usage
        </h3>
       <CodeBook/>
       <Footer/>
  
      </div>
    </>
  );
};

export default Usage;
