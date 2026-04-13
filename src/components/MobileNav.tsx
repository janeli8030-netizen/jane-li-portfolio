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
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white"
      >
        <span className="text-lg leading-none">☰</span>
      </button>

      {open ? (
        <div className="absolute left-4 right-4 top-14 z-50 overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
          <nav className="flex flex-col p-2">
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
        </div>
      ) : null}
    </div>
  );
}
