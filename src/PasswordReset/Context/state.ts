interface ResettingPassword {
  kind: "RESETTING_PASSWORD";
  username: string;
  error: string;
}

interface Phone {
  kind: "PHONE";
}

interface Email {
  kind: "EMAIL";
}

export type ResetMethod = Phone | Email;

interface PasswordResetSent {
  kind: "PASSWORD_RESET_SENT";
  resetMethod: ResetMethod;
}

type State = ResettingPassword | PasswordResetSent;

export const initialState: State = {
  kind: "RESETTING_PASSWORD",
  username: "",
  error: ""
};

export default State;
