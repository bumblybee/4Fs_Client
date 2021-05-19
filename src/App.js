import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NotificationProvider from "./context/notification/NotificationProvider";
import UserProvider from "./context/user/UserProvider";
import Notification from "./components/notification/Notification";
import Routes from "./components/routes";

function App() {
  return (
    <Router>
      <NotificationProvider>
        <UserProvider>
          <Notification />
          {<Routes />}
        </UserProvider>
      </NotificationProvider>
    </Router>
  );
}

export default App;
