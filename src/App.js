import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ErrorProvider from "./context/error/ErrorProvider";
import UserProvider from "./context/user/UserProvider";
import Error from "./components/error/Error";
import Routes from "./components/routes";

function App() {
  return (
    <Router>
      <ErrorProvider>
        <UserProvider>
          <Error />
          {<Routes />}
        </UserProvider>
      </ErrorProvider>
    </Router>
  );
}

export default App;
