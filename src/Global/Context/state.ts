import Language, { initialLanguage } from "../language";
import Theme, { initialTheme } from "../theme";

interface ViewingSignIn {
  kind: "VIEWING_SIGN_IN";
  theme: Theme;
  language: Language;
}

interface ViewingPasswordReset {
  kind: "VIEWING_PASSWORD_RESET";
  theme: Theme;
  language: Language;
}

interface ViewingCreateAccount {
  kind: "VIEWING_CREATE_ACCOUNT";
  theme: Theme;
  language: Language;
}

type State = ViewingSignIn | ViewingPasswordReset | ViewingCreateAccount;

export const initialState: State = {
  kind: "VIEWING_SIGN_IN",
  theme: initialTheme,
  language: initialLanguage
};

export default State;
