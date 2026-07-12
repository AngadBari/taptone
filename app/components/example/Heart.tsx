"use client";

import { useState } from "react";

export default function Heart() {
  const [liked, setLiked] = useState(false);

  return (
    <button
     data-tone-click
      onClick={() => setLiked(!liked)}
      className="absolute right-2 left-55 top-20 -rotate-30 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill={liked ? "red" : "none"}
        stroke={liked ? "red" : "currentColor"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-300"
      >
        <path d="M10.4107 19.9679C7.58942 17.8581 2 13.035 2 8.69463C2 5.82581 4.10526 3.50018 7 3.50018C8.5 3.50018 10 4.00018 12 6.00018C14 4.00018 15.5 3.50018 17 3.50018C19.8947 3.50018 22 5.82581 22 8.69463C22 13.035 16.4106 17.8581 13.5893 19.9679C12.6399 20.6778 11.3601 20.6778 10.4107 19.9679Z" />
      </svg>
    </button>
  );
}