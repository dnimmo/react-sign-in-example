import { render } from "react-dom";
import GlobalProvider from "./Global/Context/Provider";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  rootElement
);
