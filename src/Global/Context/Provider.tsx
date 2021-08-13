import { FC, createContext, useReducer, useContext } from "react";
import State, { initialState } from "./state";
import Language from "../language";
import update from "./update";

type GlobalContextType = {
  state: State;
  changeLanguage: (language: Language) => void;
  changeTheme: () => void;
  viewSignIn: () => void;
  viewPasswordReset: () => void;
  viewCreateAccount: () => void;
};

const warnNoProviderSet = (x: any) => console.warn("No provider set");

const GlobalContext = createContext<GlobalContextType>({
  state: initialState,
  changeLanguage: warnNoProviderSet,
  changeTheme: () => warnNoProviderSet(""),
  viewSignIn: () => warnNoProviderSet(""),
  viewPasswordReset: () => warnNoProviderSet(""),
  viewCreateAccount: () => warnNoProviderSet("")
});

export const useGlobal = () => useContext(GlobalContext);

const Provider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(update, initialState);

  const changeLanguage = (language: Language) =>
    dispatch({
      kind: "CHANGE_LANGUAGE",
      language
    });

  const changeTheme = () =>
    dispatch({
      kind: "CHANGE_THEME"
    });

  const viewSignIn = () =>
    dispatch({
      kind: "VIEW_SIGN_IN"
    });

  const viewPasswordReset = () =>
    dispatch({
      kind: "VIEW_PASSWORD_RESET"
    });

  const viewCreateAccount = () =>
    dispatch({
      kind: "VIEW_CREATE_ACCOUNT"
    });

  const value = {
    state,
    changeLanguage,
    changeTheme,
    viewSignIn,
    viewPasswordReset,
    viewCreateAccount
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export default Provider;
