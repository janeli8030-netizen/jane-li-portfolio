"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import type { Locale } from "@/lib/content";

type I18nContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: <T extends Record<Locale, string>>(obj: T) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children, initialLocale = "zh" }: { children: React.ReactNode; initialLocale?: Locale }) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  const value = useMemo<I18nContextValue>(() => {
    return {
      locale,
      setLocale,
      t: (obj) => obj[locale] ?? obj.zh,
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
