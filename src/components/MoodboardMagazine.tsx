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

      {/* Collage: no gaps, unified height */}
      <div className="mt-6 overflow-hidden rounded-2xl border border-black/10 bg-white">
        <div className="grid grid-cols-12 gap-0">
          {/* Left: two big images */}
          <div className="col-span-12 md:col-span-8 grid grid-cols-2 gap-0">
            <div className="aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={primary.src} alt={primary.alt} className="h-full w-full object-cover" />
            </div>
            <div className="aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={seed.src} alt={seed.alt} className="h-full w-full object-cover" />
            </div>
          </div>

          {/* Right: three small images stacked */}
          <div className="col-span-12 md:col-span-4 grid grid-rows-3 gap-0">
            {patterns.slice(0, 3).map((it) => (
              <div key={it.src} className="aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={it.src} alt={it.alt} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[10px] text-zinc-500">
        <div>CONCEPT 01 · Kids Balance Bike · CMF</div>
        <div>CMF DESIGN</div>
      </div>
    </section>
  );
}
