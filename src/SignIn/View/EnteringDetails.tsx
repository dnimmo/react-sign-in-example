import { ChangeEvent, FormEvent } from "react";
import { Field, PrimaryButton, SecondaryButton } from "../../Components/Input";
import { OppositeEnds, ExtraTopSpacing } from "../../Components/Layout";
import { Error, Header } from "../../Components/General";
import { useSignIn } from "../Context/Provider";
import { useGlobal } from "../../Global/Context/Provider";
import Language from "../../Global/language";

const titleText = (language: Language): string => {
  switch (language.kind) {
    case "ENGLISH":
      return "Sign in";

    case "FRENCH":
      return "Signer le registre";

    case "SPANISH":
      return "Firmar el registro";
  }
};

type EnteringDetailsProps = {
  username: string;
  password: string;
  error: string;
};

const EnteringDetailsView = ({
  username,
  password,
  error
}: EnteringDetailsProps) => {
  const { enterUsername, enterPassword, attemptSignIn } = useSignIn();

  const {
    state: globalState,
    viewPasswordReset,
    viewCreateAccount
  } = useGlobal();

  return (
    <div>
      <Header>{titleText(globalState.language)}</Header>
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          attemptSignIn(username !== "" && password !== "");
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

        <Field
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            enterPassword(e.target.value)
          }
          type="password"
          autoComplete="current-password"
          value={password}
          placeholder="Password *"
          required
          aria-label="Password"
        />

        <OppositeEnds>
          <SecondaryButton
            theme={globalState.theme.kind}
            type="button"
            onClick={viewPasswordReset}
          >
            Forgot password?
          </SecondaryButton>
          <PrimaryButton type="submit">Sign in</PrimaryButton>
        </OppositeEnds>
      </form>
      {error && <Error>{error}</Error>}

      <ExtraTopSpacing>
        <SecondaryButton
          theme={globalState.theme.kind}
          type="button"
          onClick={viewCreateAccount}
        >
          Create an account
        </SecondaryButton>
      </ExtraTopSpacing>
    </div>
  );
};

export default EnteringDetailsView;
