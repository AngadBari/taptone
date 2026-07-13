"use client";

import { useEffect, useState } from "react";

export default function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/v1/views?site=tap-tone.vercel.app&path=/")
      .then((res) => res.json())
      .then((data) => setViews(data.views));
  }, []);

  return (
    <span className=" text-center font-mono">
      {views === null ? "Loading..." : `${views.toLocaleString()} views`}
    </span>
  );
}