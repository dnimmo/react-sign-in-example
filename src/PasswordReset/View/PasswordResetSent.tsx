import { StandardText, Header } from "../../Components/General";
import { PrimaryButton } from "../../Components/Input";
import { ResetMethod } from "../Context/state";
import { useGlobal } from "../../Global/Context/Provider";

type PasswordResetSentProps = {
  resetMethod: ResetMethod;
};

const headerMessage = (resetMethod: ResetMethod): string => {
  switch (resetMethod.kind) {
    case "PHONE":
      return "messages";

    case "EMAIL":
      return "inbox";
  }
};

const bodyMessage = (resetMethod: ResetMethod): string => {
  switch (resetMethod.kind) {
    case "PHONE":
      return "phone number";

    case "EMAIL":
      return "email address";
  }
};

const PasswordResetSentView = ({ resetMethod }: PasswordResetSentProps) => {
  const { state: globalState, viewSignIn } = useGlobal();

  return (
    <div>
      <Header>Check your {headerMessage(resetMethod)}</Header>
      <StandardText theme={globalState.theme.kind}>
        Your password reset link has been sent to your{" "}
        {bodyMessage(resetMethod)}.
      </StandardText>
      <PrimaryButton onClick={viewSignIn}>Home</PrimaryButton>
    </div>
  );
};

export default PasswordResetSentView;
