import SignInIndex from "./SignIn/Index";
import CreateAccountIndex from "./CreateAccount/Index";
import PasswordResetIndex from "./PasswordReset/Index";
import { useGlobal } from "./Global/Context/Provider";
import UtilsBar from "./Global/UtilsBar";
import { Container, Page, SiteWrapper } from "./Components/Layout";

function ChooseGlobalView() {
  const { state } = useGlobal();
  switch (state.kind) {
    case "VIEWING_SIGN_IN":
      return <SignInIndex />;

    case "VIEWING_PASSWORD_RESET":
      return <PasswordResetIndex />;

    case "VIEWING_CREATE_ACCOUNT":
      return <CreateAccountIndex />;
  }
}

export default function App() {
  const { state } = useGlobal();

  return (
    <SiteWrapper theme={state.theme.kind}>
      <Container>
        <Page theme={state.theme.kind}>
          <ChooseGlobalView />
        </Page>
        {UtilsBar(state.theme, state.language)}
      </Container>
    </SiteWrapper>
  );
}
