import Link from "next/link";
import { projects } from "@/lib/content";

export default function ProjectsPage() {
  const items = [...projects].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">CMF Projects</h1>
        <p className="text-sm text-zinc-600">4–6 core projects, structured for CMF storytelling.</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        {items.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group rounded-3xl border border-black/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-black/15"
          >
            <div className="text-xs text-zinc-500">Project</div>
            <div className="mt-2 text-lg font-semibold tracking-tight group-hover:underline">
              {p.title.en}
              <span className="ml-2 text-sm font-normal text-zinc-500">{p.title.zh}</span>
            </div>
            <div className="mt-3 text-sm text-zinc-700">{p.summary.en}</div>
            <div className="mt-1 text-xs text-zinc-500">{p.summary.zh}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
