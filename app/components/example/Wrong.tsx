"use client";

import { useState } from "react";

export default function Wrong() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);

    // Reset animation so it can play every click
    setTimeout(() => setActive(false), 250);
  };

  return (
   <button
  data-tone-error
  onClick={handleClick}
  className="group absolute right-40 top-50 -rotate-30 cursor-pointer"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke={active ? "#ef4444" : "currentColor"}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`
      transition-all duration-300 ease-out
      ${active ? "scale-125 rotate-90" : "scale-100 rotate-0"}
      ${!active ? "group-hover:stroke-red-500 group-hover:scale-110" : ""}
    `}
  >
    <path d="M5.43212 18.5679C6.00828 19.144 6.94243 19.144 7.51859 18.5679L12.0003 14.0863L16.4814 18.5672C17.0573 19.1431 17.9909 19.1434 18.5672 18.5679C19.144 17.9919 19.1443 17.0573 18.5679 16.4809L14.0868 12L18.5679 7.51913C19.1438 6.94326 19.1441 6.0097 18.5686 5.43346C17.9925 4.85669 17.0578 4.85638 16.4814 5.43278L12.0003 9.91365L7.51859 5.4321C6.94243 4.85597 6.00828 4.85597 5.43212 5.4321C4.85596 6.00823 4.85596 6.94232 5.43212 7.51845L9.91387 12L5.43212 16.4816C4.85596 17.0577 4.85596 17.9918 5.43212 18.5679Z" />
  </svg>
</button>
  );
}