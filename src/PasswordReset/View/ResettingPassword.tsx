import { ChangeEvent, FormEvent } from "react";
import { Field, PrimaryButton, SecondaryButton } from "../../Components/Input";
import { OppositeEnds } from "../../Components/Layout";
import { StandardText, Header, Error } from "../../Components/General";
import { ResetMethod } from "../Context/state";
import {
  isValidEmailAddress,
  isValidPhoneNumber
} from "../../Global/validation";
import { usePasswordReset } from "../Context/Provider";
import { useGlobal } from "../../Global/Context/Provider";

type ResettingPasswordProps = {
  username: string;
  error: string;
};

const passwordResetVerb = (username: string) => {
  if (isValidEmailAddress(username)) {
    return "Email";
  }

  return isValidPhoneNumber(username) ? "Text" : "Send";
};

const ResettingPassword = ({ username, error }: ResettingPasswordProps) => {
  const { enterUsername, requestPasswordReset } = usePasswordReset();
  const { state: globalState, viewSignIn } = useGlobal();

  return (
    <div>
      <Header>Reset your password</Header>
      <StandardText theme={globalState.theme.kind}>
        Forgotten your password? That's okay, we can send you link to reset it,
        just let us know where to send it.
      </StandardText>
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          const resetMethod: ResetMethod | null = isValidEmailAddress(username)
            ? { kind: "EMAIL" }
            : isValidPhoneNumber(username)
            ? { kind: "PHONE" }
            : null;

          requestPasswordReset(resetMethod);
        }}
      >
        <Field
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            enterUsername(e.target.value)
          }
          type="text"
          value={username}
          placeholder="Email or Phone *"
          autoComplete="username"
          required
          aria-label="Email or Phone"
        />
        <OppositeEnds>
          <SecondaryButton
            theme={globalState.theme.kind}
            onClick={viewSignIn}
            type="button"
          >
            &lt; Take me back
          </SecondaryButton>
          <PrimaryButton type="submit">
            {passwordResetVerb(username)} me a password reset link
          </PrimaryButton>
        </OppositeEnds>
      </form>
      {error && <Error>{error}</Error>}
    </div>
  );
};

export default ResettingPassword;
