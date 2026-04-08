import { defaultLanguage } from "@/i18n/ui";

export function translatePath(path: string, lang: string) {
  return lang === defaultLanguage ? "/" : `/${lang}`;
}
