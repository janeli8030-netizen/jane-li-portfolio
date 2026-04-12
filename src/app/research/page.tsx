export default function ResearchPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Research</h1>
        <p className="text-sm text-zinc-600">Trends · Competitive CMF Analysis · Material/Finish Library</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-3xl border border-black/10 bg-white p-6">
          <h2 className="text-sm font-semibold">Trend Research</h2>
          <p className="mt-3 text-sm text-zinc-600">Add 1–2 trend topics with moodboards and palette takeaways.</p>
        </section>
        <section className="rounded-3xl border border-black/10 bg-white p-6">
          <h2 className="text-sm font-semibold">User Analysis</h2>
          <p className="mt-3 text-sm text-zinc-600">Questionnaires, personas, adoption barriers, and key user insights.</p>
        </section>
        <section className="rounded-3xl border border-black/10 bg-white p-6 md:col-span-2">
          <h2 className="text-sm font-semibold">AI Design Research</h2>
          <p className="mt-3 text-sm text-zinc-600">Research projects on AI-assisted design, cognition, interaction, and emerging workflows.</p>
        </section>
      </div>
    </div>
  );
}
