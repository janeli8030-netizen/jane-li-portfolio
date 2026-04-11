function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-zinc-50 px-3 py-1 text-xs text-zinc-700">
      {children}
    </span>
  );
}

function DatePill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-zinc-500">
      {children}
    </span>
  );
}

function SectionTitle({ title }: { title: string }) {
  return <h2 className="text-sm font-semibold text-zinc-900">{title}</h2>;
}

function ExperienceCard({
  company,
  role,
  date,
  bullets,
}: {
  company: string;
  role: string;
  date: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-3xl border border-black/10 bg-white p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-semibold tracking-tight text-zinc-900">{company}</div>
          <div className="mt-1 text-sm text-zinc-600">{role}</div>
        </div>
        <DatePill>{date}</DatePill>
      </div>
      <ul className="mt-5 space-y-3 text-sm text-zinc-700">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D7D0C2]" />
            <span className="leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ExperiencePage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>
        <p className="text-sm text-zinc-600">个人经历 · 教育 · 实习/工作 · 学术与奖项</p>
      </header>

      <div className="grid gap-6 md:grid-cols-12">
        {/* Left: Experience list */}
        <div className="md:col-span-8 space-y-6">
          <ExperienceCard
            company="星迈创新科技有限公司"
            role="独立站运营（Shopify）"
            date="2025.03 — 2025.09"
            bullets={[
              "用户体验与流程优化：负责泳池清洁机器人全球独立站 UI 优化，针对海外用户浏览习惯优化注册流程，提升用户留存率 60%。",
              "系统协同与自动化营销：参与 ERP 与 Shopify 库存逻辑维护，设计 Klaviyo 自动化营销工作流，构建“弃单挽回—首购转化—复购提醒”生命周期系统；优化欢迎邮件与弃单策略，转化率提升 106%，大促期间 EDM 渠道收入占总销额 16%。",
              "数据驱动决策：监控 GMV、转化率、AOV 等指标，使用 Google Analytics 分析用户路径并产出报告，推动页面策略优化；欧洲区 EDM 订阅人数增长 3 万，通过转盘活动提升订阅率 40%。",
              "多端设计规范：制定邮件系统设计规范，确保多语言版本视觉与交互一致；参与 UAT 验收，保障体验一致性。",
            ]}
          />

          <ExperienceCard
            company="浙江省吉利控股集团"
            role="产品助理"
            date="2024.09 — 2025.03"
            bullets={[
              "B 端业务流程优化：调研供应商结算痛点，重构客户结款业务链路，优化多方审批流程，提升资金流转效率与合规性；降低供应商沟通成本，并通过竞品分析与行业研究输出调研报告。",
              "全生命周期管理：负责汽车外包人员进退场、履约等模块的功能演进，使用 Figma / Axure 输出高保真原型，优化从岗位发布到离职退场的闭环体验，提升 HR 与供应商协同效率 36%。",
              "AI 场景落地：负责 AI 面试模块功能设计，梳理从简历解析到自动化初面的业务流程，支持大规模招聘场景下的高效筛选。",
            ]}
          />

          <div className="rounded-3xl border border-black/10 bg-white p-7">
            <SectionTitle title="Education" />

            <div className="mt-5 space-y-5">
              <div className="border-b border-black/5 pb-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-zinc-900">西北农林科技大学（985）</div>
                    <div className="mt-1 text-xs text-zinc-600">全日制学术型硕士 · 设计学（服务与交互设计方向）</div>
                  </div>
                  <DatePill>2023.09 — 2026.06</DatePill>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Pill>GPA 3.75</Pill>
                  <Pill>连续三年研究生奖学金</Pill>
                  <Pill>SCI×2（1作×1 / 3作×1）</Pill>
                </div>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                  <li>普刊：二作 1 篇、尾作 1 篇</li>
                  <li>参与中国林业大会并进行汇报</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-zinc-900">深圳技术大学</div>
                    <div className="mt-1 text-xs text-zinc-600">全日制本科 · 工业设计（商学院）</div>
                  </div>
                  <DatePill>2019.09 — 2023.06</DatePill>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Pill>GPA 3.25（前 20%）</Pill>
                  <Pill>职业发展协会会长</Pill>
                  <Pill>记者团团长</Pill>
                </div>
                <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-zinc-700">
                  <li>校舞蹈团宣传委员、班级宣传委员</li>
                  <li>“标准化+”论文竞赛二等奖</li>
                  <li>创业项目产出 1 例实用新型专利</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Toolkit + Honors */}
        <aside className="md:col-span-4 space-y-6">
          <div className="rounded-3xl border border-black/10 bg-[var(--deep-green)] p-7 text-white">
            <div className="text-sm font-semibold">Toolkit</div>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Figma",
                "Axure",
                "KeyShot",
                "Rhino",
                "Adobe PS/AI",
                "Shopify",
                "Klaviyo",
                "Google Analytics",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs text-white/90"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-7">
            <div className="text-sm font-semibold">Honors & Awards</div>
            <ul className="mt-4 space-y-2 text-sm text-zinc-700">
              <li>连续三年获得研究生奖学金</li>
              <li>“标准化+”论文竞赛二等奖</li>
              <li>创业项目产出 1 例实用新型专利</li>
              <li>中国林业大会参会并汇报</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-7">
            <div className="text-sm font-semibold">Contact</div>
            <div className="mt-3 text-sm text-zinc-700">2576584713@qq.com</div>
            <div className="mt-1 text-xs text-zinc-500">(Phone hidden)</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
