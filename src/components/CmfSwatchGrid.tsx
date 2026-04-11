import React from "react";

export type CmfSwatch = {
  id: string;
  title: string;
  subtitle?: string;
  meta?: string;
  image: {
    src: string;
    alt: string;
  };
};

export default function CmfSwatchGrid({ items }: { items: CmfSwatch[] }) {
  if (!items?.length) return null;

  return (
    <div className="rounded-2xl border border-black/10 bg-white p-4">
      <div className="text-xs font-semibold text-zinc-700">Material samples</div>
      <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.id} className="rounded-2xl border border-black/10 bg-zinc-50 p-4">
            <div className="flex items-start gap-3">
              <div className="shrink-0">
                <div className="h-16 w-16 overflow-hidden rounded-full border border-black/10 bg-white shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={it.image.src} alt={it.image.alt} className="h-full w-full object-cover" />
                </div>
              </div>

              <div className="min-w-0">
                <div className="text-sm font-semibold text-zinc-900 truncate">{it.title}</div>
                {it.subtitle ? <div className="mt-0.5 text-xs text-zinc-600 truncate">{it.subtitle}</div> : null}
                {it.meta ? <div className="mt-2 text-[11px] text-zinc-500 leading-snug">{it.meta}</div> : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
