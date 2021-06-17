import React from "react";
import { Router } from "react-router-dom";
import { history } from "./utils/customHistory";
import NotificationProvider from "./context/notification/NotificationProvider";
import Notification from "./components/notification/Notification";
import Routes from "./components/routes";

function App() {
  return (
    <Router history={history}>
      <NotificationProvider>
        <Notification />
        {<Routes />}
      </NotificationProvider>
    </Router>
  );
}

export default App;
