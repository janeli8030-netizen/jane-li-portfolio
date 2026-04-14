import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";
import MobileNav from "@/components/MobileNav";
import { nav } from "@/lib/content";
import { site } from "@/lib/site";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-[var(--bg)] text-[var(--ink)]">
      <header className="sticky top-0 z-50 border-b border-white/45 bg-[rgba(255,255,255,0.62)] text-black shadow-[0_14px_40px_rgba(15,23,42,0.05)] backdrop-blur-2xl supports-[backdrop-filter]:bg-[rgba(255,255,255,0.48)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-white/80" />
        <div className="pointer-events-none absolute inset-x-[12%] top-0 h-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.65),rgba(255,255,255,0))] blur-xl" />
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <MobileNav />
            <Link href="/" className="text-sm font-medium tracking-tight text-black">
              {site.name.en}
            </Link>
          </div>
          <nav className="hidden items-center gap-5 text-sm text-black/70 md:flex">
            {nav.primary.map((item) => (
              <Link key={item.key} href={item.href} className="hover:text-black">
                {item.label.zh} / {item.label.en}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <LanguageToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 [&_.project-hero-fullbleed]:-mt-10 [&_.project-hero-fullbleed]:mx-[calc(50%-50vw)] [&_.project-hero-fullbleed]:w-screen [&_.project-hero-fullbleed]:max-w-none [&_.project-hero-fullbleed]:px-0 [&_.project-hero-fullbleed]:py-0">{children}</main>

      <footer className="border-t border-black/10 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-700">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="font-medium">请联系我 → {site.contact.email}</div>
              <div className="text-xs text-zinc-500">Contact → {site.contact.email}</div>
            </div>
            <div className="text-xs text-zinc-500">© {new Date().getFullYear()} {site.name.zh} | Design Portfolio | {site.domain}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
