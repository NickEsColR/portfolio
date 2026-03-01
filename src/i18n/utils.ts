/**
 * i18n helper utilities.
 * Provides locale detection, translation lookup, path building, and I18nString resolution.
 */
import { ui, defaultLang, type Locale } from "@/i18n/ui";
import type { I18nString } from "@/interfaces/i18n.interface";

export type { Locale };

/* ── Locale detection ──────────────────────────────────────────────── */

/**
 * Extract the locale from the current URL pathname.
 * Falls back to `defaultLang` when the first segment isn't a known locale.
 */
export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Locale;
  return defaultLang;
}

/* ── UI string translations ────────────────────────────────────────── */

/**
 * Return a `t()` function scoped to the given locale.
 * Falls back to the default language when a key is missing in the target locale.
 */
export function useTranslations(lang: Locale) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    return (ui[lang] as any)[key] ?? (ui[defaultLang] as any)[key] ?? key;
  };
}

/* ── Locale-aware paths ────────────────────────────────────────────── */

/**
 * Build a path that includes (or omits) the locale prefix.
 * English (default) → `/path`, Spanish → `/es/path`.
 */
export function useTranslatedPath(lang: Locale) {
  return function translatePath(path: string, l: Locale = lang): string {
    return l === defaultLang ? path : `/${l}${path}`;
  };
}

/* ── I18nString field resolution ───────────────────────────────────── */

/**
 * Pick the correct language value from an `I18nString` object.
 * Falls back to `en` when the requested locale key is empty/missing.
 */
export function resolveI18n(field: I18nString, locale: Locale): string {
  return field[locale] || field[defaultLang] || "";
}

/**
 * Resolve an array of `I18nString` items into plain strings for the given locale.
 */
export function resolveI18nArray(fields: I18nString[], locale: Locale): string[] {
  return fields.map((f) => resolveI18n(f, locale));
}

/**
 * Get the current locale from `Astro.currentLocale`, cast to `Locale`.
 * Returns `defaultLang` when undefined.
 */
export function getLocale(currentLocale: string | undefined): Locale {
  return (currentLocale as Locale) ?? defaultLang;
}
