import Link from "next/link";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="space-y-14">
      <section className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{site.name}</h1>
          <p className="mt-4 text-lg text-zinc-700">{site.tagline.en}</p>
          <p className="mt-2 text-sm text-zinc-500">{site.tagline.zh}</p>
          <p className="mt-6 max-w-2xl text-base text-zinc-700">{site.intro.en}</p>
          <p className="mt-2 max-w-2xl text-sm text-zinc-500">{site.intro.zh}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
            >
              View Projects
            </Link>
            <Link
              href="/research"
              className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              CMF Research
            </Link>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="rounded-3xl border border-black/10 bg-white p-6">
            <div className="text-sm font-medium">About</div>
            <div className="mt-2 text-sm text-zinc-600">
              One sentence about who you are + your CMF direction.
            </div>
            <div className="mt-4 text-xs text-zinc-500">Photo + contacts will go here.</div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-xl font-semibold tracking-tight">Portfolio Sections</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Projects · Research · Experiments — designed for fast browsing and deep reading.
            </p>
          </div>
          <Link href="/contact" className="text-sm font-medium text-zinc-900 hover:underline">
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
