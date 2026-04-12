export default function AIDesignResearchPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">AI Design Research</h1>
        <p className="text-sm text-zinc-600">HCI Paper · Generative AI · Cognitive Load Theory</p>
      </header>

      <section className="rounded-3xl border border-black/10 bg-white p-6">
        <div className="text-xs uppercase tracking-[0.14em] text-zinc-500">AI-assisted writing</div>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">基于认知负荷理论的 AI 辅助写作粒度机制研究</h2>
        <p className="mt-4 text-sm leading-8 text-zinc-700">
          当大语言模型（LLMs）成为“共同作者”，过度干预是否会削弱用户的创作能动性？本研究引入“AI 辅助粒度”作为核心变量，系统探究句子级、段落级、全文级不同支持方式如何在效率提升、认知卸载与深度参与之间形成动态平衡。
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {[
          ["Role", "UX Researcher"],
          ["Subject", "Human-Computer Interaction"],
          ["Methodology", "Within-subjects + Latin Square + ANOVA"],
          ["Participants", "N = 21"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-3xl border border-black/10 bg-white p-5">
            <div className="text-xs uppercase tracking-[0.14em] text-zinc-500">{label}</div>
            <div className="mt-2 text-sm font-medium text-zinc-900">{value}</div>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-6">
        <h2 className="text-lg font-semibold">01 / 研究背景与核心悖论</h2>
        <p className="mt-4 text-sm leading-8 text-zinc-700">
          生成式 AI 将写作从个体表达扩展为人与机器之间的协同创作，但这种效率导向的帮助也可能削弱作者的归属感、能动性与知识建构过程。本研究的核心问题是：如何在 AI 介入写作时，既提升效率，又不让写作沦为简单的“任务外包”？
        </p>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-6">
        <h2 className="text-lg font-semibold">02 / 实验设计与量表重构</h2>
        <div className="mt-4 space-y-4 text-sm leading-8 text-zinc-700">
          <p>
            研究使用基于 React + Tiptap 定制开发的 AI 写作工具，招募 21 名大学生完成议论文写作任务。实验采用被试内设计（Within-subjects design）并结合拉丁方阵（Latin Square）平衡任务顺序，以减少顺序效应对结果的干扰。
          </p>
          <p>
            在评估上，研究引入并改编 Leppink 认知负荷量表，将负荷拆分为三类：内在负荷（任务本身复杂度感知）、外在负荷（与 AI 建议整合时的额外摩擦）以及相关/生成性负荷（AI 是否真正成为思维脚手架）。
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>句子级提示：低支持条件，保留更多构思空间，接近自动补全。</li>
            <li>段落级提示：中等支持条件，在结构支撑与深度思考之间寻求平衡。</li>
            <li>全文结构提示：高支持条件，直接提供完整结构参考，最大程度降低构思负担。</li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-6">
        <h2 className="text-lg font-semibold">03 / 定量分析与核心洞察</h2>
        <div className="mt-4 space-y-4 text-sm leading-8 text-zinc-700">
          <p>
            通过 ANOVA 方差分析，研究揭示了 AI 辅助粒度在“认知卸载”与“能动性维持”之间的张力：句子级提示的外在负荷最高，频繁打断写作心流；全文结构提示虽然极大降低内在与外在负荷，却容易让用户把写作视为“任务外包”；段落级提示则在生成性认知负荷上表现最佳，成为“适度引导”的甜点区。
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-zinc-50 p-4">
              <div className="text-sm font-medium">句子级提示</div>
              <p className="mt-2 text-sm text-zinc-600">高外在摩擦，保留能动性，但明显打断创作节奏。</p>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-4">
              <div className="text-sm font-medium">段落级提示</div>
              <p className="mt-2 text-sm text-zinc-600">在结构支撑与深度参与之间达到最佳平衡，是最优支持粒度。</p>
            </div>
            <div className="rounded-2xl bg-zinc-50 p-4">
              <div className="text-sm font-medium">全文结构提示</div>
              <p className="mt-2 text-sm text-zinc-600">认知负荷最低，但显著削弱了批判性建构与创作者归属感。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-6">
        <h2 className="text-lg font-semibold">04 / 设计启示与未来展望</h2>
        <p className="mt-4 text-sm leading-8 text-zinc-700">
          本研究的核心结论是：未来 AI 写作系统不应仅是“内容生成器”，而应成为能够动态调节支持层级的“认知调节器”。在构思初期使用高粒度支持帮助用户突破冷启动，在写作中期切换到段落级提示以激发深度整合，在定稿阶段退回词句级辅助细化表达，才能真正平衡效率、创造性与用户能动性。
        </p>
      </section>
    </div>
  );
}
