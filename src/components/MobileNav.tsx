"use client";

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

      {open ? (
        <>
          <button
            type="button"
            aria-label="Close navigation overlay"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/45"
          />

          <aside className="fixed inset-y-0 left-0 z-50 w-[82vw] max-w-[320px] border-r border-white/10 bg-[#111111] shadow-[0_20px_50px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-4">
              <div className="text-sm font-medium text-white">Menu</div>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white"
              >
                ×
              </button>
            </div>

            <nav className="flex flex-col p-3">
              {nav.primary.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-white/90 hover:bg-white/5 hover:text-white"
                >
                  {item.label.zh} / {item.label.en}
                </Link>
              ))}
            </nav>
          </aside>
        </>
      ) : null}
    </div>
  );
}
