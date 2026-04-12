"use client";

import { motion } from "framer-motion";

export default function StatementBlock({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <section className="rounded-[32px] border border-black/10 bg-[#13211C] px-8 py-16 text-white md:px-12 md:py-24 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-5xl"
      >
        <div className="text-[11px] uppercase tracking-[0.18em] text-[#C9A87C]">{eyebrow}</div>
        <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl lg:text-6xl">{title}</h2>
        <p className="mt-6 max-w-3xl text-sm leading-8 text-white/72 md:text-base">{body}</p>
      </motion.div>
    </section>
  );
}
