import { ChangeEvent, FormEvent } from "react";
import { Field, PrimaryButton, SecondaryButton } from "../../Components/Input";
import { OppositeEnds } from "../../Components/Layout";
import { Header } from "../../Components/General";
import { useCreateAccount } from "../Context/Provider";
import { useGlobal } from "../../Global/Context/Provider";

type EnteringDetailsProps = {
  username: string;
  password: string;
  emailAddress: string;
  telephoneNumber: string;
};

const EnteringDetailsView = ({
  username,
  password,
  emailAddress,
  telephoneNumber
}: EnteringDetailsProps) => {
  const {
    enterUsername,
    enterPassword,
    enterEmailAddress,
    enterTelephoneNumber,
    attemptCreateUser
  } = useCreateAccount();

  const { state: globalState, viewSignIn } = useGlobal();

  return (
    <div>
      <Header>Create Account</Header>
      <form
        onSubmit={(e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();

          attemptCreateUser({
            username,
            emailAddress,
            telephoneNumber,
            password
          });
        }}
      >
        <Field
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            enterEmailAddress(e.target.value)
          }
          type="email"
          value={emailAddress}
          placeholder="Email address *"
          required
          aria-label="Email address"
        />

        <Field
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            enterTelephoneNumber(e.target.value)
          }
          type="tel"
          value={telephoneNumber}
          placeholder="Telephone number *"
          pattern={"[0-9]{11}"}
          required
          aria-label="Telephone number"
        />

        <Field
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            enterUsername(e.target.value)
          }
          type="text"
          value={username}
          placeholder="Username *"
          autoComplete="username"
          required
          aria-label="Username"
        />

        <Field
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            enterPassword(e.target.value)
          }
          type="password"
          autoComplete="new-password"
          value={password}
          placeholder="Password *"
          required
          aria-label="Password"
        />

        <OppositeEnds>
          <SecondaryButton
            theme={globalState.theme.kind}
            onClick={viewSignIn}
            type="button"
          >
            &lt; Take me back
          </SecondaryButton>
          <PrimaryButton type="submit">Create account</PrimaryButton>
        </OppositeEnds>
      </form>
    </div>
  );
};

export default EnteringDetailsView;
