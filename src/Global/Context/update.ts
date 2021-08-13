import State from "./state";
import Language from "../language";
import { lightTheme, darkTheme } from "../theme";

interface ChangeLanguage {
  kind: "CHANGE_LANGUAGE";
  language: Language;
}

interface ChangeTheme {
  kind: "CHANGE_THEME";
}

interface ViewSignIn {
  kind: "VIEW_SIGN_IN";
}

interface ViewPasswordReset {
  kind: "VIEW_PASSWORD_RESET";
}

interface ViewCreateAccount {
  kind: "VIEW_CREATE_ACCOUNT";
}

type Action =
  | ChangeLanguage
  | ChangeTheme
  | ViewSignIn
  | ViewPasswordReset
  | ViewCreateAccount;

function update(state: State, action: Action): State {
  switch (action.kind) {
    case "VIEW_PASSWORD_RESET":
      return { ...state, kind: "VIEWING_PASSWORD_RESET" };

    case "VIEW_SIGN_IN":
      return { ...state, kind: "VIEWING_SIGN_IN" };

    case "VIEW_CREATE_ACCOUNT":
      return { ...state, kind: "VIEWING_CREATE_ACCOUNT" };

    case "CHANGE_THEME":
      return {
        ...state,
        theme: state.theme === lightTheme ? darkTheme : lightTheme
      };

    case "CHANGE_LANGUAGE":
      return {
        ...state,
        language: action.language
      };
  }
  return state;
}

export default update;
