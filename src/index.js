import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { Context } from "./components/Context/Context";
import { SpeechProvider } from "@speechly/react-client";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <SpeechProvider appId="7d9a2a52-e2ea-48ea-b85d-3e7c78e816f8" language="en-US">
    <Context>
      <App />
    </Context>
  </SpeechProvider>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
reportWebVitals();
