import update from "../../../src/Global/Context/update";
import Language, { languages } from "../../../src/Global/language";
import { initialState } from "../../../src/Global/Context/state";
import Theme, { darkTheme } from "../../../src/Global/theme";

describe("Global update", () => {
  test("Can change language", () => {
    const newLanguage: Language = languages[1];

    const expected = {
      ...initialState,
      language: newLanguage
    };

    const actual = update(initialState, {
      kind: "CHANGE_LANGUAGE",
      language: newLanguage
    });

    expect(actual).toEqual(expected);
  });

  test("Can toggle theme", () => {
    const newTheme: Theme = darkTheme;

    const expected = {
      ...initialState,
      theme: newTheme
    };

    const actual = update(initialState, { kind: "CHANGE_THEME" });

    expect(actual).toEqual(expected);
  });

  test("Can view password reset", () => {
    const expected = {
      ...initialState,
      kind: "VIEWING_PASSWORD_RESET"
    };

    const actual = update(initialState, { kind: "VIEW_PASSWORD_RESET" });

    expect(actual).toEqual(expected);
  });

  test("Can view sign in", () => {
    const expected = {
      ...initialState,
      kind: "VIEWING_SIGN_IN"
    };

    const actual = update(initialState, { kind: "VIEW_SIGN_IN" });

    expect(actual).toEqual(expected);
  });

  test("Can view create account", () => {
    const expected = {
      ...initialState,
      kind: "VIEWING_CREATE_ACCOUNT"
    };

    const actual = update(initialState, { kind: "VIEW_CREATE_ACCOUNT" });

    expect(actual).toEqual(expected);
  });
});
