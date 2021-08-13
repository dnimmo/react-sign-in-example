import State from "./state";
import { User } from "../../User/user";

interface EnterEmailAddress {
  kind: "ENTER_EMAIL_ADDRESS";
  emailAddress: string;
}

interface EnterTelephoneNumber {
  kind: "ENTER_TELEPHONE_NUMBER";
  telephoneNumber: string;
}

interface EnterUsername {
  kind: "ENTER_USERNAME";
  username: string;
}

interface EnterPassword {
  kind: "ENTER_PASSWORD";
  password: string;
}

export interface AttemptCreateUserProps {
  username: string;
  telephoneNumber: string;
  emailAddress: string;
  password: string;
}

interface AttemptCreateUser {
  kind: "ATTEMPT_CREATE_USER";
  details: AttemptCreateUserProps;
}

interface UserCreated {
  kind: "USER_CREATED";
  user: User;
}

type Action =
  | EnterEmailAddress
  | EnterTelephoneNumber
  | EnterUsername
  | EnterPassword
  | AttemptCreateUser
  | UserCreated;

function update(state: State, action: Action): State {
  switch (state.kind) {
    case "ENTERING_DETAILS":
      switch (action.kind) {
        case "ENTER_EMAIL_ADDRESS":
          return {
            ...state,
            emailAddress: action.emailAddress
          };

        case "ENTER_TELEPHONE_NUMBER":
          return {
            ...state,
            telephoneNumber: action.telephoneNumber
          };

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

        case "ATTEMPT_CREATE_USER":
          return {
            kind: "AWAITING_RESPONSE",
            emailAddress: state.emailAddress,
            telephoneNumber: state.telephoneNumber,
            username: state.username,
            password: state.password
          };

        default:
          return state;
      }

    case "AWAITING_RESPONSE":
      switch (action.kind) {
        case "USER_CREATED":
          return {
            kind: "SUCCESS",
            user: action.user
          };

        default:
          return state;
      }

    default:
      return state;
  }
}

export default update;
