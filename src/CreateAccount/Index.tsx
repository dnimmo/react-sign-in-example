import CreateAccountProvider, { useCreateAccount } from "./Context/Provider";
import EnteringDetailsView from "./View/EnteringDetails";
import AwaitingResponseView from "./View/AwaitingResponse";
import AccountCreatedView from "./View/AccountCreated";

function ChooseCreateAccountView() {
  const { state } = useCreateAccount();

  switch (state.kind) {
    case "ENTERING_DETAILS":
      return EnteringDetailsView({
        emailAddress: state.emailAddress,
        telephoneNumber: state.telephoneNumber,
        username: state.username,
        password: state.password
      });

    case "AWAITING_RESPONSE":
      return AwaitingResponseView();

    case "SUCCESS":
      return AccountCreatedView(state.user);
  }
}

const CreateAccountView = () => (
  <CreateAccountProvider>
    <ChooseCreateAccountView />
  </CreateAccountProvider>
);

export default CreateAccountView;
