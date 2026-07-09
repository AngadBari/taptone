"use client";
import "tap-tone";
import { CheckCircle2, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function SuccessToastDemo() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <button
        onClick={() => {
          setOpen(true);
          setTimeout(() => setOpen(false), 3500);
        }}
        data-tone-success
        className="rounded-xl  px-3 py-1 font-mono  transition border border-neutral-300 shadow-md bg-neutral-50 "
      >
        Toast
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{
              duration: 0.35,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed bottom-6 right-6 z-50"
          >
            <div className="relative overflow-hidden rounded-2xl border border-neutral-400/15 bg-neutral-700/10 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,.45)]">
              {/* Content */}
              <div className="relative flex w-[380px] items-start gap-4 p-5">
                <div className="flex-1">
                  <h3 className="text-sm font-mono tracking-wide">
                    tap-tone install Successfully !!
                  </h3>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-1 text-neutral-900 transition hover:bg-white/10 "
                  data-tone-remove
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
