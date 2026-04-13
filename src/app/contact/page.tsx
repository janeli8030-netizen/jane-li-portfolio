import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
        <p className="text-sm text-zinc-600">Let’s build CMF that feels right—and ships.</p>
      </header>

      <div className="rounded-3xl border border-black/10 bg-white p-6">
        <div className="grid gap-4 text-sm text-zinc-700">
          <div>
            <div className="text-xs text-zinc-500">Email</div>
            <div className="mt-1 font-medium">{site.contact.email}</div>
          </div>
          <div>
            <div className="text-xs text-zinc-500">WeChat</div>
            <div className="mt-1 font-medium">{site.contact.wechat || "(add)"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
