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

      {/* Asymmetric mosaic: left 1/3 tall, right 2/3 staggered cards (tight gaps) */}
      <div className="mt-6 overflow-hidden border border-black/10 bg-white">
        <div className="grid gap-0 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="h-full">
              <div className="aspect-[3/4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={primary.src} alt={primary.alt} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="grid gap-0 md:grid-cols-2">
              <div className="md:col-span-2">
                <div className="aspect-[16/9]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={seed.src} alt={seed.alt} className="h-full w-full object-cover" />
                </div>
              </div>

              <div>
                <div className="aspect-[4/3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={patterns[0]?.src} alt={patterns[0]?.alt ?? "Pattern 1"} className="h-full w-full object-cover" />
                </div>
              </div>

              <div className="md:row-span-2">
                <div className="aspect-[4/3] md:aspect-[3/4]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={patterns[1]?.src} alt={patterns[1]?.alt ?? "Pattern 2"} className="h-full w-full object-cover" />
                </div>
              </div>

              <div>
                <div className="aspect-[4/3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={patterns[2]?.src} alt={patterns[2]?.alt ?? "Pattern 3"} className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
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
