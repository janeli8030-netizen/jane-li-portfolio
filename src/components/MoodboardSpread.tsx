import React from "react";

export type MoodboardSpreadItem = {
  src: string;
  alt: string;
  caption?: string;
};

export default function MoodboardSpread({
  primary,
  accents,
}: {
  primary: MoodboardSpreadItem;
  accents: MoodboardSpreadItem[];
}) {
  return (
    <section className="rounded-3xl border border-black/10 bg-white p-7">
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-semibold tracking-wide">MOODBOARD</h2>
        <div className="text-xs text-zinc-500">Inspiration / 情绪与材质语汇</div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-12">
        {/* Left: label + three small swatches */}
        <div className="md:col-span-4">
          <div className="rounded-2xl border border-black/10 bg-zinc-50 p-4">
            <div className="text-[11px] font-semibold text-zinc-700">Keywords</div>
            <div className="mt-2 text-sm text-zinc-800">Light · Safe · Comfort</div>
            <div className="mt-1 text-xs text-zinc-500">轻便 · 安全 · 舒适</div>

            <div className="mt-4 grid grid-cols-3 gap-3">
              {accents.slice(0, 3).map((it) => (
                <div key={it.src} className="overflow-hidden rounded-xl border border-black/10 bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={it.src} alt={it.alt} className="aspect-square w-full object-cover" />
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-zinc-600 leading-relaxed">
              Natural greens + translucent layers + water-drop highlights → a calm, playful CMF language.
            </p>
            <p className="mt-2 text-[11px] text-zinc-500 leading-relaxed">
              自然绿系 + 透明层叠 + 水滴高光 → 让“治愈感”与安全识别点更直观。
            </p>
          </div>
        </div>

        {/* Center: collage */}
        <div className="md:col-span-8">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-zinc-50 p-4">
            <div className="grid gap-4 md:grid-cols-12">
              {/* Primary */}
              <div className="md:col-span-8">
                <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={primary.src} alt={primary.alt} className="h-auto w-full object-cover" />
                </div>
              </div>

              {/* Right stack */}
              <div className="md:col-span-4 grid gap-4">
                {accents.slice(3, 4).map((it) => (
                  <div key={it.src} className="overflow-hidden rounded-2xl border border-black/10 bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={it.src} alt={it.alt} className="h-auto w-full object-cover" />
                  </div>
                ))}

                {/* Circular cut-out overlay using one accent */}
                {accents[1] ? (
                  <div className="relative">
                    <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border border-black/10 bg-white shadow-sm">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={accents[1].src} alt={accents[1].alt} className="h-full w-full object-cover" />
                    </div>
                    <div className="mt-2 text-center text-[10px] tracking-wide text-zinc-500">TEXTURE / 纹理</div>
                  </div>
                ) : null}
              </div>
            </div>

            {/* Bottom annotation row */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <div className="text-[11px] text-zinc-500">CONCEPT 01 · Kids Balance Bike · CMF</div>
              <div className="text-[11px] text-zinc-500">(Moodboard images)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
