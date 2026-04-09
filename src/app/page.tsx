import Link from "next/link";
import { projects } from "@/lib/content";
import { site } from "@/lib/site";

function FeaturedProjects() {
  const featuredSlugs = ["kids-balance-bike", "lulu-aroma-device", "miening-miniapp-vi", "ar-emotion-game"];
  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean)
    .slice(0, 4);

  return (
    <section className="space-y-5">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">精选项目 / Featured</h2>
          <p className="mt-1 text-sm text-zinc-600">3–4 个快速浏览入口（后续替换为你的封面图）。</p>
        </div>
        <Link href="/projects" className="text-sm font-medium hover:underline">
          查看全部作品 →
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {featured.map((p) => {
          if (!p) return null;
          return (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group rounded-[24px] border border-black/10 bg-white p-4 transition hover:-translate-y-0.5 hover:border-[var(--gold)]"
            >
              <div className="aspect-[4/3] w-full rounded-[24px] bg-zinc-100" />
              <div className="mt-4">
                <div className="text-sm font-semibold tracking-tight">
                  {p.title.zh}
                  <span className="ml-2 text-xs font-normal text-zinc-500">{p.title.en}</span>
                </div>
                <div className="mt-2 line-clamp-2 text-sm text-zinc-600">{p.summary.zh}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function ResearchMethods() {
  const cards = [
    {
      title: "趋势板 / Trends",
      desc: "2026 自然共生：关键词、情绪曲线与色彩方向。",
      href: "/research",
    },
    {
      title: "竞品分析 / Benchmark",
      desc: "同类产品 CMF 对比：色彩策略、材料选择、工艺成本。",
      href: "/research",
    },
    {
      title: "材料实验 / Materials",
      desc: "磨砂 vs 高光、触感对比、指纹/耐磨/可制造性记录。",
      href: "/experiments",
    },
  ];

  return (
    <section className="space-y-5 rounded-3xl bg-[var(--warm-lime)] p-8">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">CMF Research</h2>
        <p className="mt-2 text-sm text-zinc-700">把“感觉”变成可沟通的证据链：趋势 → 分析 → 实验。</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="rounded-3xl border border-black/10 bg-white p-6 transition hover:-translate-y-0.5 hover:border-black/20"
          >
            <div className="text-sm font-semibold">{c.title}</div>
            <div className="mt-2 text-sm text-zinc-600">{c.desc}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function AboutMe() {
  return (
    <section className="grid gap-6 rounded-3xl border border-black/10 bg-white p-8 md:grid-cols-12 md:items-center">
      <div className="md:col-span-4">
        <div className="relative aspect-square w-full max-w-[260px] overflow-hidden rounded-3xl bg-zinc-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/avatar.jpg" alt="Avatar" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="md:col-span-8">
        <h2 className="text-xl font-semibold tracking-tight">关于我 / About</h2>
        <div className="mt-3 space-y-1 text-sm text-zinc-700">
          <div className="font-medium">{site.name.zh} · {site.title.zh}</div>
          <div className="text-zinc-600">{site.name.en} · {site.title.en}</div>
        </div>
        <div className="mt-4 space-y-1 text-sm text-zinc-700">
          <div>{site.education.zh}</div>
          <div className="text-zinc-600">{site.education.en}</div>
          <div className="mt-2">{site.aboutLines.zh[1]}</div>
          <div className="text-zinc-600">{site.aboutLines.en[1]}</div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#"
            className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-zinc-50"
          >
            下载简历 / Resume
          </a>
          <a
            href={site.contact.linkedin || "#"}
            className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium hover:bg-zinc-50"
          >
            领英 / LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    { name: "CMF 设计", level: 5 },
    { name: "色彩管理", level: 5 },
    { name: "材料工艺", level: 4 },
    { name: "3D 渲染", level: 4 },
    { name: "用户研究", level: 4 },
    { name: "设计工具", level: 5 },
  ];
  const tools = ["Pantone", "Keyshot", "Rhino", "Figma", "Photoshop", "Illustrator"];

  return (
    <section className="rounded-3xl border border-black/10 bg-white p-8">
      <h2 className="text-xl font-semibold tracking-tight">核心能力 / Skills</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {skills.map((s) => (
          <div key={s.name} className="flex items-center justify-between gap-4 rounded-2xl bg-zinc-50 px-4 py-3">
            <div className="text-sm font-medium">{s.name}</div>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full ${i < s.level ? "bg-[var(--deep-green)]" : "bg-zinc-300"}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-sm text-zinc-700">
        <span className="font-medium">工具：</span>
        <span className="text-zinc-600">{tools.join(" / ")}</span>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-14">
      {/* 1) Hero */}
      <section className="overflow-hidden rounded-[32px] border border-black/10 bg-white text-[var(--ink)]">
        <div className="grid gap-8 p-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <div className="text-xs font-medium text-zinc-500">CMF Portfolio</div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {site.slogan.zh}
            </h1>
            <div className="mt-3 text-lg text-zinc-700 italic" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
              “{site.slogan.en}”
            </div>

            <div className="mt-6 text-base text-zinc-700">
              {site.name.zh} · {site.title.zh}
              <span className="mx-2 text-zinc-300">|</span>
              {site.name.en} · {site.title.en}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-full bg-[var(--deep-green)] px-5 py-2.5 text-sm font-semibold text-white hover:opacity-95"
              >
                查看作品 / Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              >
                联系我 / Contact
              </Link>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] bg-white/10 ring-1 ring-white/15">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero.png"
                alt="Hero image"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-black/0 to-black/0" />
            </div>
            <div className="mt-3 text-xs text-white/70">Hero image</div>
          </div>
        </div>
      </section>

      {/* 2) Featured */}
      <FeaturedProjects />

      {/* 3) Research method */}
      <ResearchMethods />

      {/* 4) About */}
      <AboutMe />

      {/* 5) Skills */}
      <Skills />
    </div>
  );
}
