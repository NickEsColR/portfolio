/**
 * Static UI translation dictionary.
 * Keys are dot-separated identifiers; values are the translated strings.
 */

export const languages = {
  en: "English",
  es: "Español",
} as const;

export const defaultLang = "en" as const;

export type Locale = keyof typeof languages;

export const ui = {
  en: {
    /* ── Meta ──────────────────────────────────── */
    "meta.title": "Nicolas Colmenares — AI Engineer",
    "meta.description": "Nicolas Colmenares — AI Engineer Portfolio",

    /* ── Section headings ─────────────────────── */
    "section.aboutMe": "About me",
    "section.experience": "Experience",
    "section.projects": "Projects",
    "section.education": "Education",
    "section.certificates": "Certificates",
    "section.skills": "Skills",

    /* ── Labels ────────────────────────────────── */
    "label.summary": "Summary:",
    "label.responsibilities": "Responsibilities:",

    /* ── Actions / UI controls ────────────────── */
    "action.showMore": "Show more",
    "action.showLess": "Show less",
    "action.downloadResume": "Download Resume",
    "action.changeLanguage": "Change language",
    "action.copyEmail": "Copy email to clipboard",
    "action.copied": "Copied!",
    "action.toggleDarkMode": "Toggle dark mode",

    /* ── Dates ─────────────────────────────────── */
    "date.present": "Currently",

    /* ── Footer ────────────────────────────────── */
    "footer.rights": "Portfolio. All rights reserved.",
  },
  es: {
    /* ── Meta ──────────────────────────────────── */
    "meta.title": "Nicolas Colmenares — Ingeniero de IA",
    "meta.description": "Nicolas Colmenares — Portafolio de Ingeniero de IA",

    /* ── Section headings ─────────────────────── */
    "section.aboutMe": "Sobre mí",
    "section.experience": "Experiencia",
    "section.projects": "Proyectos",
    "section.education": "Educación",
    "section.certificates": "Certificados",
    "section.skills": "Habilidades",

    /* ── Labels ────────────────────────────────── */
    "label.summary": "Resumen:",
    "label.responsibilities": "Responsabilidades:",

    /* ── Actions / UI controls ────────────────── */
    "action.showMore": "Ver más",
    "action.showLess": "Ver menos",
    "action.downloadResume": "Descargar CV",
    "action.changeLanguage": "Cambiar idioma",
    "action.copyEmail": "Copiar correo al portapapeles",
    "action.copied": "¡Copiado!",
    "action.toggleDarkMode": "Cambiar modo oscuro",

    /* ── Dates ─────────────────────────────────── */
    "date.present": "Actualmente",

    /* ── Footer ────────────────────────────────── */
    "footer.rights": "Portafolio. Todos los derechos reservados.",
  },
} as const;
