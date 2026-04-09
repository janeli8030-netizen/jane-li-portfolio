import type { Locale } from "@/lib/content";

export type PaletteItem = {
  name: string;
  hex?: string;
  note?: Record<Locale, string>;
};

export default function Palette({ items }: { items: PaletteItem[] }) {
  if (!items?.length) return null;

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => (
        <div key={c.name} className="rounded-2xl border border-black/10 bg-white p-4">
          <div className="flex items-center gap-3">
            <div
              className="h-10 w-10 rounded-xl border border-black/10"
              style={{ background: c.hex ?? "#e5e7eb" }}
              title={c.hex ?? ""}
            />
            <div className="min-w-0">
              <div className="truncate text-sm font-medium">{c.name}</div>
              <div className="text-xs text-zinc-500">{c.hex ?? ""}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
