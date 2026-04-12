export default function UserAnalysisPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">User Analysis</h1>
        <p className="text-sm text-zinc-600">Questionnaires · Participatory Mapping · Eye Tracking · Comparative Analysis</p>
      </header>

      <section className="space-y-6 rounded-3xl border border-black/10 bg-white p-6">
        <div>
          <div className="text-xs uppercase tracking-[0.14em] text-zinc-500">Paper 01</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">Comparative Study on the Perception of Cultural Ecosystem Services in Taibai Mountain National Forest Park</h2>
          <p className="mt-4 text-sm leading-8 text-zinc-700">
            这项研究通过 184 份访谈与问卷，并结合参与式地图方法，分析不同利益相关者在文化生态系统服务（CES）感知上的差异，重点关注审美价值、教育价值、文化遗产价值、地方认同与精神价值等维度在空间中的分布差异。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["Data collection", "184 interviews & questionnaires"],
            ["Method", "Participatory Mapping + Spatial Analysis"],
            ["Focus", "Stakeholder perception difference"],
            ["Value", "Turn subjective perception into spatial evidence"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-zinc-50 p-4">
              <div className="text-xs uppercase tracking-[0.14em] text-zinc-500">{label}</div>
              <div className="mt-2 text-sm font-medium text-zinc-900">{value}</div>
            </div>
          ))}
        </div>

        <div className="space-y-4 text-sm leading-8 text-zinc-700">
          <p>
            这项研究体现了我在问卷设计、访谈组织、利益相关者划分、空间映射和比较分析上的能力。相比只做主观意见汇总，我更关注如何把不同群体的体验评价映射为可比较、可解释、可支持景区规划与服务优化的结构化结论。
          </p>
          <a href="https://www.mdpi.com/2073-445X/13/12/2207" target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-black/10 bg-zinc-50 px-4 py-2 text-sm font-medium hover:bg-zinc-100">
            查看论文原文
          </a>
        </div>
      </section>

      <section className="space-y-6 rounded-3xl border border-black/10 bg-white p-6">
        <div>
          <div className="text-xs uppercase tracking-[0.14em] text-zinc-500">Paper 02</div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">Comparative Study of Cognitive Differences in Rural Landscapes Based on Eye Movement Experiments</h2>
          <p className="mt-4 text-sm leading-8 text-zinc-700">
            这项研究通过眼动实验与半结构访谈相结合的方式，对不同群体在乡村景观中的视觉注意力分布、认知偏好与空间理解路径进行比较分析，揭示“人究竟看哪里、为什么看、如何形成认知差异”。
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["Data collection", "Eye tracking + semi-structured interviews"],
            ["Method", "Attention mapping + comparative cognition analysis"],
            ["Focus", "Visual preference & cognitive difference"],
            ["Value", "Support hierarchy and guidance decisions in design"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl bg-zinc-50 p-4">
              <div className="text-xs uppercase tracking-[0.14em] text-zinc-500">{label}</div>
              <div className="mt-2 text-sm font-medium text-zinc-900">{value}</div>
            </div>
          ))}
        </div>

        <div className="space-y-4 text-sm leading-8 text-zinc-700">
          <p>
            这项研究强化了我使用客观行为数据理解用户认知的能力。它不仅帮助我理解不同用户如何分配视觉注意，也让我在后续做 AR 与空间界面设计时，能更有依据地组织信息层级、优化视觉引导并减少认知负担。
          </p>
          <a href="https://www.mdpi.com/2073-445X/13/10/1592" target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-black/10 bg-zinc-50 px-4 py-2 text-sm font-medium hover:bg-zinc-100">
            查看论文原文
          </a>
        </div>
      </section>
    </div>
  );
}
