import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";
import { nav } from "@/lib/content";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-zinc-50 text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-zinc-50/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-sm font-medium tracking-tight">
            Jane Li
          </Link>
          <nav className="hidden items-center gap-5 text-sm text-zinc-700 md:flex">
            {nav.primary.map((item) => (
              <Link key={item.key} href={item.href} className="hover:text-zinc-900">
                {item.label.en}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <LanguageToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>

      <footer className="border-t border-black/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-zinc-600">
          <div>© {new Date().getFullYear()} Jane Li</div>
          <div className="text-zinc-500">CMF Portfolio · jane-li.top</div>
        </div>
      </footer>
    </div>
  );
}
