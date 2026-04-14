export default function ResearchPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Research</h1>
        <p className="text-sm text-zinc-600">Trends · Competitive CMF Analysis · Material/Finish Library</p>
      </header>

      <div className="grid gap-4 md:grid-cols-2">
        <a href="/research/user-analysis" className="rounded-3xl border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-black/20 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)]">
          <h2 className="text-sm font-semibold">User Analysis</h2>
          <p className="mt-3 text-sm text-zinc-600">Questionnaires, personas, adoption barriers, and key user insights.</p>
        </a>
        <a href="/research/ai-design-research" className="rounded-3xl border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-black/20 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)] md:col-span-2">
          <h2 className="text-sm font-semibold">AI Design Research</h2>
          <p className="mt-3 text-sm text-zinc-600">Research projects on AI-assisted design, cognition, interaction, and emerging workflows.</p>
        </a>
      </div>
    </div>
  );
}
