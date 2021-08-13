import { Header, StandardText } from "../../Components/General";
import { useGlobal } from "../../Global/Context/Provider";

const AwaitingResponseView = () => {
  const { state: globalState } = useGlobal();
  return (
    <div>
      <Header>Checking details</Header>
      <StandardText theme={globalState.theme.kind}>Please wait...</StandardText>
    </div>
  );
};

export default AwaitingResponseView;
