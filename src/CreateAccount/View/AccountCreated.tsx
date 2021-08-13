import { StandardText, Header } from "../../Components/General";
import { User } from "../../User/user";
import { useGlobal } from "../../Global/Context/Provider";

const AccountCreatedView = (user: User) => {
  const { state: globalState } = useGlobal();

  return (
    <div>
      <Header>Welcome aboard, {user.username}!</Header>
      <StandardText theme={globalState.theme.kind}>
        It's great to have you here.
      </StandardText>
    </div>
  );
};

export default AccountCreatedView;
