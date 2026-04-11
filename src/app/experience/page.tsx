export default function ExperiencePage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Experience</h1>
        <p className="text-sm text-zinc-600">个人经历 · 教育 · 实习/工作 · 学术与奖项</p>

        <div className="mt-4 rounded-2xl border border-black/10 bg-white p-4">
          <div className="text-sm font-semibold">李佳馨</div>
          <div className="mt-2 grid gap-1 text-xs text-zinc-600 md:grid-cols-2">
            <div>Email: 2576584713@qq.com</div>
            <div>Language: IELTS 7.0 · CET-4/6</div>
          </div>
        </div>
      </header>

      <section className="rounded-3xl border border-black/10 bg-white p-7">
        <h2 className="text-sm font-semibold">Education</h2>

        <div className="mt-5 space-y-4">
          <div className="rounded-2xl border border-black/10 bg-zinc-50 p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="text-sm font-semibold text-zinc-900">西北农林科技大学（985）</div>
              <div className="text-xs text-zinc-500">2023.09 — 2026.06</div>
            </div>
            <div className="mt-1 text-xs text-zinc-600">全日制学术型硕士 · 设计学（服务与交互设计方向）</div>
            <div className="mt-3 grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
              <div className="rounded-xl border border-black/10 bg-white p-3">
                <div className="text-[11px] font-semibold text-zinc-700">GPA</div>
                <div className="mt-1 text-sm">3.75</div>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-3">
                <div className="text-[11px] font-semibold text-zinc-700">Scholarship</div>
                <div className="mt-1 text-sm">连续三年获得研究生奖学金</div>
              </div>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700">
              <li>发表论文：两篇 SCI（第一作者 1 篇、第三作者 1 篇）</li>
              <li>普刊：一篇二作、一篇尾作</li>
              <li>参与中国林业大会并进行汇报</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-black/10 bg-zinc-50 p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="text-sm font-semibold text-zinc-900">深圳技术大学</div>
              <div className="text-xs text-zinc-500">2019.09 — 2023.06</div>
            </div>
            <div className="mt-1 text-xs text-zinc-600">全日制本科 · 工业设计（商学院）</div>
            <div className="mt-3 grid gap-2 text-sm text-zinc-700 md:grid-cols-2">
              <div className="rounded-xl border border-black/10 bg-white p-3">
                <div className="text-[11px] font-semibold text-zinc-700">GPA</div>
                <div className="mt-1 text-sm">3.25（前 20%）</div>
              </div>
              <div className="rounded-xl border border-black/10 bg-white p-3">
                <div className="text-[11px] font-semibold text-zinc-700">Leadership</div>
                <div className="mt-1 text-sm">职业发展协会会长 · 记者团团长</div>
              </div>
            </div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700">
              <li>校舞蹈团宣传委员、班级宣传委员</li>
              <li>“标准化+”论文竞赛二等奖</li>
              <li>创业项目产出 1 例实用新型专利</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-7">
        <h2 className="text-sm font-semibold">Work / Internships</h2>

        <div className="mt-5 space-y-4">
          <div className="rounded-2xl border border-black/10 bg-zinc-50 p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="text-sm font-semibold text-zinc-900">星迈创新科技有限公司</div>
              <div className="text-xs text-zinc-500">2025.03 — 2025.09</div>
            </div>
            <div className="mt-1 text-xs text-zinc-600">独立站运营（Shopify）</div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700">
              <li>
                用户体验与流程优化：负责泳池清洁机器人全球独立站 UI 优化，针对海外用户浏览习惯优化注册流程，提升用户留存率 60%。
              </li>
              <li>
                系统协同与自动化营销：参与 ERP 与 Shopify 库存逻辑维护，设计 Klaviyo 自动化营销工作流，构建“弃单挽回—首购转化—复购提醒”生命周期系统；
                优化欢迎邮件与弃单策略，转化率提升 106%，大促期间 EDM 渠道收入占总销额 16%。
              </li>
              <li>
                数据驱动决策：监控 GMV、转化率、AOV 等指标，使用 Google Analytics 分析用户路径并产出报告，推动页面策略优化；欧洲区 EDM 订阅人数增长 3 万，通过转盘活动提升订阅率 40%。
              </li>
              <li>
                多端设计规范：制定邮件系统设计规范，确保多语言版本视觉与交互一致；参与 UAT 验收，保障体验一致性。
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-black/10 bg-zinc-50 p-4">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="text-sm font-semibold text-zinc-900">浙江省吉利控股集团</div>
              <div className="text-xs text-zinc-500">2024.09 — 2025.03</div>
            </div>
            <div className="mt-1 text-xs text-zinc-600">产品助理</div>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700">
              <li>
                B 端业务流程优化：调研供应商结算痛点，重构客户结款业务链路，优化多方审批流程，提升资金流转效率与合规性；降低供应商沟通成本，并通过竞品分析与行业研究输出调研报告。
              </li>
              <li>
                全生命周期管理：负责汽车外包人员进退场、履约等模块的功能演进，使用 Figma / Axure 输出高保真原型，优化从岗位发布到离职退场的闭环体验，提升 HR 与供应商协同效率 36%。
              </li>
              <li>
                AI 场景落地：负责 AI 面试模块功能设计，梳理从简历解析到自动化初面的业务流程，支持大规模招聘场景下的高效筛选。
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-7">
        <h2 className="text-sm font-semibold">Research & Publications</h2>
        <div className="mt-4 text-sm text-zinc-700">
          <ul className="list-disc space-y-1 pl-5">
            <li>SCI 论文：2 篇（第一作者 1 篇，第三作者 1 篇）</li>
            <li>普刊：二作 1 篇、尾作 1 篇</li>
            <li>中国林业大会：参会并汇报</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
