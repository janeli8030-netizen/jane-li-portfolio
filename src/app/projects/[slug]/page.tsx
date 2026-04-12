import { notFound } from "next/navigation";
import Palette from "@/components/Palette";
import SectionImage from "@/components/SectionImage";
import CmfSwatchGrid, { type CmfSwatch } from "@/components/CmfSwatchGrid";
import MoodboardMagazine from "@/components/MoodboardMagazine";
import Reveal from "@/components/Reveal";
import HeroScene from "@/components/HeroScene";
import StatementBlock from "@/components/StatementBlock";
import { projects } from "@/lib/content";

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const s = project.sections;
  const isSu7 = project.slug === "su7-cmf-proposal";

  return (
    <div className={isSu7 ? "space-y-10 text-[#2D4A3E]" : "space-y-10"}>
      <header
        className={
          isSu7
            ? "space-y-6"
            : "space-y-3"
        }
      >
        {isSu7 ? (
          <>
            <HeroScene
              image={project.cover?.src}
              title="蔚蓝之境"
              subtitle="小米 SU7 CMF 设计提案｜以晨雾蓝为线索，将外饰漆面与内饰座椅连接成一套更宁静、更治愈、也更具女性共鸣的感性体验。"
              tags={project.tags ?? []}
            />

            <StatementBlock
              eyebrow="Concept statement"
              title="用晨雾蓝连接外饰与内饰，在 SU7 的科技感之上叠加一层宁静治愈的情绪价值。"
              body="这不是简单地换一种颜色，而是把女性用户对治愈感、呼吸感、长久耐看的期待，转译成一套可被制造、可被触摸、可被感知的 CMF 语言。"
            />
          </>
        ) : (
          <>
            <div className="text-xs text-zinc-500">CMF Project</div>
            <h1 className="text-3xl font-semibold tracking-tight">
              {project.title.en}
              <span className="ml-2 text-base font-normal text-zinc-500">{project.title.zh}</span>
            </h1>
            <p className="text-base text-zinc-700">{project.summary.en}</p>
            <p className="text-sm text-zinc-500">{project.summary.zh}</p>
          </>
        )}
      </header>

      <Reveal>
      <section className={isSu7 ? "rounded-[24px] border border-black/10 bg-[#F5F1E8] p-7" : "rounded-3xl border border-black/10 bg-white p-7"}>
        <h2 className={isSu7 ? "text-sm font-semibold uppercase tracking-[0.12em] text-[#2D4A3E]" : "text-sm font-semibold"}>Project Overview</h2>

        <p className={isSu7 ? "mt-4 text-sm leading-7 text-[#4B5A53]" : "mt-4 text-sm text-zinc-700"}>{s.overview?.en}</p>
        <p className={isSu7 ? "mt-3 text-sm leading-7 text-[#6B6A63]" : "mt-2 text-xs text-zinc-500"}>{s.overview?.zh}</p>

        {project.slug === "taibai-travel-app" ? (
          <div className="mt-6 overflow-hidden rounded-2xl border border-black/10 bg-white">
            <div className="flex items-center justify-between gap-3 border-b border-black/10 bg-zinc-50 px-4 py-3">
              <div>
                <div className="text-sm font-semibold text-zinc-900">Interactive Demo</div>
                <div className="text-xs text-zinc-500">Web demo exported from the local Expo app</div>
              </div>
              <a
                href="/taibai-demo/"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-zinc-900 underline underline-offset-4"
              >
                Open in new tab
              </a>
            </div>

            <iframe
              title="Taibai Travel App Demo"
              src="/taibai-demo/"
              className="h-[820px] w-full"
              style={{ border: 0 }}
              allow="clipboard-read; clipboard-write"
            />
          </div>
        ) : null}

        {/* Process: moodboard + sketches under overview */}
        {project.slug === "kids-balance-bike" ? (
          <div className="mt-6 grid gap-4">
            <MoodboardMagazine
              primary={{ src: "/projects/kids-balance-bike/sections/mood-4.jpg", alt: "Moodboard primary" }}
              seed={{ src: "/projects/kids-balance-bike/sections/moodboard.png", alt: "Seed / sprout mood" }}
              patterns={[
                { src: "/projects/kids-balance-bike/sections/mood-1.jpg", alt: "Pattern 1" },
                { src: "/projects/kids-balance-bike/sections/mood-2.jpg", alt: "Pattern 2" },
                { src: "/projects/kids-balance-bike/sections/mood-3.jpg", alt: "Pattern 3" },
              ]}
            />

            <SectionImage
              src="/projects/kids-balance-bike/sections/cmf-analysis.png"
              alt="CMF analysis"
              caption="CMF analysis / CMF 分析与草图推演"
            />
          </div>
        ) : null}
      </section>
      </Reveal>

      {project.slug === "su7-cmf-proposal" ? (
        <Reveal>
        <section className="rounded-[24px] border border-black/10 bg-[#F5F1E8] p-7">
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#2D4A3E]">Competitor CMF Analysis</h2>
          <p className="mt-2 text-xs text-[#7C7468]">竞品车型概览 · 外饰色彩对比 · 内饰 CMF 对比 · 差异化机会</p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {[
              {
                name: "小米 SU7",
                price: "21.99–30.39 万",
                female: "女性用户占比超 50%",
                note: "主打“颜值 + 智能生态”",
                img: "/projects/su7-cmf-proposal/cover-su7.jpg",
              },
              {
                name: "小鹏 MONA M03",
                price: "11.98–15.18 万",
                female: "女性用户占比近一半",
                note: "“樱珞粉”高定套装",
                img: "/projects/su7-cmf-proposal/mona-m03.jpg",
              },
              {
                name: "蔚来 ET5",
                price: "29.80–35.60 万",
                female: "女性用户占比高",
                note: "“镜空粉”专属色",
                img: "/projects/su7-cmf-proposal/nio-et5.jpg",
              },
            ].map((car) => (
              <div key={car.name} className="overflow-hidden bg-transparent">
                <div className="aspect-[4/3] bg-white">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={car.img} alt={car.name} className="h-full w-full object-cover" />
                </div>
                <div className="space-y-2 p-4">
                  <div className="text-sm font-semibold text-[#2D4A3E]">{car.name}</div>
                  <div className="text-xs text-[#8A7A63]">{car.price}</div>
                  <div className="text-sm text-[#55635B]">{car.note}</div>
                  <div className="inline-flex rounded-full bg-[#E8E2D5] px-3 py-1 text-[11px] text-[#6B6A63] ring-1 ring-black/10">
                    {car.female}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 overflow-hidden p-0">
            <div className="text-sm font-semibold text-[#2D4A3E]">Exterior color comparison</div>
            <div className="mt-1 text-xs text-[#7C7468]">女性首选色对比：紫 / 粉色系集中，浅蓝色仍有差异化空间</div>
            <div className="mt-4 border-l-2 border-[#C9A87C]/60 pl-4 text-xs leading-6 text-[#7C7468]">
              图片位可继续补充三车外饰横向对比图；当前先以标签化方式呈现女性偏好色，保持信息清晰。
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {[
                { name: "小米 SU7", colors: ["霞光紫", "流金粉"] },
                { name: "小鹏 MONA M03", colors: ["罗兰紫", "樱珞粉"] },
                { name: "蔚来 ET5", colors: ["镜空粉", "宇航蓝"] },
              ].map((item) => (
                <div key={item.name} className="border-t border-black/10 bg-transparent px-0 py-4 first:border-t-0">
                  <div className="text-sm font-semibold text-[#2D4A3E]">{item.name}</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.colors.map((c) => (
                      <span key={c} className="rounded-full bg-[#E8E2D5] px-3 py-1 text-xs text-[#5C665F]">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 overflow-hidden p-0">
            <div className="text-sm font-semibold text-[#2D4A3E]">Interior CMF comparison</div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {[
                { name: "小米 SU7 · 暮光红", img: "/projects/su7-cmf-proposal/interior-seats.jpg" },
                { name: "小鹏 MONA M03 · 拂晓紫", img: "/projects/su7-cmf-proposal/mona-interior.jpg" },
                { name: "蔚来 ET5 · 电驭紫", img: "/projects/su7-cmf-proposal/nio-interior.jpg" },
              ].map((item) => (
                <div key={item.name} className="overflow-hidden rounded-[24px] border border-black/10 bg-white">
                  <div className="aspect-[4/3] bg-zinc-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-3 text-xs text-zinc-600">{item.name}</div>
                </div>
              ))}
            </div>

            <div className="mt-4 overflow-x-auto rounded-2xl border border-black/10 bg-white">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-zinc-50 text-zinc-700">
                  <tr>
                    <th className="px-4 py-3 font-medium">对比维度</th>
                    <th className="px-4 py-3 font-medium">小米 SU7</th>
                    <th className="px-4 py-3 font-medium">小鹏 MONA M03</th>
                    <th className="px-4 py-3 font-medium">蔚来 ET5</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["内饰主色调", "暮光红、迷雾紫、砂陶米", "拂晓紫、晨雾灰、夜幕灰", "电驭紫、金沙米、苔原绿"],
                    ["座椅面料", "Nappa 真皮", "仿麂皮 + Nappa", "Nappa + Haptex"],
                    ["表面工艺", "绗缝 + 金属网罩", "全金属蚀刻 + UV 触感漆", "绗缝 + 打孔 + 参数化纹理"],
                    ["女性专属配置", "补光化妆镜 + 18.4L 储物", "三档美妆镜 + 防晒天幕", "补光化妆镜 + 柔光氛围灯"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-t border-black/10 align-top text-zinc-700">
                      {row.map((cell, i) => (
                        <td key={i} className="px-4 py-3 text-sm">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 overflow-hidden p-0">
            <div className="text-sm font-semibold text-[#2D4A3E]">Differentiation opportunities</div>
            <div className="mt-4 overflow-x-auto rounded-2xl border border-black/10 bg-white">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-zinc-50 text-zinc-700">
                  <tr>
                    <th className="px-4 py-3 font-medium">机会点</th>
                    <th className="px-4 py-3 font-medium">竞品现状</th>
                    <th className="px-4 py-3 font-medium">本提案差异化</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["🎨 外饰色彩", "紫 / 粉色系为主，蓝色系空白", "推出“晨雾蓝”低饱和度治愈蓝"],
                    ["🛋️ 内饰色调", "紫色 / 米色为主", "浅米色 + 浅蓝色撞色，内外呼应"],
                    ["📦 材料组合", "单一材质（全 Nappa 或全仿麂皮）", "仿麂皮 + Nappa 组合"],
                    ["✨ 表面工艺", "直线绗缝为主", "参数化渐变打孔"],
                    ["💭 情绪价值", "浪漫 / 优雅 / 豪华", "宁静 / 治愈 / 呼吸感"],
                  ].map((row) => (
                    <tr key={row[0]} className="border-t border-black/10 align-top text-zinc-700">
                      {row.map((cell, i) => (
                        <td key={i} className="px-4 py-3 text-sm">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        </Reveal>
      ) : (s.finish?.processes ?? []).length ? (
        <section className="rounded-3xl border border-black/10 bg-white p-7">
          <h2 className="text-sm font-semibold">IA & Journey</h2>
          <p className="mt-2 text-xs text-zinc-500">Information Architecture · User journey · Guidelines</p>

          <div className="mt-5 grid gap-4">
            {(s.finish?.processes ?? []).map((p) => (
              <div key={p.name} className="rounded-2xl border border-black/10 bg-zinc-50 p-4">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="text-sm font-semibold text-zinc-900">{p.name}</div>
                </div>
                {p.description?.en ? <p className="mt-2 text-sm text-zinc-700">{p.description.en}</p> : null}
                {p.description?.zh ? <p className="mt-1 text-xs text-zinc-500">{p.description.zh}</p> : null}

                {p.compare?.afterSrc ? (
                  <div className="mt-3 overflow-hidden rounded-xl border border-black/10 bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.compare.afterSrc} alt={p.compare?.alt?.en ?? p.name} className="h-auto w-full" />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <Reveal>
      <section className={isSu7 ? "rounded-[24px] border border-black/10 bg-[#F5F1E8] p-7" : "rounded-3xl border border-black/10 bg-white p-7"}>
        <h2 className={isSu7 ? "text-sm font-semibold uppercase tracking-[0.12em] text-[#2D4A3E]" : "text-sm font-semibold"}>Design Challenge & CMF Goal</h2>

        <div className="mt-4 grid gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className={isSu7 ? "text-sm leading-7 text-[#4B5A53]" : "text-sm text-zinc-700"}>{s.challengeAndGoal?.en}</p>
            <p className={isSu7 ? "mt-3 text-sm leading-7 text-[#6B6A63]" : "mt-2 text-xs text-zinc-500"}>{s.challengeAndGoal?.zh}</p>
          </div>

          {/* Palette integrated to the right */}
          <div className="md:col-span-5">
            <div className={isSu7 ? "rounded-[24px] border border-black/10 bg-white/80 p-4" : "rounded-2xl border border-black/10 bg-zinc-50 p-4"}>
              <div className={isSu7 ? "text-xs font-semibold uppercase tracking-[0.12em] text-[#8A7A63]" : "text-xs font-semibold text-zinc-700"}>Color Scheme</div>
              <div className="mt-3">
                <Palette items={s.color?.palette ?? []} />
              </div>
              {s.color?.source?.en ? <p className={isSu7 ? "mt-3 text-xs leading-6 text-[#5C665F]" : "mt-3 text-xs text-zinc-600"}>{s.color?.source?.en}</p> : null}
              {s.color?.source?.zh ? <p className={isSu7 ? "mt-2 text-xs leading-6 text-[#7C7468]" : "mt-1 text-xs text-zinc-500"}>{s.color?.source?.zh}</p> : null}
            </div>
          </div>
        </div>

        {s.color?.psychology?.en ? <p className={isSu7 ? "mt-5 text-sm leading-7 text-[#4B5A53]" : "mt-5 text-sm text-zinc-700"}>{s.color?.psychology?.en}</p> : null}
        {s.color?.psychology?.zh ? <p className={isSu7 ? "mt-3 text-sm leading-7 text-[#6B6A63]" : "mt-2 text-xs text-zinc-500"}>{s.color?.psychology?.zh}</p> : null}
      </section>
      </Reveal>

      <Reveal>
      <section className={isSu7 ? "rounded-[24px] border border-black/10 bg-[#F5F1E8] p-7" : "rounded-3xl border border-black/10 bg-white p-7"}>
        <h2 className={isSu7 ? "text-sm font-semibold uppercase tracking-[0.12em] text-[#2D4A3E]" : "text-sm font-semibold"}>Materials & Finishes</h2>
        <p className={isSu7 ? "mt-2 text-xs leading-6 text-[#7C7468]" : "mt-2 text-xs text-zinc-500"}>
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
          ) : isSu7 ? (
            <div className="grid gap-4 md:grid-cols-2">
              {(s.finish?.processes ?? []).map((p) => (
                <div key={p.name} className="overflow-hidden rounded-[24px] border border-black/10 bg-white/80 shadow-sm">
                  {p.compare?.afterSrc ? (
                    <div className="relative aspect-[4/3] bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.compare.afterSrc} alt={p.compare?.alt?.en ?? p.name} className="h-full w-full object-cover" />

                      {p.name.includes("Exterior") ? (
                        <div className="absolute left-5 top-5 rounded-full bg-[#E8E2D5] px-3 py-1 text-[11px] text-[#5C665F] ring-1 ring-black/10">
                          珠光金属漆 · 3C2B
                        </div>
                      ) : null}

                      {p.name.includes("Interior") ? (
                        <div className="absolute left-5 top-5 rounded-full bg-[#E8E2D5] px-3 py-1 text-[11px] text-[#5C665F] ring-1 ring-black/10">
                          仿麂皮 · 撞色缝线 · 渐变打孔
                        </div>
                      ) : null}
                    </div>
                  ) : (
                    <div className="flex aspect-[4/3] items-center justify-center bg-zinc-100 text-sm text-[#7C7468]">
                      Visual coming soon
                    </div>
                  )}

                  <div className="space-y-3 p-5">
                    <div className="text-[10px] uppercase tracking-[0.14em] text-[#8A7A63]">CMF module</div>
                    <div className="text-lg font-medium text-[#2D4A3E]">{p.name}</div>
                    {p.description?.zh ? <p className="text-sm leading-7 text-[#5C665F] whitespace-pre-line">{p.description.zh}</p> : null}
                    {p.description?.en ? <p className="text-xs leading-6 text-[#7C7468]">{p.description.en}</p> : null}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-zinc-500">(We can merge materials + finishes per component here.)</div>
          )}
        </div>
      </section>
      </Reveal>

      <Reveal>
      <section className={isSu7 ? "rounded-[24px] border border-black/10 bg-[#F5F1E8] p-7" : "rounded-3xl border border-black/10 bg-white p-7"}>
        <h2 className={isSu7 ? "text-sm font-semibold uppercase tracking-[0.12em] text-[#2D4A3E]" : "text-sm font-semibold"}>Final Renders</h2>

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

        {isSu7 ? (
          <div className="mt-5 grid gap-4 md:grid-cols-4">
            {[
              ["时间", "2026 年 4 月"],
              ["类型", "个人 CMF 设计研究"],
              ["工具", "Keyshot / Photoshop / Figma"],
              ["状态", "概念设计"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[24px] border border-black/10 bg-white/80 p-4 transition duration-500 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(45,74,62,0.08)]">
                <div className="text-[11px] uppercase tracking-[0.12em] text-[#8A7A63]">{label}</div>
                <div className="mt-2 text-sm font-medium text-[#2D4A3E]">{value}</div>
              </div>
            ))}
          </div>
        ) : null}

        {s.final?.notes?.en ? <p className={isSu7 ? "mt-4 text-sm leading-7 text-[#4B5A53]" : "mt-4 text-sm text-zinc-700"}>{s.final?.notes?.en}</p> : null}
        {s.final?.notes?.zh ? <p className={isSu7 ? "mt-3 text-sm leading-7 text-[#6B6A63]" : "mt-2 text-xs text-zinc-500"}>{s.final?.notes?.zh}</p> : null}
      </section>
      </Reveal>
    </div>
  );
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
