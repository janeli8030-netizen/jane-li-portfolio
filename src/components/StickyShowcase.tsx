"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function StickyShowcase({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  children: ReactNode;
}) {
  return (
    <section className="project-hero-fullbleed grid gap-6 px-4 py-10 md:grid-cols-12 md:gap-8 md:px-10 md:py-16 lg:px-16">
      <div className="md:col-span-4 md:pr-6">
        <div className="md:sticky md:top-24">
          <div className="text-[10px] uppercase tracking-[0.14em] text-[#8A7A63]">{eyebrow}</div>
          <h3 className="mt-3 text-xl font-medium tracking-tight text-[#2D4A3E] md:text-2xl">{title}</h3>
          <p className="mt-4 max-w-md text-sm leading-7 text-[#58655E] whitespace-pre-line">{body}</p>
        </div>
      </div>

      <motion.div
        className="md:col-span-8"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
