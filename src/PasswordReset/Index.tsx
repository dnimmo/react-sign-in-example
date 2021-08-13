import ResettingPasswordView from "./View/ResettingPassword";
import PasswordResetSentView from "./View/PasswordResetSent";
import PasswordResetProvider, { usePasswordReset } from "./Context/Provider";

function ChoosePasswordResetView() {
  const { state } = usePasswordReset();

  switch (state.kind) {
    case "RESETTING_PASSWORD":
      return ResettingPasswordView({
        username: state.username,
        error: state.error
      });

    case "PASSWORD_RESET_SENT":
      return PasswordResetSentView({
        resetMethod: state.resetMethod
      });
  }
}

const PasswordResetPage = () => (
  <PasswordResetProvider>
    <ChoosePasswordResetView />
  </PasswordResetProvider>
);

export default PasswordResetPage;
