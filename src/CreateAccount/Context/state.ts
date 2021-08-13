import { User } from "../../User/user";

interface EnteringDetails {
  kind: "ENTERING_DETAILS";
  emailAddress: string;
  telephoneNumber: string;
  username: string;
  password: string;
}

interface AwaitingResponse {
  kind: "AWAITING_RESPONSE";
  emailAddress: string;
  telephoneNumber: string;
  username: string;
  password: string;
}

interface Success {
  kind: "SUCCESS";
  user: User;
}

type State = EnteringDetails | AwaitingResponse | Success;

export const initialState: State = {
  kind: "ENTERING_DETAILS",
  emailAddress: "",
  telephoneNumber: "",
  username: "",
  password: ""
};

export default State;
