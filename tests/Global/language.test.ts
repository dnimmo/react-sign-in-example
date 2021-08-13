import Language, { getLanguage } from "../../src/Global/language";

const testLanguage: Language = {
  kind: "ENGLISH",
  value: "English"
};

describe("Language", () => {
  describe("When a language is found", () => {
    test("Correctly identifies requested language", () =>
      expect(getLanguage("ENGLISH", testLanguage)).toEqual(testLanguage));
  });

  describe("When no matching language is found", () =>
    test("Returns the current language", () =>
      expect(getLanguage("UNKNOWN", testLanguage)).toEqual(testLanguage)));
});
