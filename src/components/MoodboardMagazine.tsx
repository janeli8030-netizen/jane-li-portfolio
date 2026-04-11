import React from "react";

type Img = { src: string; alt: string };

export default function MoodboardMagazine({
  primary,
  circle,
  patterns,
  seed,
}: {
  primary: Img;
  circle: Img;
  patterns: Img[];
  seed: Img;
}) {
  return (
    <section className="rounded-3xl border border-black/10 bg-white p-7">
      {/* Spread 1 */}
      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-6">
          <div className="text-sm font-semibold tracking-wide">MOODBOARD</div>
        </div>
        <div className="md:col-span-6 flex items-start justify-between">
          <div className="text-xs text-zinc-500">INSPIRATION</div>
          <div className="hidden md:block text-[10px] tracking-[0.25em] text-zinc-500">CONCEPT 01</div>
        </div>

        <div className="md:col-span-8">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-zinc-50 p-4">
            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={primary.src} alt={primary.alt} className="h-auto w-full object-cover" />
            </div>

            <div className="pointer-events-none absolute left-6 top-6 hidden md:block">
              <div className="h-40 w-40 overflow-hidden rounded-full border border-black/10 bg-white shadow-sm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={circle.src} alt={circle.alt} className="h-full w-full object-cover" />
              </div>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-12">
              <div className="md:col-span-7">
                <div className="text-[11px] font-semibold text-zinc-700">CMF direction</div>
                <p className="mt-2 text-xs text-zinc-600 leading-relaxed">
                  Natural greens + translucent layers + water-drop highlights → a calm, playful CMF language.
                </p>
                <p className="mt-1 text-[11px] text-zinc-500 leading-relaxed">
                  自然绿系 + 透明层叠 + 水滴高光 → 让“治愈感”与安全识别点更直观。
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="rounded-xl border border-black/10 bg-white p-3">
                  <div className="text-[10px] tracking-wide text-zinc-500">KEYWORDS</div>
                  <div className="mt-2 text-sm text-zinc-800">Light · Safe · Comfort</div>
                  <div className="mt-1 text-xs text-zinc-500">轻便 · 安全 · 舒适</div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-[10px] text-zinc-500">
              <div>Kids Balance Bike · Moodboard</div>
              <div>CMF DESIGN</div>
            </div>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="rounded-2xl border border-black/10 bg-white p-4">
            <div className="text-[10px] tracking-[0.25em] text-zinc-500 md:hidden">CONCEPT 01</div>
            <div className="mt-2 text-xs font-semibold text-zinc-700">NOTES</div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-xs text-zinc-600">
              <li>Soft translucency for a "light" feeling</li>
              <li>Clean highlight for safety accents</li>
              <li>Nature-derived greens for comfort</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-black/5" />

      {/* Spread 2 */}
      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-6">
          <div className="text-xs text-zinc-500">PATTERN AND COLOR & MATERIAL</div>
        </div>
        <div className="md:col-span-6 flex items-start justify-end">
          <div className="hidden md:block text-[10px] tracking-[0.25em] text-zinc-500">CONCEPT 01</div>
        </div>

        <div className="md:col-span-4">
          <div className="grid grid-cols-3 gap-3 md:grid-cols-1">
            {patterns.slice(0, 3).map((it) => (
              <div key={it.src} className="rounded-2xl border border-black/10 bg-zinc-50 p-3">
                <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={it.src} alt={it.alt} className="aspect-square w-full object-cover" />
                </div>
                <div className="mt-2 text-[10px] text-zinc-500">Pattern</div>
                <div className="mt-0.5 text-xs text-zinc-700">Texture cue</div>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-8">
          <div className="overflow-hidden rounded-2xl border border-black/10 bg-zinc-50 p-4">
            <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={seed.src} alt={seed.alt} className="h-auto w-full object-cover" />
            </div>
            <div className="mt-4 flex items-center justify-between text-[10px] text-zinc-500">
              <div>Mood reference (seed / sprout)</div>
              <div>CMF DESIGN</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
