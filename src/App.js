import React from "react";
import { Router } from "react-router-dom";
import { history } from "./utils/customHistory";
import CellProvider from "./context/cell/CellProvider";
import NotificationProvider from "./context/notification/NotificationProvider";
import Notification from "./components/notification/Notification";
import Routes from "./components/routes";
import Maintenance from "./pages/maintenance/Maintenance";

function App() {
  return (
  <Maintenance />
  );
}

export default App;
