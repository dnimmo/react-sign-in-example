import SignInProvider, { useSignIn } from "./Context/Provider";
import EnteringDetailsView from "./View/EnteringDetails";
import AwaitingResponseView from "./View/AwaitingResponse";
import SignedInView from "./View/SignedIn";

function ChooseSignInView() {
  const { state } = useSignIn();

  switch (state.kind) {
    case "ENTERING_DETAILS":
      return EnteringDetailsView({
        username: state.username,
        password: state.password,
        error: state.error
      });

    case "AWAITING_RESPONSE":
      return AwaitingResponseView();

    case "SIGNED_IN":
      return SignedInView(state.user);
  }
}

const SignInPage = () => (
  <SignInProvider>
    <ChooseSignInView />
  </SignInProvider>
);

export default SignInPage;
