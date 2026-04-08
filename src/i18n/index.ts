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
        complete: "¿Quién eres?",
      },
      {
        min: "Experiencia",
        complete: "Háblame de tu experiencia laboral",
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
        complete: "¿Qué idiomas hablas?",
      },
    ];
  return [
    {
      min: "Who are you?",
      complete: "Who are you?",
    },
    {
      min: "Experience",
      complete: "where did you work?",
    },
    {
      min: "Projects",
      complete: "What are your projects?",
    },
    {
      min: "Education",
      complete: "what is your education?",
    },
    {
      min: "Skills",
      complete: "What skills do you have?",
    },
    {
      min: "Languages",
      complete: "Tell me about languages you speak",
    },
  ];
};
