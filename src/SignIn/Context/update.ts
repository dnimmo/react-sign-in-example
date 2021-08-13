import { User } from "../../User/user";
import State from "./state";

interface EnterUsername {
  kind: "ENTER_USERNAME";
  username: string;
}

interface EnterPassword {
  kind: "ENTER_PASSWORD";
  password: string;
}

interface AttemptSignIn {
  kind: "ATTEMPT_SIGN_IN";
  ready: boolean;
}

interface SignInSucceeded {
  kind: "SIGN_IN_SUCCEEDED";
  user: User;
}

interface SignInFailed {
  kind: "SIGN_IN_FAILED";
  error: string;
}

type Action =
  | EnterUsername
  | EnterPassword
  | AttemptSignIn
  | SignInSucceeded
  | SignInFailed;

function update(state: State, action: Action): State {
  switch (state.kind) {
    case "ENTERING_DETAILS":
      switch (action.kind) {
        case "ENTER_USERNAME":
          return {
            ...state,
            username: action.username
          };

        case "ENTER_PASSWORD":
          return {
            ...state,
            password: action.password
          };

        case "ATTEMPT_SIGN_IN":
          return action.ready
            ? {
                kind: "AWAITING_RESPONSE",
                username: state.username,
                password: state.password
              }
            : {
                ...state,
                // this ought to be covered by the browser, really, but just in case
                error: "Please complete all required fields"
              };

        default:
          return state;
      }

    case "AWAITING_RESPONSE":
      switch (action.kind) {
        case "SIGN_IN_SUCCEEDED":
          return {
            kind: "SIGNED_IN",
            user: action.user
          };

        case "SIGN_IN_FAILED":
          return {
            ...state,
            kind: "ENTERING_DETAILS",
            error: action.error
          };

        default:
          return state;
      }

    default:
      return state;
  }
}

export default update;
