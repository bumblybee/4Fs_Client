import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import ErrorProvider from "./context/error/ErrorProvider";
import UserProvider from "./context/user/UserProvider";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Error from "./components/error/Error";
import SectionWrapper from "./components/layout/SectionWrapper";
import SignupForm from "./pages/signup/SignupForm";
import LoginForm from "./pages/login/LoginForm";
import Milestones from "./components/milestones/Milestones";
import Beliefs from "./components/beliefs/Beliefs";
import BodyCalculator from "./components/bodyCalculator/BodyCalculator";
import FastingGuide from "./components/fasting/FastingGuide";
import System from "./components/system/System";

function App() {
  return (
    <Router>
      <ErrorProvider>
        <UserProvider>
          <Error />
          <Switch>
            <ProtectedRoute path="/" exact>
              <Redirect to="/home" />
            </ProtectedRoute>
            <ProtectedRoute path="/home" exact>
              <Redirect to="/home/milestones" />
            </ProtectedRoute>
            <ProtectedRoute path="/home/milestones">
              <SectionWrapper>
                <Milestones />
              </SectionWrapper>
            </ProtectedRoute>
            <ProtectedRoute path="/home/beliefs">
              <SectionWrapper>
                <Beliefs />
              </SectionWrapper>
            </ProtectedRoute>
            <ProtectedRoute path="/home/body-calculator">
              <SectionWrapper>
                <BodyCalculator />
              </SectionWrapper>
            </ProtectedRoute>

            <ProtectedRoute path="/focus" exact>
              <Redirect to="/focus/system" />
            </ProtectedRoute>
            <ProtectedRoute path="/focus/system">
              <SectionWrapper>
                <System />
              </SectionWrapper>
            </ProtectedRoute>
            <ProtectedRoute path="/focus/swagger">
              <SectionWrapper></SectionWrapper>
            </ProtectedRoute>
            <ProtectedRoute path="/focus/sleep">
              <SectionWrapper></SectionWrapper>
            </ProtectedRoute>
            <ProtectedRoute path="/focus/habits">
              <SectionWrapper></SectionWrapper>
            </ProtectedRoute>

            <ProtectedRoute path="/fasting" exact>
              <Redirect to="/fasting/fasting-window" />
            </ProtectedRoute>
            <ProtectedRoute path="/fasting/fasting-window">
              <SectionWrapper></SectionWrapper>
            </ProtectedRoute>
            <ProtectedRoute path="/fasting/fasting-guide">
              <SectionWrapper>
                <FastingGuide />
              </SectionWrapper>
            </ProtectedRoute>

            <ProtectedRoute path="/food" exact>
              <Redirect to="/food/calories" />
            </ProtectedRoute>
            <ProtectedRoute path="/food/calories">
              <SectionWrapper></SectionWrapper>
            </ProtectedRoute>
            <ProtectedRoute path="/food/food-list">
              <SectionWrapper></SectionWrapper>
            </ProtectedRoute>
            <ProtectedRoute path="/food/meal-planner">
              <SectionWrapper></SectionWrapper>
            </ProtectedRoute>

            <ProtectedRoute path="/fitness" exact>
              <Redirect to="/fitness/fitness-activities" />
            </ProtectedRoute>
            <ProtectedRoute path="/fitness/fitness-activities">
              <SectionWrapper></SectionWrapper>
            </ProtectedRoute>
            <ProtectedRoute path="/fitness/fitness-planner">
              <SectionWrapper></SectionWrapper>
            </ProtectedRoute>
            <ProtectedRoute path="/resources">
              <SectionWrapper></SectionWrapper>
            </ProtectedRoute>

            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/signup">
              <SignupForm />
            </Route>
          </Switch>
        </UserProvider>
      </ErrorProvider>
    </Router>
  );
}

export default App;
