export default function UserAnalysisPage() {
  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">User Analysis</h1>
        <p className="text-sm text-zinc-600">Questionnaires, personas, adoption barriers, and related academic references.</p>
      </header>

      <div className="grid gap-4">
        <a href="https://www.mdpi.com/2073-445X/13/12/2207" target="_blank" rel="noreferrer" className="rounded-3xl border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-black/20 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)]">
          <h2 className="text-sm font-semibold">Comparative Study on the Perception of Cultural Ecosystem Services in Taibai Mountain National Forest Park</h2>
          <p className="mt-3 text-sm leading-7 text-zinc-600">基于 184 份访谈与问卷，结合参与式地图方法，分析不同利益相关者在文化生态系统服务感知上的差异，为情境感知、用户价值偏好与空间体验设计提供参考。</p>
        </a>

        <a href="https://www.mdpi.com/2073-445X/13/10/1592" target="_blank" rel="noreferrer" className="rounded-3xl border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-black/20 hover:shadow-[0_16px_36px_rgba(0,0,0,0.06)]">
          <h2 className="text-sm font-semibold">Comparative Study of Cognitive Differences in Rural Landscapes Based on Eye Movement Experiments</h2>
          <p className="mt-3 text-sm leading-7 text-zinc-600">通过眼动实验与半结构访谈研究不同群体对景观的注意分布与认知差异，为 AR 界面的视觉引导、信息显著性和层级布局设计提供方法借鉴。</p>
        </a>
      </div>
    </div>
  );
}
