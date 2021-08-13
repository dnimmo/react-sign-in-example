import { FC, createContext, useReducer, useContext } from "react";
import State, { initialState } from "./state";
import { getUser } from "../../User/user";
import update from "./update";

type SignInContextType = {
  state: State;
  enterUsername: (username: string) => void;
  enterPassword: (password: string) => void;
  attemptSignIn: (ready: boolean) => void;
};

const warnNoProviderSet = (x: any) => console.warn("No provider set");

const SignInContext = createContext<SignInContextType>({
  state: initialState,
  enterUsername: warnNoProviderSet,
  enterPassword: warnNoProviderSet,
  attemptSignIn: warnNoProviderSet
});

export const useSignIn = () => useContext(SignInContext);

const Provider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(update, initialState);

  const enterUsername = (username: string) =>
    dispatch({
      kind: "ENTER_USERNAME",
      username
    });

  const enterPassword = (password: string) =>
    dispatch({
      kind: "ENTER_PASSWORD",
      password
    });

  const attemptSignIn = (ready: boolean) => {
    if (state.kind !== "ENTERING_DETAILS") return;

    dispatch({
      kind: "ATTEMPT_SIGN_IN",
      ready
    });

    if (!ready) return;

    const userResponse = getUser({
      emailOrTelephone: state.username,
      password: state.password
    });

    setTimeout(function () {
      switch (userResponse.kind) {
        case "USER_FOUND":
          dispatch({
            kind: "SIGN_IN_SUCCEEDED",
            user: userResponse.user
          });
          break;

        case "NO_USER_FOUND":
          dispatch({
            kind: "SIGN_IN_FAILED",
            error: userResponse.error
          });
          break;
      }
    }, 3000);
  };

  const value = {
    state,
    enterUsername,
    enterPassword,
    attemptSignIn
  };

  return (
    <SignInContext.Provider value={value}>{children}</SignInContext.Provider>
  );
};

export default Provider;
