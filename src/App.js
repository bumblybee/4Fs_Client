import React from "react";
import { Router } from "react-router-dom";
import { history } from "./utils/customHistory";
import CellProvider from "./context/cell/CellProvider";
import NotificationProvider from "./context/notification/NotificationProvider";
import Notification from "./components/notification/Notification";
import Routes from "./components/routes";

function App() {
  return (
    <Router history={history}>
      <NotificationProvider>
        <CellProvider>
          <Notification />
          {<Routes />}
        </CellProvider>
      </NotificationProvider>
    </Router>
  );
}

export default App;
