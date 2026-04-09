"use client";

import { useI18n } from "@/components/I18nProvider";

export default function LanguageToggle() {
  const { locale, setLocale } = useI18n();
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-white/70 px-1 py-1 text-xs backdrop-blur">
      <button
        className={`rounded-full px-2 py-1 ${locale === "zh" ? "bg-black text-white" : "text-black/70 hover:text-black"}`}
        onClick={() => setLocale("zh")}
        aria-label="Switch language to Chinese"
      >
        中文
      </button>
      <button
        className={`rounded-full px-2 py-1 ${locale === "en" ? "bg-black text-white" : "text-black/70 hover:text-black"}`}
        onClick={() => setLocale("en")}
        aria-label="Switch language to English"
      >
        EN
      </button>
    </div>
  );
}
