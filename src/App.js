import React from "react";
import LandingPage from "./pages/landing/LandingPage";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import SignupForm from "./pages/signup/SignupForm";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route path="/home">
            <LandingPage />
          </Route>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
          <Route path="/" exact>
            <Redirect to="/signup" />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}

export default App;
