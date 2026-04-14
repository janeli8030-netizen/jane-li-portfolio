import Link from "next/link";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/content";
import { site } from "@/lib/site";

function FeaturedProjects() {
  const featuredSlugs = ["su7-cmf-proposal", "kids-balance-bike", "ar-emotion-game"];
  const featured = featuredSlugs
    .map((slug) => projects.find((p) => p.slug === slug))
    .filter(Boolean)
    .slice(0, 4);

  return (
    <section className="space-y-5">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">精选项目 / Featured</h2>
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
              className="group rounded-[24px] border border-black/10 bg-white p-4 transition duration-500 hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] bg-zinc-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.slug === "su7-cmf-proposal" ? "/projects/su7-cmf-proposal/cover-su7.jpg" : `/images/cover-${p.slug}.png`}
                  alt={`${p.title.en} cover`}
                  className="h-full w-full scale-[1.08] object-cover transition duration-700 group-hover:scale-[1.12]"
                />
              </div>
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
      title: "用户分析 / User Analysis",
      desc: "问卷、用户画像、使用障碍与关键洞察整理。",
      href: "/research/user-analysis",
    },
    {
      title: "AI 设计研究 / AI Design Research",
      desc: "关于 AI 辅助设计、认知、交互与新工作流的研究项目。",
      href: "/research/ai-design-research",
    },
  ];

  return (
    <section className="space-y-5 rounded-3xl bg-[var(--warm-lime)] p-8">
      <div>
        <h2 className="text-xl font-semibold tracking-tight">Research</h2>
        <p className="mt-2 text-sm text-zinc-700">用户研究、设计研究与方法整理。</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {cards.map((c) => (
          <Link
            key={c.title}
            href={c.href}
            className="rounded-3xl border border-black/10 bg-white p-6 transition duration-500 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_18px_40px_rgba(0,0,0,0.06)]"
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
            href="/files/resume-data.pdf"
            target="_blank"
            rel="noreferrer"
            download="简历-数据.pdf"
            className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-medium transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-50"
          >
            下载简历 / Resume
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
      <section className="overflow-hidden rounded-[32px] border border-black/10 bg-white text-black">
        <div className="p-10 md:p-14">
          <Reveal className="max-w-3xl">
            <h1
              className="text-4xl font-semibold tracking-tight md:text-6xl italic"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              “{site.slogan.en}”
            </h1>

            <div className="mt-6 text-base text-zinc-800">
              {site.name.zh} · {site.title.zh}
              <span className="mx-2 text-zinc-400">|</span>
              {site.name.en} · {site.title.en}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-black/90"
              >
                查看作品 / Projects
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-50"
              >
                联系我 / Contact
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <FeaturedProjects />
      </Reveal>

      <Reveal>
        <ResearchMethods />
      </Reveal>

      <Reveal>
        <AboutMe />
      </Reveal>

      <Reveal>
        <Skills />
      </Reveal>
    </div>
  );
}
