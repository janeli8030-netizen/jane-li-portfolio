"use client";

import { motion } from "framer-motion";

export default function StatementBlock({
  eyebrow,
  title,
  body,
  tone = "cool",
}: {
  eyebrow: string;
  title: string;
  body: string;
  tone?: "cool" | "forest";
}) {
  const isForest = tone === "forest";

  return (
    <section className="px-4 py-14 text-white md:px-0 md:py-20 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        <div className={`text-[11px] uppercase tracking-[0.18em] ${isForest ? "text-[#BFA37A]" : "text-[#C7DAE6]"}`}>{eyebrow}</div>
        <h2 className={`mt-4 max-w-3xl text-2xl font-medium leading-[1.18] tracking-tight md:text-4xl lg:text-[42px] ${isForest ? "text-[#284033]" : "text-[#556D7D]"}`}>{title}</h2>
        <p className={`mt-6 max-w-2xl text-sm leading-8 md:text-[15px] ${isForest ? "text-[#4A5C4D]" : "text-[#617785]"}`}>{body}</p>
      </motion.div>
    </section>
  );
}
