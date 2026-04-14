"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { nav } from "@/lib/content";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Open navigation menu"
        onClick={() => setOpen(true)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white"
      >
        <span className="text-lg leading-none">☰</span>
      </button>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation overlay"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-[2px]"
            />

            <motion.aside
              initial={{ x: -28, opacity: 0.85 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -22, opacity: 0 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-0 top-0 bottom-0 z-50 flex h-dvh w-[82vw] max-w-[320px] flex-col border-r border-white/10 bg-[#000000] shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            >
              <div className="flex items-center justify-between border-b border-white/10 bg-black px-4 py-4">
                <div className="text-sm font-semibold text-white">Menu</div>
                <button
                  type="button"
                  aria-label="Close navigation menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white transition hover:bg-white/10"
                >
                  ×
                </button>
              </div>

              <nav className="flex-1 flex flex-col gap-1 bg-black p-3">
                {nav.primary.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -8, opacity: 0 }}
                    transition={{ duration: 0.18, delay: 0.04 + index * 0.03, ease: "easeOut" }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl bg-white/[0.03] px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10 hover:text-white"
                    >
                      {item.label.zh} / {item.label.en}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
