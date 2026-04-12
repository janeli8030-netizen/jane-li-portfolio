export default function UserAnalysisPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">User Analysis</h1>
        <p className="text-sm text-zinc-600">Questionnaires · Participatory Mapping · Eye Tracking · Comparative Analysis</p>
      </header>

      <section className="rounded-3xl border border-black/10 bg-white p-6">
        <div className="text-xs uppercase tracking-[0.14em] text-zinc-500">Research focus</div>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight">基于问卷、访谈、参与式地图与眼动实验的用户认知分析</h2>
        <p className="mt-4 text-sm leading-8 text-zinc-700">
          这一板块聚焦我在用户研究与数据分析上的方法能力。通过问卷、半结构访谈、参与式地图、眼动实验等不同方式，我持续研究“不同用户如何感知同一空间、景观或交互系统”，并将感知差异转化为设计决策依据。
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        {[
          ["Methods", "Questionnaire / Interview / Participatory Mapping / Eye Tracking"],
          ["Focus", "Stakeholder perception · Cognitive difference · Spatial experience"],
          ["Analysis", "Comparative analysis · Spatial distribution · Attention mapping"],
          ["Value", "Turn qualitative perception into evidence-based design insight"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-3xl border border-black/10 bg-white p-5">
            <div className="text-xs uppercase tracking-[0.14em] text-zinc-500">{label}</div>
            <div className="mt-2 text-sm font-medium text-zinc-900">{value}</div>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-6">
        <h2 className="text-lg font-semibold">01 / 数据采集与研究设计</h2>
        <div className="mt-4 space-y-4 text-sm leading-8 text-zinc-700">
          <p>
            在不同研究项目中，我会根据研究目标选择合适的数据采集方法：当问题与主观感知、利益相关者差异有关时，会采用问卷、访谈与参与式地图；当问题与视觉注意、认知偏好和信息显著性有关时，则引入眼动实验等更客观的行为数据工具。
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>184 份访谈与问卷：用于识别不同利益相关者对文化生态系统服务的价值感知差异。</li>
            <li>参与式地图：将抽象的体验评价映射到具体空间位置，便于做热点区域比较。</li>
            <li>眼动实验 + 半结构访谈：用于分析不同人群在景观中的视觉注意分布与认知偏好。</li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-6">
        <h2 className="text-lg font-semibold">02 / Comparative Study on the Perception of Cultural Ecosystem Services in Taibai Mountain National Forest Park</h2>
        <div className="mt-4 space-y-4 text-sm leading-8 text-zinc-700">
          <p>
            这项研究以太白山国家森林公园为对象，通过 184 份访谈与问卷，并结合参与式地图方法，比较不同利益相关者对文化生态系统服务（CES）的感知差异。研究不只是收集偏好，而是进一步分析不同群体在审美、教育、精神价值、文化遗产和地方认同等方面的认知偏向与空间分布模式。
          </p>
          <p>
            对我而言，这项研究最重要的价值在于：它训练了我将分散、主观的体验评价转化成可比较、可解释、可用于设计与规划决策的数据结构。也证明了我具备从问卷设计、访谈组织、空间映射到结果解释的完整研究能力。
          </p>
          <a href="https://www.mdpi.com/2073-445X/13/12/2207" target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-black/10 bg-zinc-50 px-4 py-2 text-sm font-medium hover:bg-zinc-100">
            查看论文原文
          </a>
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-6">
        <h2 className="text-lg font-semibold">03 / Comparative Study of Cognitive Differences in Rural Landscapes Based on Eye Movement Experiments</h2>
        <div className="mt-4 space-y-4 text-sm leading-8 text-zinc-700">
          <p>
            这项研究关注不同群体（如游客与村民）在乡村景观中的视觉注意与认知差异，通过眼动实验与半结构访谈相结合的方式，分析人们在不同空间场景中究竟看向哪里、如何分配注意、以及为什么会形成不同的认知路径。
          </p>
          <p>
            这类研究强化了我对“用户不是只会说，还会看、会偏向、会忽略”的理解。也让我在后续做交互界面与 AR 空间信息层级设计时，更能把视觉引导、信息权重与认知负荷联系起来，而不只是停留在审美层面。
          </p>
          <a href="https://www.mdpi.com/2073-445X/13/10/1592" target="_blank" rel="noreferrer" className="inline-flex rounded-full border border-black/10 bg-zinc-50 px-4 py-2 text-sm font-medium hover:bg-zinc-100">
            查看论文原文
          </a>
        </div>
      </section>

      <section className="rounded-3xl border border-black/10 bg-white p-6">
        <h2 className="text-lg font-semibold">04 / 研究能力总结</h2>
        <p className="mt-4 text-sm leading-8 text-zinc-700">
          这些研究项目共同体现出我的核心能力：能够根据问题类型选择合适的数据采集方式；能够从问卷、访谈、参与式地图和眼动实验中提炼出结构化洞察；并将这些洞察转化为可支撑界面设计、空间体验设计与产品决策的依据。相比只停留在描述用户意见，我更重视如何把“感受”转换成“证据”。
        </p>
      </section>
    </div>
  );
}
