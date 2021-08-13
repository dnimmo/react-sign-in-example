interface English {
  kind: "ENGLISH";
  value: "English";
}

interface French {
  kind: "FRENCH";
  value: "Français";
}

interface Spanish {
  kind: "SPANISH";
  value: "Español";
}

type Language = English | French | Spanish;

const english: Language = {
  kind: "ENGLISH",
  value: "English"
};

const french: Language = {
  kind: "FRENCH",
  value: "Français"
};

const spanish: Language = {
  kind: "SPANISH",
  value: "Español"
};

export const languages: Language[] = [english, french, spanish];

export const initialLanguage: Language = english;

export function getLanguage(
  requestedKind: string,
  currentLanguage: Language
): Language {
  const languageRequested = languages.find(
    (language) => language.kind === requestedKind
  );

  // if we can't find the requested language, keep the current language
  return languageRequested || currentLanguage;
}

export default Language;
