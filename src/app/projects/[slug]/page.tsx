import { notFound } from "next/navigation";
import Palette from "@/components/Palette";
import SectionImage from "@/components/SectionImage";
import CmfSwatchGrid, { type CmfSwatch } from "@/components/CmfSwatchGrid";
import MoodboardMagazine from "@/components/MoodboardMagazine";
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

        <p className="mt-4 text-sm text-zinc-700">{s.overview?.en}</p>
        <p className="mt-2 text-xs text-zinc-500">{s.overview?.zh}</p>

        {/* Process: moodboard + sketches under overview */}
        {project.slug === "kids-balance-bike" ? (
          <div className="mt-6 grid gap-4">
            <MoodboardMagazine
              primary={{ src: "/projects/kids-balance-bike/sections/mood-4.jpg", alt: "Moodboard primary" }}
              circle={{ src: "/projects/kids-balance-bike/sections/mood-2.jpg", alt: "Moodboard circle" }}
              patterns={[
                { src: "/projects/kids-balance-bike/sections/mood-1.jpg", alt: "Pattern 1" },
                { src: "/projects/kids-balance-bike/sections/mood-2.jpg", alt: "Pattern 2" },
                { src: "/projects/kids-balance-bike/sections/mood-3.jpg", alt: "Pattern 3" },
              ]}
              seed={{ src: "/projects/kids-balance-bike/sections/moodboard.png", alt: "Seed / sprout mood" }}
            />

            <SectionImage
              src="/projects/kids-balance-bike/sections/moodboard.png"
              alt="Moodboard"
              caption="Moodboard / 情绪板"
            />
            <SectionImage
              src="/projects/kids-balance-bike/sections/cmf-analysis.png"
              alt="CMF analysis"
              caption="CMF analysis / CMF 分析与草图推演"
            />
          </div>
        ) : null}
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-7">
        <h2 className="text-sm font-semibold">Design Challenge & CMF Goal</h2>

        <div className="mt-4 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-sm text-zinc-700">{s.challengeAndGoal?.en}</p>
            <p className="mt-2 text-xs text-zinc-500">{s.challengeAndGoal?.zh}</p>
          </div>

          {/* Palette integrated to the right */}
          <div className="md:col-span-5">
            <div className="rounded-2xl border border-black/10 bg-zinc-50 p-4">
              <div className="text-xs font-semibold text-zinc-700">Color Scheme</div>
              <div className="mt-3">
                <Palette items={s.color?.palette ?? []} />
              </div>
              {s.color?.source?.en ? <p className="mt-3 text-xs text-zinc-600">{s.color?.source?.en}</p> : null}
              {s.color?.source?.zh ? <p className="mt-1 text-xs text-zinc-500">{s.color?.source?.zh}</p> : null}
            </div>
          </div>
        </div>

        {s.color?.psychology?.en ? <p className="mt-5 text-sm text-zinc-700">{s.color?.psychology?.en}</p> : null}
        {s.color?.psychology?.zh ? <p className="mt-2 text-xs text-zinc-500">{s.color?.psychology?.zh}</p> : null}
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-7">
        <h2 className="text-sm font-semibold">Materials & Finishes</h2>
        <p className="mt-2 text-xs text-zinc-500">
          By component — one card tells the full CMF decision: material choice → finish → touch & reason.
        </p>

        {project.slug === "kids-balance-bike" ? (
          <div className="mt-5">
            <CmfSwatchGrid
              items={(
                [
                  {
                    id: "magnesium-matte",
                    title: "Magnesium alloy",
                    subtitle: "Matte coating · micro texture",
                    meta: "Frame · Lightweight, low glare, better grip",
                    image: {
                      src: "/projects/kids-balance-bike/materials/magnesium-matte.jpg",
                      alt: "Magnesium alloy matte coating sample",
                    },
                  },
                  {
                    id: "rubber-tread",
                    title: "Natural rubber",
                    subtitle: "Pneumatic tire · anti-slip tread",
                    meta: "Wheels · Vibration absorption, strong grip",
                    image: {
                      src: "/projects/kids-balance-bike/materials/rubber-tread.jpg",
                      alt: "Natural rubber tread sample",
                    },
                  },
                  {
                    id: "pu-foam",
                    title: "Eco PU foam",
                    subtitle: "Soft-touch · low odor",
                    meta: "Handle · Child-safe tactility",
                    image: {
                      src: "/projects/kids-balance-bike/materials/pu-foam.jpg",
                      alt: "Eco PU foam sample",
                    },
                  },
                  {
                    id: "laser-engraved-steel",
                    title: "Stainless steel",
                    subtitle: "Laser engraved",
                    meta: "Branding · Durable + safe (no stickers)",
                    image: {
                      src: "/projects/kids-balance-bike/materials/stainless-laser.jpg",
                      alt: "Stainless steel laser engraving sample",
                    },
                  },
                ] satisfies CmfSwatch[]
              )}
            />
            <p className="mt-3 text-[11px] text-zinc-500">
              Tip: replace these placeholder swatch images with your real material photos (close-up, neutral light).
            </p>
          </div>
        ) : null}

        <div className="mt-5 space-y-4">
          {project.slug === "kids-balance-bike" ? (
            <>
              <div className="rounded-2xl border border-black/10 bg-zinc-50 p-4">
                <div className="text-sm font-semibold">车架 / Frame</div>
                <div className="mt-3 grid gap-4 md:grid-cols-12">
                  <div className="md:col-span-5">
                    <div className="text-xs text-zinc-500">Material</div>
                    <div className="mt-1 text-sm font-medium">镁合金 / Magnesium alloy</div>
                    <div className="mt-2 text-sm text-zinc-700">
                      ~40% lighter than carbon steel (target 1.2kg total); kids can carry it; better inherent damping.
                    </div>
                    <div className="mt-1 text-xs text-zinc-500">比碳钢轻约 40%（整车约 1.2kg），儿童可自己搬动；天然减震性更好。</div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="text-xs text-zinc-500">Finish</div>
                    <div className="mt-1 text-sm font-medium">哑光喷涂 + 微磨砂纹理 / Matte coating + micro texture</div>
                    <div className="mt-2 text-sm text-zinc-700">
                      Fine, non-slippery feel; reduced glare outdoors; micro texture improves grip.
                    </div>
                    <div className="mt-1 text-xs text-zinc-500">触感细腻不滑手；户外不反光刺眼；磨砂增加摩擦力，孩子握持更稳。</div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-xs text-zinc-500">Prototype</div>
                    <div className="mt-2 overflow-hidden rounded-xl border border-black/10 bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/projects/kids-balance-bike/sections/prototype-frame.svg"
                        alt="Prototype material - frame"
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-black/10 bg-zinc-50 p-4">
                <div className="text-sm font-semibold">车轮 / Wheels</div>
                <div className="mt-3 grid gap-4 md:grid-cols-12">
                  <div className="md:col-span-5">
                    <div className="text-xs text-zinc-500">Material</div>
                    <div className="mt-1 text-sm font-medium">充气橡胶胎 / Pneumatic rubber tire</div>
                    <div className="mt-2 text-sm text-zinc-700">
                      Absorbs vibration on rough ground; strong grip for parks/communities/grass.
                    </div>
                    <div className="mt-1 text-xs text-zinc-500">缓冲碎石路震动，抓地力强，适合公园/小区/草地。</div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="text-xs text-zinc-500">Finish</div>
                    <div className="mt-1 text-sm font-medium">原生橡胶 + 防滑纹路 / Natural rubber + tread</div>
                    <div className="mt-2 text-sm text-zinc-700">Soft and elastic; ~1.5mm tread depth for drainage and anti-slip.</div>
                    <div className="mt-1 text-xs text-zinc-500">柔软有弹性；纹路深度约 1.5mm，排水+防滑。</div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-xs text-zinc-500">Prototype</div>
                    <div className="mt-2 overflow-hidden rounded-xl border border-black/10 bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/projects/kids-balance-bike/sections/prototype-wheels.svg"
                        alt="Prototype material - wheels"
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-black/10 bg-zinc-50 p-4">
                <div className="text-sm font-semibold">把手 / Handle</div>
                <div className="mt-3 grid gap-4 md:grid-cols-12">
                  <div className="md:col-span-5">
                    <div className="text-xs text-zinc-500">Material</div>
                    <div className="mt-1 text-sm font-medium">环保 PU 发泡 / Eco PU foam</div>
                    <div className="mt-2 text-sm text-zinc-700">
                      Soft yet supportive; non-toxic/low-odor for child safety standards.
                    </div>
                    <div className="mt-1 text-xs text-zinc-500">柔软但有支撑，无毒无味，符合儿童产品安全标准。</div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="text-xs text-zinc-500">Finish</div>
                    <div className="mt-1 text-sm font-medium">双色注塑 + 防滑颗粒 / Two-shot + grip bumps</div>
                    <div className="mt-2 text-sm text-zinc-700">Soft with slight tack; ~30-mesh bumps reduce slippage for small hands.</div>
                    <div className="mt-1 text-xs text-zinc-500">柔软、微粘；颗粒密度约 30 目，小手不易滑脱。</div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-xs text-zinc-500">Prototype</div>
                    <div className="mt-2 overflow-hidden rounded-xl border border-black/10 bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/projects/kids-balance-bike/sections/prototype-handle.svg"
                        alt="Prototype material - handle"
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-black/10 bg-zinc-50 p-4">
                <div className="text-sm font-semibold">品牌标识 / Branding</div>
                <div className="mt-3 grid gap-4 md:grid-cols-12">
                  <div className="md:col-span-5">
                    <div className="text-xs text-zinc-500">Material</div>
                    <div className="mt-1 text-sm font-medium">不锈钢紧固件 / Stainless fasteners</div>
                    <div className="mt-2 text-sm text-zinc-700">Corrosion-resistant; safe for rainy outdoor use.</div>
                    <div className="mt-1 text-xs text-zinc-500">防锈，淋雨不腐蚀。</div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="text-xs text-zinc-500">Finish</div>
                    <div className="mt-1 text-sm font-medium">激光雕刻 / Laser engraving</div>
                    <div className="mt-2 text-sm text-zinc-700">Flush and durable; avoids stickers that could be picked/chewed—safety first.</div>
                    <div className="mt-1 text-xs text-zinc-500">平整无凸起，避免贴纸被抠咬或脱落，安全第一。</div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="text-xs text-zinc-500">Prototype</div>
                    <div className="mt-2 overflow-hidden rounded-xl border border-black/10 bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/projects/kids-balance-bike/sections/prototype-branding.svg"
                        alt="Prototype material - branding"
                        className="h-auto w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-sm text-zinc-500">(We can merge materials + finishes per component here.)</div>
          )}
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-7">
        <h2 className="text-sm font-semibold">Final Renders</h2>

        {(s.final?.renders ?? []).length ? (
          <div className="mt-4 grid gap-4">
            {(s.final?.renders ?? []).map((r) => (
              <div key={r.src} className="overflow-hidden rounded-2xl border border-black/10 bg-zinc-50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={r.src} alt={r.alt.en} className="h-auto w-full" />
              </div>
            ))}
          </div>
        ) : null}

        {s.final?.notes?.en ? <p className="mt-4 text-sm text-zinc-700">{s.final?.notes?.en}</p> : null}
        {s.final?.notes?.zh ? <p className="mt-2 text-xs text-zinc-500">{s.final?.notes?.zh}</p> : null}
      </section>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
