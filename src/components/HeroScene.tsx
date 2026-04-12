"use client";

import { motion } from "framer-motion";

export default function HeroScene({
  image,
  title,
  subtitle,
  tags,
}: {
  image?: string;
  title: string;
  subtitle: string;
  tags: string[];
}) {
  return (
    <section className="project-hero-fullbleed relative isolate min-h-screen overflow-hidden bg-[#DCE7E4] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.55),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(201,168,124,0.18),transparent_22%),linear-gradient(180deg,rgba(17,33,28,0.10),rgba(17,33,28,0.55))]" />

      {image ? (
        <motion.img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.08, opacity: 0.2 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      ) : null}

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(19,29,27,0.08)_0%,rgba(19,29,27,0.34)_52%,rgba(19,29,27,0.74)_100%)]" />

      <div className="relative z-10 flex min-h-screen flex-col justify-end p-8 md:p-12 lg:p-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="max-w-4xl"
        >
          <div className="mb-5 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em] text-white/80">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm">
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-[92px]">
            {title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/82 md:text-lg">{subtitle}</p>
        </motion.div>
      </div>
    </section>
  );
}
