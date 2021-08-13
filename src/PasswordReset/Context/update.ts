import State, { ResetMethod } from "./state";

interface EnterUsername {
  kind: "ENTER_USERNAME";
  username: string;
}

interface RequestPasswordReset {
  kind: "REQUEST_PASSWORD_RESET";
  resetMethod: ResetMethod | null;
}

type Action = EnterUsername | RequestPasswordReset;

const update = (state: State, action: Action): State => {
  switch (state.kind) {
    case "RESETTING_PASSWORD":
      switch (action.kind) {
        case "ENTER_USERNAME":
          return {
            ...state,
            username: action.username
          };

        case "REQUEST_PASSWORD_RESET":
          return action.resetMethod
            ? {
                kind: "PASSWORD_RESET_SENT",
                resetMethod: action.resetMethod
              }
            : {
                ...state,
                error: "Please enter a valid email address or telephone number"
              };

        default:
          return state;
      }

    default:
      return state;
  }
};

export default update;
