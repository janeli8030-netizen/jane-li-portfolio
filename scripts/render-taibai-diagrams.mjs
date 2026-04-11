import fs from "node:fs";
import path from "node:path";

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function svgIa(data) {
  const width = 1600;
  const height = 900;
  const pad = 64;

  const cols = data.tabs.length;
  const colW = Math.floor((width - pad * 2) / cols);

  const bg = "#ffffff";
  const ink = "#111827";
  const muted = "#6b7280";
  const stroke = "#e5e7eb";
  const tabBg = "#f9fafb";

  const headerH = 44;

  let svg = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  svg += `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;
  svg += `<rect x="0" y="0" width="${width}" height="${height}" fill="${bg}"/>`;

  svg += `<text x="${pad}" y="${pad - 18}" font-size="22" font-family="ui-sans-serif, system-ui" fill="${ink}" font-weight="600">Information Architecture</text>`;
  svg += `<text x="${pad}" y="${pad + 8}" font-size="14" font-family="ui-sans-serif, system-ui" fill="${muted}">Tabs → key screens (Taibai Travel App)</text>`;

  const topY = pad + 36;
  const boxH = height - topY - pad;

  data.tabs.forEach((t, i) => {
    const x = pad + i * colW;
    const y = topY;
    const w = colW - 18;
    const h = boxH;

    // Column container
    svg += `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="${tabBg}" stroke="${stroke}"/>`;

    // Header
    svg += `<rect x="${x + 14}" y="${y + 14}" width="${w - 28}" height="${headerH}" rx="14" fill="#fff" stroke="${stroke}"/>`;
    svg += `<text x="${x + 28}" y="${y + 42}" font-size="18" font-family="ui-sans-serif, system-ui" fill="${ink}" font-weight="700">${esc(t.label)}</text>`;

    // Children
    let cy = y + 14 + headerH + 18;
    const chipH = 34;
    const chipGap = 10;
    const chipW = w - 28;
    t.children.forEach((c) => {
      svg += `<rect x="${x + 14}" y="${cy}" width="${chipW}" height="${chipH}" rx="14" fill="#fff" stroke="${stroke}"/>`;
      svg += `<text x="${x + 28}" y="${cy + 22}" font-size="14" font-family="ui-sans-serif, system-ui" fill="${ink}">${esc(c)}</text>`;
      cy += chipH + chipGap;
    });
  });

  svg += `</svg>`;
  return svg;
}

function svgJourney() {
  const width = 1600;
  const height = 900;
  const pad = 64;

  const bg = "#ffffff";
  const ink = "#111827";
  const muted = "#6b7280";
  const stroke = "#e5e7eb";
  const accent = "#4CB3AB";

  const steps = [
    {
      title: "行前规划",
      desc: "天气/客流 → 目标点位 → 路线推荐",
      screens: ["首页", "天气", "景区客流量"],
    },
    {
      title: "探索决策",
      desc: "景点/路线/设施对比 → 收藏",
      screens: ["探索", "景点详情", "推荐路线"],
    },
    {
      title: "到达出行",
      desc: "停车/接驳 → 导航与设施导览",
      screens: ["停车场", "实时接驳", "设施导览"],
    },
    {
      title: "游玩执行",
      desc: "路线高亮 → 节点打卡 → 风险提示",
      screens: ["路线详情", "路线分析", "紧急联系"],
    },
    {
      title: "票务与服务",
      desc: "购票/订单 → 核销/票夹 → 客服",
      screens: ["确认下单", "门票", "智能客服"],
    },
    {
      title: "行后分享",
      desc: "故事发布 → 评价反馈",
      screens: ["行后故事", "行后评价", "社区活动"],
    },
  ];

  let svg = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  svg += `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;
  svg += `<rect x="0" y="0" width="${width}" height="${height}" fill="${bg}"/>`;

  svg += `<text x="${pad}" y="${pad - 18}" font-size="22" font-family="ui-sans-serif, system-ui" fill="${ink}" font-weight="600">User Journey</text>`;
  svg += `<text x="${pad}" y="${pad + 8}" font-size="14" font-family="ui-sans-serif, system-ui" fill="${muted}">Plan → Explore → Arrive → Trip → Ticket/Service → Share</text>`;

  const topY = pad + 48;
  const rowH = 112;

  // timeline line
  svg += `<line x1="${pad}" y1="${topY - 16}" x2="${width - pad}" y2="${topY - 16}" stroke="${stroke}" stroke-width="2"/>`;

  const usableW = width - pad * 2;
  const stepW = Math.floor((usableW - 24 * (steps.length - 1)) / steps.length);

  steps.forEach((s, i) => {
    const x = pad + i * (stepW + 24);
    const y = topY;

    // marker
    const mx = x + Math.floor(stepW / 2);
    svg += `<circle cx="${mx}" cy="${topY - 16}" r="8" fill="${accent}"/>`;

    // card
    svg += `<rect x="${x}" y="${y}" width="${stepW}" height="${rowH}" rx="18" fill="#fff" stroke="${stroke}"/>`;
    svg += `<text x="${x + 18}" y="${y + 30}" font-size="16" font-family="ui-sans-serif, system-ui" fill="${ink}" font-weight="700">${esc(s.title)}</text>`;
    svg += `<text x="${x + 18}" y="${y + 54}" font-size="12" font-family="ui-sans-serif, system-ui" fill="${muted}">${esc(s.desc)}</text>`;

    // chips
    let cy = y + 70;
    s.screens.forEach((c) => {
      svg += `<rect x="${x + 18}" y="${cy}" width="${stepW - 36}" height="22" rx="11" fill="#f9fafb" stroke="${stroke}"/>`;
      svg += `<text x="${x + 28}" y="${cy + 15}" font-size="12" font-family="ui-sans-serif, system-ui" fill="${ink}">${esc(c)}</text>`;
      cy += 26;
    });
  });

  // footer note
  svg += `<text x="${pad}" y="${height - pad + 8}" font-size="12" font-family="ui-sans-serif, system-ui" fill="${muted}">Generated from local app navigation (taibai-app) · diagrams are illustrative.</text>`;

  svg += `</svg>`;
  return svg;
}

function main() {
  const root = process.cwd();
  const outDir = path.join(root, "public", "projects", "taibai-travel-app", "diagrams");
  fs.mkdirSync(outDir, { recursive: true });

  const iaJson = path.join(outDir, "ia.json");
  const data = JSON.parse(fs.readFileSync(iaJson, "utf8"));

  fs.writeFileSync(path.join(outDir, "ia.svg"), svgIa(data), "utf8");
  fs.writeFileSync(path.join(outDir, "journey.svg"), svgJourney(), "utf8");

  console.log("Wrote:", path.join(outDir, "ia.svg"));
  console.log("Wrote:", path.join(outDir, "journey.svg"));
}

main();
