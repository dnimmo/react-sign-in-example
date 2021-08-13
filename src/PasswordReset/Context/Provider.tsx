import { FC, createContext, useReducer, useContext } from "react";
import State, { initialState, ResetMethod } from "./state";
import update from "./update";

type PasswordResetContextType = {
  state: State;
  enterUsername: (username: string) => void;
  requestPasswordReset: (resetMethod: ResetMethod | null) => void;
};

const warnNoProviderSet = (x: any) => console.warn("No provider set");

const PasswordResetContext = createContext<PasswordResetContextType>({
  state: initialState,
  enterUsername: warnNoProviderSet,
  requestPasswordReset: warnNoProviderSet
});

export const usePasswordReset = () => useContext(PasswordResetContext);

const Provider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(update, initialState);

  const enterUsername = (username: string) =>
    dispatch({
      kind: "ENTER_USERNAME",
      username
    });

  const requestPasswordReset = (resetMethod: ResetMethod | null) =>
    dispatch({
      kind: "REQUEST_PASSWORD_RESET",
      resetMethod
    });

  const value = {
    state,
    enterUsername,
    requestPasswordReset
  };

  return (
    <PasswordResetContext.Provider value={value}>
      {children}
    </PasswordResetContext.Provider>
  );
};

export default Provider;
