"use client";
import "tap-tone"
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function CodeBook() {
  const [copied, setCopied] = useState(false);

  const code = `"use Client" 
            import "tap-tone" 
            export default function Home() {
             return (
                    <button data-tone-droplet >Click Me</button>
                    <button data-tone-click >Click Me</button>
                 );
             }`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className=" rounded-xl border border-neutral-200 bg-neutral-50 mt-5">
      <div className="border-b border-neutral-800 px-4 py-3 flex items-center justify-between">
        <h3 className="text-sm font-mono">React</h3>

        <button
          onClick={handleCopy}
          data-tone-copy
          className=" flex items-center gap-2 rounded-md border border-neutral-200 bg-white px-3 py-1.5 text-sm transition hover:bg-neutral-100"
        >
          {copied ? (
            <>
              <Check size={18} className="text-green-600 " />
              Copied
            </>
          ) : (
            <>
              <Copy size={16} />
              Copy
            </>
          )}
        </button>
      </div>

      <pre className="overflow-x-auto p-6 text-sm text-neutral-800">
        <code className="font-mono text-sm text-black">
          <span>"use Client"</span> <br />
          <span className="text-amber-800">import "tap-tone"</span> <br />
          export default function Home() {"{"}
          <br />
          return (
          <br />
          {"<"}button <span className="text-pink-400">data-tone-droplet</span>{" "}
          {">"}
          Click Me
          {"</"}button{">"}
          <br />
          {"<"}button <span className="text-pink-400">data-tone-click</span>{" "}
          {">"}
          Click Me
          {"</"}button{">"}
          <br />
          {"  "});
          <br />
          {"}"}
        </code>
      </pre>
    </div>
  );
}
