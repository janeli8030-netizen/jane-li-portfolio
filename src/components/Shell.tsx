import Link from "next/link";
import LanguageToggle from "@/components/LanguageToggle";
import { nav } from "@/lib/content";
import { site } from "@/lib/site";

export default function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-[var(--bg)] text-[var(--ink)]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-[#C7D8E4] text-[#4F6472] backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/" className="text-sm font-medium tracking-tight text-[#4F6472]">
            {site.name.en}
          </Link>
          <nav className="hidden items-center gap-5 text-sm text-[#4F6472]/90 md:flex">
            {nav.primary.map((item) => (
              <Link key={item.key} href={item.href} className="hover:text-[#324754]">
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
              <div className="font-medium">请联系我 → {site.contact.phone} / {site.contact.email}</div>
              <div className="text-xs text-zinc-500">Contact → {site.contact.phone} / {site.contact.email}</div>
            </div>
            <div className="text-xs text-zinc-500">© {new Date().getFullYear()} {site.name.zh} | CMF Portfolio | {site.domain}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
