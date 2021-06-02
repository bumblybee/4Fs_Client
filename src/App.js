import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NotificationProvider from "./context/notification/NotificationProvider";
import Notification from "./components/notification/Notification";
import Routes from "./components/routes";

function App() {
  return (
    <Router>
      <NotificationProvider>
        <Notification />
        {<Routes />}
      </NotificationProvider>
    </Router>
  );
}

export default App;
