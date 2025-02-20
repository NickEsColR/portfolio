import spanishCV from "./cv_es.json";
import englishCV from "./cv_en.json";

export const getI18NCV = ({
  currentLocale,
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === "es") return spanishCV;
  return englishCV;
};
