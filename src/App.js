import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import UserProvider from "./context/UserProvider";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import AppWrapper from "./components/wrapper/AppWrapper";
import SignupForm from "./pages/signup/SignupForm";
import LoginForm from "./pages/login/LoginForm";
import Milestones from "./components/milestones/Milestones";
import Beliefs from "./components/beliefs/Beliefs";
import System from "./components/system/System";

function App() {
  return (
    <Router>
      <UserProvider>
        <Switch>
          <div className="App">
            <ProtectedRoute path="/" exact>
              <Redirect to="/home" />
            </ProtectedRoute>
            <ProtectedRoute path="/home" exact>
              <Redirect to="/home/milestones" />
            </ProtectedRoute>
            <ProtectedRoute path="/home/milestones">
              <AppWrapper>
                <Milestones />
              </AppWrapper>
            </ProtectedRoute>
            <ProtectedRoute path="/home/beliefs">
              <AppWrapper>
                <Beliefs />
              </AppWrapper>
            </ProtectedRoute>
            <ProtectedRoute path="/focus" exact>
              <Redirect to="/focus/system" />
            </ProtectedRoute>
            <ProtectedRoute path="/focus/system">
              <AppWrapper>
                <System />
              </AppWrapper>
            </ProtectedRoute>
            <ProtectedRoute path="/focus/swagger"></ProtectedRoute>
            <ProtectedRoute path="/focus/sleep"></ProtectedRoute>
            <ProtectedRoute path="/focus/habits"></ProtectedRoute>

            <ProtectedRoute path="/fasting">
              <Redirect to="/fasting/window" />
            </ProtectedRoute>
            <ProtectedRoute path="/food">
              <Redirect to="/food/calories" />
            </ProtectedRoute>
            <ProtectedRoute path="/fitness">
              <Redirect to="/fitness/activities" />
            </ProtectedRoute>

            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/signup">
              <SignupForm />
            </Route>
          </div>
        </Switch>
      </UserProvider>
    </Router>
  );
}

export default App;
