import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";

import "semantic-ui-less/semantic.less";
import "./styles/index.css";
import UserProvider from "./context/user/UserProvider";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

Sentry.init({
  dsn: "https://0ae8c82f90084151bed9a761f3baa7df@o450602.ingest.sentry.io/5812505",
});

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
