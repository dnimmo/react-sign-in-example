import { FC, createContext, useReducer, useContext } from "react";
import State, { initialState } from "./state";
import update, { AttemptCreateUserProps } from "./update";

type CreateAccountContextType = {
  state: State;
  enterEmailAddress: (emailAddress: string) => void;
  enterTelephoneNumber: (telephoneNumber: string) => void;
  enterUsername: (username: string) => void;
  enterPassword: (password: string) => void;
  attemptCreateUser: (details: AttemptCreateUserProps) => void;
};

const warnNoProviderSet = (x: any) => console.warn("No provider set");

const CreateAccountContext = createContext<CreateAccountContextType>({
  state: initialState,
  enterEmailAddress: warnNoProviderSet,
  enterTelephoneNumber: warnNoProviderSet,
  enterUsername: warnNoProviderSet,
  enterPassword: warnNoProviderSet,
  attemptCreateUser: warnNoProviderSet
});

export const useCreateAccount = () => useContext(CreateAccountContext);

const Provider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(update, initialState);

  const enterEmailAddress = (emailAddress: string) =>
    dispatch({
      kind: "ENTER_EMAIL_ADDRESS",
      emailAddress
    });

  const enterTelephoneNumber = (telephoneNumber: string) =>
    dispatch({
      kind: "ENTER_TELEPHONE_NUMBER",
      telephoneNumber
    });

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

  const attemptCreateUser = (details: AttemptCreateUserProps) => {
    dispatch({
      kind: "ATTEMPT_CREATE_USER",
      details
    });

    // As this is only an example, I'm not checking to make sure that there's no existing user with this email/password
    // There's an example of checking for errors in /SignIn/Context/Provider's "getUser" function

    dispatch({
      kind: "USER_CREATED",
      user: {
        ...details,
        userId: "user0002"
      }
    });
  };

  const value = {
    state,
    enterEmailAddress,
    enterTelephoneNumber,
    enterUsername,
    enterPassword,
    attemptCreateUser
  };

  return (
    <CreateAccountContext.Provider value={value}>
      {children}
    </CreateAccountContext.Provider>
  );
};

export default Provider;
