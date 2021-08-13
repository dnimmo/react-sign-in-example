import { StandardText, Header } from "../../Components/General";
import { User } from "../../User/user";
import { useGlobal } from "../../Global/Context/Provider";

const SignedInView = (user: User) => {
  const { state: globalState } = useGlobal();

  return (
    <div>
      <Header>Welcome back</Header>
      <StandardText theme={globalState.theme.kind}>
        Signed in as {user.username}
      </StandardText>
    </div>
  );
};

export default SignedInView;
