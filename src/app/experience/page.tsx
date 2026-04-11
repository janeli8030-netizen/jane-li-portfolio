export default function ExperiencePage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>
        <p className="text-sm text-zinc-600">个人经历 · 教育 · 实习/工作 · 技能与工具</p>
      </header>

      <section className="rounded-3xl border border-black/10 bg-white p-7">
        <h2 className="text-sm font-semibold">Education</h2>
        <div className="mt-4 space-y-3 text-sm text-zinc-700">
          <div>
            <div className="font-medium">(Your school) — (Degree)</div>
            <div className="text-xs text-zinc-500">YYYY — YYYY · Major · City</div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-7">
        <h2 className="text-sm font-semibold">Work / Internships</h2>
        <div className="mt-4 space-y-4 text-sm text-zinc-700">
          <div>
            <div className="font-medium">(Company) — (Role)</div>
            <div className="text-xs text-zinc-500">YYYY.MM — YYYY.MM · City / Remote</div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
              <li>(What you did — impact/result)</li>
              <li>(What you did — impact/result)</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-7">
        <h2 className="text-sm font-semibold">Skills & Tools</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-zinc-50 p-4">
            <div className="text-xs font-semibold text-zinc-700">CMF</div>
            <div className="mt-2 text-sm text-zinc-700">Color strategy · Material selection · Finish/process · Spec & handoff</div>
          </div>
          <div className="rounded-2xl border border-black/10 bg-zinc-50 p-4">
            <div className="text-xs font-semibold text-zinc-700">Tools</div>
            <div className="mt-2 text-sm text-zinc-700">KeyShot · Adobe (PS/AI) · Figma · (others)</div>
          </div>
        </div>
      </section>
    </div>
  );
}
