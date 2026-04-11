import React from "react";

type Img = { src: string; alt: string };

export default function MoodboardMagazine({
  primary,
  seed,
  patterns,
}: {
  primary: Img;
  seed: Img;
  patterns: Img[];
}) {
  return (
    <section className="rounded-3xl border border-black/10 bg-white p-7">
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-semibold tracking-wide">MOODBOARD</h2>
        <div className="text-xs text-zinc-500">INSPIRATION</div>
      </div>

      {/* Two large images side-by-side */}
      <div className="mt-6 grid gap-4 md:grid-cols-12">
        <div className="md:col-span-6 overflow-hidden rounded-2xl border border-black/10 bg-zinc-50 p-3">
          <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={primary.src} alt={primary.alt} className="h-auto w-full object-cover" />
          </div>
        </div>

        <div className="md:col-span-6 overflow-hidden rounded-2xl border border-black/10 bg-zinc-50 p-3">
          <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={seed.src} alt={seed.alt} className="h-auto w-full object-cover" />
          </div>
        </div>
      </div>

      {/* Three small images in a row */}
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {patterns.slice(0, 3).map((it) => (
          <div key={it.src} className="overflow-hidden rounded-2xl border border-black/10 bg-zinc-50 p-3">
            <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={it.src} alt={it.alt} className="aspect-square w-full object-cover" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[10px] text-zinc-500">
        <div>CONCEPT 01 · Kids Balance Bike · CMF</div>
        <div>CMF DESIGN</div>
      </div>
    </section>
  );
}
