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

export const getI18ChatQuestions = ({
  currentLocale,
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === "es")
    return [
      {
        min: "¿Quién eres?",
        complete: "¿Quien eres?",
      },
      {
        min: "Experiencia",
        complete: "Háblame de tu experiencia",
      },
      {
        min: "Proyectos",
        complete: "Háblame de tus proyectos",
      },
      {
        min: "Educación",
        complete: "Háblame de tu educación",
      },
      {
        min: "Habilidades",
        complete: "Háblame de tus habilidades",
      },
      {
        min: "Idiomas",
        complete: "Háblame que idiomas hablas",
      },
    ];
  return [
    {
      min: "Who are you?",
      complete: "Who are you?",
    },
    {
      min: "Experience",
      complete: "Tell me about your experience",
    },
    {
      min: "Projects",
      complete: "Tell me about your projects",
    },
    {
      min: "Education",
      complete: "Tell me about your education",
    },
    {
      min: "Skills",
      complete: "Tell me about your skills",
    },
    {
      min: "Languages",
      complete: "Tell me about languages you speak",
    },
  ];
};
