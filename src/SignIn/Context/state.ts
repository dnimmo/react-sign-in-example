import { User } from "../../User/user";

interface EnteringDetails {
  kind: "ENTERING_DETAILS";
  username: string;
  password: string;
  error: string;
}

interface AwaitingResponse {
  kind: "AWAITING_RESPONSE";
  // store the user's input in case we can't successfully log them in
  username: string;
  password: string;
}

interface SignedIn {
  kind: "SIGNED_IN";
  user: User;
}

export type State = EnteringDetails | AwaitingResponse | SignedIn;

export const initialState: State = {
  kind: "ENTERING_DETAILS",
  username: "",
  password: "",
  error: ""
};

export default State;
