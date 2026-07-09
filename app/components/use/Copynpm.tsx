"use client";

import { useState } from "react";
import { Copy, Check, Section } from "lucide-react";

export default function CopyButton() {
  const [copied, setCopied] = useState(false);

  const command = "  npm install tap-tone";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <section className="mt-5 ">
    <button
      onClick={handleCopy}
      className="flex w-full max-w-md items-center justify-between rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-2 transition hover:bg-neutral-100"
    >
      <code className="font-mono text-[14px] text-neutral-700">
       $  {command}
      </code>

      <div data-tone-copy className="flex items-center gap-2 text-[14px] font-mono text-neutral-600 ">
        {copied ? (
          <>
            <Check size={18} className="text-green-600 " />
            Copied!
          </>
        ) : (
          <>
            <Copy size={18} />
            Copy
          </>
        )}
      </div>
    </button>
    </section>
  );
}