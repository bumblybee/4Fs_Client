import React, { useState, useEffect } from "react";
import { Router } from "react-router-dom";
import { history } from "./utils/customHistory";
import CellProvider from "./context/cell/CellProvider";
import NotificationProvider from "./context/notification/NotificationProvider";
import Notification from "./components/notification/Notification";
import CookieConsent from "./components/layout/cookie/CookieConsent";
import Routes from "./components/routes";

function App() {
  //TODO: Need to handle differently/elsewhere because pathname doesn't refresh unless page reload
  const pathname = history.location.pathname.split("/")[1];
  const locations = ["signup", "login", "reset-password"];

  return (
    <Router history={history}>
      <NotificationProvider>
        <CellProvider>
          <Notification />
          {<Routes />}
        </CellProvider>
      </NotificationProvider>

      {!locations.includes(pathname) && <CookieConsent />}
    </Router>
  );
}

export default App;
