export type Locale = "zh" | "en";

export type ProjectType =
  | "cmf-experiment"
  | "kids-balance-bike"
  | "aroma-device"
  | "miniapp-vi"
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
    title: { zh: "儿童滑步车", en: "Kids Balance Bike" },
    summary: {
      zh: "从用户情绪与安全感出发，构建亲和但不过度幼稚的色彩与材料策略。",
      en: "A CMF strategy balancing approachability and safety without feeling overly childish.",
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
    slug: "miening-miniapp-vi",
    order: 4,
    type: "miniapp-vi",
    title: { zh: "冕宁小程序 VI", en: "Miening Mini Program VI" },
    summary: {
      zh: "建立可扩展的色彩系统与视觉规范，保证不同场景下的一致性与识别度。",
      en: "A scalable color system and visual guideline for consistency across scenarios.",
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
    { key: "projects", href: "/projects", label: { zh: "Projects", en: "Projects" } },
    { key: "research", href: "/research", label: { zh: "Research", en: "Research" } },
    { key: "experiments", href: "/experiments", label: { zh: "Experiments", en: "Experiments" } },
    { key: "contact", href: "/contact", label: { zh: "Contact", en: "Contact" } },
  ],
} as const;
