import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: "800",
});

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[500px] px-4">
      <header className="mt-10 flex items-center justify-between p-4">
        <h1
          className={`${inter.className} cursor-pointer text-[18px] transition-colors hover:text-neutral-600`}
        >
          TapTone
        </h1>
 
        <p className="font-mono text-[12px] text-neutral-500">
          v1.0.0{" "}/{" "}
          <Link
            href="https://www.npmjs.com/package/taptone"
            className="text-neutral-900 "
          >
            npm
          </Link>
        </p>
      </header>
      <section className="mt-3 px-4">
        <p className={` font-mono text-[13px]`}>
          Beautiful UI interaction sounds that make websites feel physical. no audio files, no dependencies, just a simple and lightweight package.Only Import it !!</p>
        
      </section>
    </main>
  );
}