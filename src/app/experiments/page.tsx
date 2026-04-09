export default function ExperimentsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Experiments</h1>
        <p className="text-sm text-zinc-600">Material swatches · Color pairing · Keyshot material practice</p>
      </header>

      <div className="rounded-3xl border border-black/10 bg-white p-6">
        <p className="text-sm text-zinc-600">
          Put your experiment photos here. We can later turn this into a filterable gallery (material / color / finish / year).
        </p>
      </div>
    </div>
  );
}
