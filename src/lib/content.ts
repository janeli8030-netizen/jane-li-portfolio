export type Locale = "zh" | "en";

export type ProjectType =
  | "cmf-experiment"
  | "kids-balance-bike"
  | "aroma-device"
  | "taibai-travel-app"
  | "ar-emotion-game";

export type Project = {
  slug: string;
  order: number;
  type: ProjectType;
  title: Record<Locale, string>;
  summary: Record<Locale, string>;
  year?: string;
  role?: Record<Locale, string>;
  tags?: string[];
  cover?: { src: string; alt: Record<Locale, string> };
  sections: {
    overview?: Record<Locale, string>;
    challengeAndGoal?: Record<Locale, string>;
    color?: {
      palette?: { name: string; hex?: string; note?: Record<Locale, string> }[];
      source?: Record<Locale, string>;
      psychology?: Record<Locale, string>;
    };
    material?: {
      items?: {
        name: string;
        why: Record<Locale, string>;
        photo?: { src: string; alt: Record<Locale, string> };
      }[];
    };
    finish?: {
      processes?: {
        name: string;
        description: Record<Locale, string>;
        compare?: { beforeSrc?: string; afterSrc?: string; alt?: Record<Locale, string> };
      }[];
    };
    final?: {
      renders?: { src: string; alt: Record<Locale, string> }[];
      notes?: Record<Locale, string>;
    };
  };
};

export const projects: Project[] = [
  {
    slug: "cmf-experiments",
    order: 1,
    type: "cmf-experiment",
    title: { zh: "CMF 专项实验", en: "CMF Focus Experiments" },
    summary: {
      zh: "用材料样板、色彩搭配与工艺对比，建立可复用的 CMF 语言与落地方法。",
      en: "Building a reusable CMF language through swatches, color exercises, and finish comparisons.",
    },
    sections: {
      overview: {
        zh: "这是一个持续更新的 CMF 实验合集，记录从趋势→色彩→材料→工艺→呈现的完整推导过程。",
        en: "An evolving collection of CMF experiments documenting a full reasoning chain from trends to execution.",
      },
      challengeAndGoal: {
        zh: "挑战：把主观偏好变成可沟通、可制造的决策。目标：沉淀可复用的色彩与材料组合规则。",
        en: "Challenge: turning subjective preference into communicable, manufacturable decisions. Goal: codify reusable rules for color–material pairings.",
      },
      color: {
        palette: [
          { name: "Warm Sand", hex: "#D6C2A8", note: { zh: "温暖、亲肤", en: "Warm, skin-friendly" } },
          { name: "Graphite", hex: "#2E2F33", note: { zh: "理性、稳重", en: "Rational, grounded" } },
          { name: "Mist Blue", hex: "#A8C3D6", note: { zh: "干净、呼吸感", en: "Clean, breathable" } },
        ],
        source: {
          zh: "来源于自然材质（砂石/矿物）与当代家居色彩趋势的交集。",
          en: "Sourced from the intersection of natural materials (stone/minerals) and contemporary home color trends.",
        },
        psychology: {
          zh: "降低焦虑、增强安全感与可信赖感，适合日常高频触达的产品。",
          en: "Designed to reduce anxiety and increase trust—fit for everyday high-touch products.",
        },
      },
      material: {
        items: [
          {
            name: "PC+ABS (fine texture)",
            why: {
              zh: "平衡强度与成本，可通过模具蚀纹获得细腻触感。",
              en: "Balances strength and cost; fine tactile feel via mold texturing.",
            },
          },
        ],
      },
      finish: {
        processes: [
          {
            name: "Matte UV",
            description: {
              zh: "降低反光、提升高级感；与细纹理叠加能显著改善指纹问题。",
              en: "Reduces glare and elevates premium feel; layered with fine texture to mitigate fingerprints.",
            },
          },
        ],
      },
      final: {
        notes: {
          zh: "后续会补充：样板照片、Keyshot 材质球、工艺对比图。",
          en: "To be added: swatch photos, Keyshot materials, and finish comparison images.",
        },
      },
    },
  },
  {
    slug: "kids-balance-bike",
    order: 2,
    type: "kids-balance-bike",
    title: { zh: "儿童滑步车｜Mantis", en: "Kids Balance Bike | Mantis" },
    summary: {
      zh: "以螳螂自然色为起点，通过降饱和色彩策略与安全识别点，打造轻便、安全、舒适的儿童滑步车 CMF 方案。",
      en: "Starting from mantis-inspired naturals, a de-saturated palette and safety accents shape a lightweight, safe, and comfortable CMF concept.",
    },
    sections: {
      overview: {
        zh: "以仿生螳螂为灵感的儿童滑步车概念方案，围绕“轻便、安全、舒适”建立 CMF 语言与可制造的落地细节。",
        en: "A kids balance bike concept inspired by a mantis, building a manufacturable CMF language around lightness, safety, and comfort.",
      },
      challengeAndGoal: {
        zh: "挑战：在户外高频使用场景下兼顾轻量化、耐候、耐脏与儿童安全；目标：用颜色与触感建立识别度与安全感，并形成可生产的材料/工艺组合。",
        en: "Challenge: balance lightweight construction with outdoor durability and child safety. Goal: use color and tactility to build recognizability and trust, with producible material/finish choices.",
      },
      color: {
        palette: [
          {
            name: "Matte Ink Green",
            hex: "#1F3A2E",
            note: {
              zh: "主色：Pantone 19-5217 TCX｜车架主体，传递自然、沉稳、生命力",
              en: "Primary: Pantone 19-5217 TCX — frame body; natural, calm, vital",
            },
          },
          {
            name: "Warm Limestone",
            hex: "#D7D0C2",
            note: {
              zh: "辅色：Pantone 16-3802 TCX｜连接件/螺丝盖，平衡主色冷感",
              en: "Secondary: Pantone 16-3802 TCX — connectors/caps; balances coolness",
            },
          },
          {
            name: "Fluoro Yellow-Green",
            hex: "#D7E100",
            note: {
              zh: "点缀：Pantone 13-0630 TN｜轮毂/把手端，提升辨识度与安全警示",
              en: "Accent: Pantone 13-0630 TN — hubs/handle ends; visibility & safety cue",
            },
          },
        ],
        source: {
          zh: "色彩策略：以螳螂自然色为起点，进行“降饱和”处理，形成差异化。",
          en: "Color strategy: start from mantis naturals and de-saturate for differentiation.",
        },
      },
      material: {
        items: [
          {
            name: "车架｜镁合金",
            why: {
              zh: "比碳钢轻约 40%（整车约 1.2kg），儿童可自己搬动；天然减震性更好。",
              en: "~40% lighter than carbon steel (target 1.2kg total); kids can carry it; better inherent damping.",
            },
          },
          {
            name: "车轮｜充气橡胶胎",
            why: {
              zh: "缓冲碎石路震动，抓地力强，适合公园/小区/草地。",
              en: "Absorbs vibration on rough ground; strong grip for parks/communities/grass.",
            },
          },
          {
            name: "把手/坐垫｜环保 PU 发泡",
            why: {
              zh: "柔软但有支撑，无毒无味，符合儿童产品安全标准。",
              en: "Soft yet supportive; non-toxic/low-odor for child safety standards.",
            },
          },
          {
            name: "紧固件｜不锈钢",
            why: {
              zh: "防锈，淋雨不腐蚀。",
              en: "Corrosion-resistant; safe for rainy outdoor use.",
            },
          },
        ],
      },
      finish: {
        processes: [
          {
            name: "车架｜哑光喷涂 + 微磨砂纹理",
            description: {
              zh: "触感细腻不滑手；户外不反光刺眼；磨砂增加摩擦力，孩子握持更稳。",
              en: "Fine, non-slippery feel; reduced glare outdoors; micro texture improves grip.",
            },
          },
          {
            name: "车轮｜原生橡胶 + 防滑纹路",
            description: {
              zh: "柔软有弹性；纹路深度约 1.5mm，排水+防滑。",
              en: "Soft and elastic; ~1.5mm tread depth for drainage and anti-slip.",
            },
          },
          {
            name: "把手｜双色注塑 + 防滑颗粒",
            description: {
              zh: "柔软、微粘；颗粒密度约 30 目，小手不易滑脱。",
              en: "Soft with slight tack; ~30-mesh bumps reduce slippage for small hands.",
            },
          },
          {
            name: "品牌 LOGO｜激光雕刻",
            description: {
              zh: "平整无凸起，避免贴纸被抠咬或脱落，安全第一。",
              en: "Flush and durable; avoids stickers that could be picked/chewed—safety first.",
            },
          },
        ],
      },
      final: {
        renders: [
          {
            src: "/projects/kids-balance-bike/final-renders.png",
            alt: { zh: "儿童滑步车渲染图", en: "Kids balance bike renders" },
          },
        ],
        notes: {
          zh: "材料组合逻辑：镁合金（轻）+ 充气胎（稳）+ PU 发泡（软）= 兼顾“轻便、安全、舒适”。",
          en: "Material logic: Mg alloy (light) + pneumatic tire (stable) + PU foam (soft) = lightweight, safe, comfortable.",
        },
      },
    },
  },
  {
    slug: "lulu-aroma-device",
    order: 3,
    type: "aroma-device",
    title: { zh: "露露馨香薰机", en: "Lulu Aroma Device" },
    summary: {
      zh: "仿生形态与 CMF 统一：让“治愈感”通过触感与微光被感知。",
      en: "Unifying biomorphic form and CMF so ‘comfort’ is felt through tactility and soft glow.",
    },
    sections: {
      overview: { zh: "（待补充项目概述）", en: "(Project overview coming soon)" },
      challengeAndGoal: { zh: "（待补充）", en: "(Coming soon)" },
      color: { palette: [] },
      material: { items: [] },
      finish: { processes: [] },
      final: { renders: [] },
    },
  },
  {
    slug: "taibai-travel-app",
    order: 4,
    type: "taibai-travel-app",
    title: { zh: "太白山旅游 APP", en: "Taibai Mountain Travel App" },
    summary: {
      zh: "围绕景区出行与游玩路径，梳理信息架构与关键流程，打造清晰、易用的旅游服务 App 体验。",
      en: "A travel service app for Taibai Mountain—refining information architecture and key journeys for a clear, usable experience.",
    },
    sections: {
      overview: {
        zh: "面向景区游客的旅游服务 App 概念方案，围绕“行前规划—到达出行—游玩路线—购票与服务—行后分享”构建关键体验。",
        en: "A travel service app concept for Taibai Mountain, designed around key journeys from planning to on-site navigation and post-trip sharing.",
      },
      challengeAndGoal: {
        zh: "挑战：多场景信息（路线/设施/票务/交通/客流/应急）分散且决策成本高。目标：用清晰的信息架构与可执行的用户旅程，降低在途焦虑并提升游玩效率。",
        en: "Challenge: fragmented information across routes, facilities, tickets, transit, crowd flow and emergencies. Goal: reduce decision friction through clear IA and actionable journeys.",
      },
      color: {
        palette: [
          { name: "Taibai Teal", hex: "#4CB3AB", note: { zh: "主要强调色：引导与操作", en: "Primary accent for guidance and actions" } },
          { name: "Warm Background", hex: "#F6F2EA", note: { zh: "暖底色：自然与舒适", en: "Warm base for calm, natural feel" } },
          { name: "Border", hex: "#E7E1D7", note: { zh: "分隔线：轻量层级", en: "Light separators for hierarchy" } },
          { name: "Text", hex: "#1B1B1B", note: { zh: "正文：可读性", en: "Text for readability" } },
        ],
        source: {
          zh: "配色来源于项目内置主题（Primary #4CB3AB + Warm background #F6F2EA）。",
          en: "Palette derived from the app theme tokens (Primary #4CB3AB + Warm background #F6F2EA).",
        },
      },
      material: {
        items: [
          {
            name: "Information Architecture",
            why: {
              zh: "四个一级入口（首页/探索/行程/我的）+ 关键二级页（路线详情/设施导览/客流/实时接驳/票务与订单），覆盖游客全链路。",
              en: "Four primary tabs (Home/Explore/Trip/Me) plus key secondary screens cover the full visitor journey.",
            },
          },
          {
            name: "User Journeys",
            why: {
              zh: "行前规划 → 路线推荐/收藏 → 现场导航与设施 → 购票/核销 → 行后故事/评价。",
              en: "Plan → route discovery/saving → on-site navigation & facilities → ticketing → post-trip story/review.",
            },
          },
          {
            name: "Prototype Screens (from local app)",
            why: {
              zh: "从本地 Expo 项目提取关键界面作为展示素材（路线高亮、地图探索、开屏）。",
              en: "Key screens exported from the local Expo app as portfolio artifacts.",
            },
            // (images removed for now; will add IA/Journey diagrams next)
            photo: undefined,
          },
        ],
      },
      finish: {
        processes: [
          {
            name: "UI Guidelines (Tokens)",
            description: {
              zh: "沉淀色彩、字号、圆角、间距等基础 token（见 theme.ts：colors/radius/spacing/typography）。",
              en: "Design tokens for color/typography/radius/spacing (see theme.ts).",
            },
            compare: {
              afterSrc: "/projects/taibai-travel-app/diagrams/ia.svg",
              alt: { zh: "信息架构（IA）", en: "Information architecture (IA)" },
            },
          },
          {
            name: "User Journey",
            description: {
              zh: "以游客全流程（行前—探索—到达—游玩—票务服务—行后）组织核心功能与页面入口。",
              en: "Core journeys organized around the visitor flow from planning to post-trip sharing.",
            },
            compare: {
              afterSrc: "/projects/taibai-travel-app/diagrams/journey.svg",
              alt: { zh: "用户旅程", en: "User journey" },
            },
          },
          {
            name: "Data Results (Mock)",
            description: {
              zh: "提供内部数据分析页（mock）作为“数据结果呈现”示例：客流/票务/停车/应急趋势与洞察。",
              en: "Internal data analysis (mock) demonstrates how results are presented: trends + insights.",
            },
          },
        ],
      },
      final: {
        renders: [],
        notes: {
          zh: "后续可补充：信息架构图、用户旅程图、关键流程原型、可用性验证与指标口径。",
          en: "Next: IA diagram, journey map, flow prototypes, usability validation and metric definitions.",
        },
      },
    },
  },
  {
    slug: "ar-emotion-game",
    order: 5,
    type: "ar-emotion-game",
    title: { zh: "AR 情绪游戏", en: "AR Emotion Game" },
    summary: {
      zh: "在数字产品中应用 CMF：用色彩与材质隐喻建立情绪反馈机制。",
      en: "Applying CMF to digital products: color/material metaphors shaping emotional feedback.",
    },
    sections: {
      overview: { zh: "（待补充项目概述）", en: "(Project overview coming soon)" },
      challengeAndGoal: { zh: "（待补充）", en: "(Coming soon)" },
      color: { palette: [] },
      material: { items: [] },
      finish: { processes: [] },
      final: { renders: [] },
    },
  },
];

export const nav = {
  primary: [
    { key: "projects", href: "/projects", label: { zh: "项目", en: "Projects" } },
    { key: "research", href: "/research", label: { zh: "研究", en: "Research" } },
    { key: "experience", href: "/experience", label: { zh: "个人经历", en: "Experience" } },
    { key: "contact", href: "/contact", label: { zh: "联系我", en: "Contact" } },
  ],
} as const;
