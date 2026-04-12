import type { Locale } from "@/lib/content";

export type PaletteItem = {
  name: string;
  hex?: string;
  note?: Record<Locale, string>;
};

export default function Palette({ items }: { items: PaletteItem[] }) {
  if (!items?.length) return null;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {items.map((c) => (
        <div
          key={c.name}
          className="group overflow-hidden rounded-[24px] border border-black/10 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(45,74,62,0.10)]"
        >
          <div
            className="h-32 w-full transition duration-500 group-hover:scale-[1.02]"
            style={{ background: c.hex ?? "#e5e7eb" }}
            title={c.hex ?? ""}
          />
          <div className="space-y-1 p-4">
            <div className="truncate text-sm font-semibold text-[#2D4A3E]">{c.name}</div>
            <div className="text-xs text-[#8A7A63]">{c.hex ?? ""}</div>
            {c.note?.zh ? <div className="pt-1 text-xs leading-5 text-[#5C665F]">{c.note.zh}</div> : null}
          </div>
        </div>
      ))}
    </div>
  );
}
