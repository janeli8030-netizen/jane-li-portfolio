export default function ResearchPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">CMF Research</h1>
        <p className="text-sm text-zinc-600">Trends · Competitive CMF Analysis · Material/Finish Library</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-3xl border border-black/10 bg-white p-6">
          <h2 className="text-sm font-semibold">Trend Research</h2>
          <p className="mt-3 text-sm text-zinc-600">Add 1–2 trend topics with moodboards and palette takeaways.</p>
        </section>
        <section className="rounded-3xl border border-black/10 bg-white p-6">
          <h2 className="text-sm font-semibold">Competitive CMF Analysis</h2>
          <p className="mt-3 text-sm text-zinc-600">Add 1–2 competitor cases with color/material/finish breakdown.</p>
        </section>
        <section className="rounded-3xl border border-black/10 bg-white p-6 md:col-span-2">
          <h2 className="text-sm font-semibold">Material & Finish Library</h2>
          <p className="mt-3 text-sm text-zinc-600">A gallery-style library for materials, textures, and process samples.</p>
        </section>
      </div>
    </div>
  );
}
