import { notFound } from "next/navigation";
import Palette from "@/components/Palette";
import { projects } from "@/lib/content";

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const s = project.sections;

  return (
    <div className="space-y-10">
      <header className="space-y-3">
        <div className="text-xs text-zinc-500">CMF Project</div>
        <h1 className="text-3xl font-semibold tracking-tight">
          {project.title.en}
          <span className="ml-2 text-base font-normal text-zinc-500">{project.title.zh}</span>
        </h1>
        <p className="text-base text-zinc-700">{project.summary.en}</p>
        <p className="text-sm text-zinc-500">{project.summary.zh}</p>
      </header>

      <section className="rounded-3xl border border-black/10 bg-white p-7">
        <h2 className="text-sm font-semibold">Project Overview</h2>
        <p className="mt-3 text-sm text-zinc-700">{s.overview?.en}</p>
        <p className="mt-2 text-xs text-zinc-500">{s.overview?.zh}</p>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-7">
        <h2 className="text-sm font-semibold">Design Challenge & CMF Goal</h2>
        <p className="mt-3 text-sm text-zinc-700">{s.challengeAndGoal?.en}</p>
        <p className="mt-2 text-xs text-zinc-500">{s.challengeAndGoal?.zh}</p>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-7">
        <h2 className="text-sm font-semibold">Color Scheme</h2>
        <div className="mt-4">
          <Palette items={s.color?.palette ?? []} />
        </div>
        {s.color?.source?.en ? <p className="mt-4 text-sm text-zinc-700">{s.color?.source?.en}</p> : null}
        {s.color?.source?.zh ? <p className="mt-2 text-xs text-zinc-500">{s.color?.source?.zh}</p> : null}
        {s.color?.psychology?.en ? (
          <p className="mt-4 text-sm text-zinc-700">{s.color?.psychology?.en}</p>
        ) : null}
        {s.color?.psychology?.zh ? <p className="mt-2 text-xs text-zinc-500">{s.color?.psychology?.zh}</p> : null}
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-7">
        <h2 className="text-sm font-semibold">Material Selection</h2>
        <div className="mt-4 space-y-4">
          {(s.material?.items ?? []).length ? (
            (s.material?.items ?? []).map((m) => (
              <div key={m.name} className="rounded-2xl border border-black/10 bg-zinc-50 p-4">
                <div className="text-sm font-medium">{m.name}</div>
                <div className="mt-2 text-sm text-zinc-700">{m.why.en}</div>
                <div className="mt-1 text-xs text-zinc-500">{m.why.zh}</div>
              </div>
            ))
          ) : (
            <div className="text-sm text-zinc-500">(Add materials here)</div>
          )}
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-7">
        <h2 className="text-sm font-semibold">Surface Finish</h2>
        <div className="mt-4 space-y-4">
          {(s.finish?.processes ?? []).length ? (
            (s.finish?.processes ?? []).map((f) => (
              <div key={f.name} className="rounded-2xl border border-black/10 bg-zinc-50 p-4">
                <div className="text-sm font-medium">{f.name}</div>
                <div className="mt-2 text-sm text-zinc-700">{f.description.en}</div>
                <div className="mt-1 text-xs text-zinc-500">{f.description.zh}</div>
              </div>
            ))
          ) : (
            <div className="text-sm text-zinc-500">(Add finish processes here)</div>
          )}
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-7">
        <h2 className="text-sm font-semibold">Final Renders</h2>
        <p className="mt-3 text-sm text-zinc-700">{s.final?.notes?.en}</p>
        <p className="mt-2 text-xs text-zinc-500">{s.final?.notes?.zh}</p>
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
