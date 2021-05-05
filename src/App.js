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
import { Milestones, Beliefs, BodyCalculator } from "./components/home";
import { System, SwaggerStockpile } from "./components/focus";
import { FastingGuide, FastingWindow } from "./components/fasting";
import { CalorieRequirements, FoodList, MealPlanner } from "./components/food";
import { FitnessActivities, FitnessPlanner } from "./components/fitness";

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
              <SectionWrapper>
                <SwaggerStockpile />
              </SectionWrapper>
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
              <SectionWrapper>
                <CalorieRequirements />
              </SectionWrapper>
            </ProtectedRoute>
            <ProtectedRoute path="/food/food-list">
              <SectionWrapper>
                <FoodList />
              </SectionWrapper>
            </ProtectedRoute>
            <ProtectedRoute path="/food/meal-planner">
              <SectionWrapper>
                <MealPlanner />
              </SectionWrapper>
            </ProtectedRoute>

            <ProtectedRoute path="/fitness" exact>
              <Redirect to="/fitness/fitness-activities" />
            </ProtectedRoute>
            <ProtectedRoute path="/fitness/fitness-activities">
              <SectionWrapper>
                <FitnessActivities />
              </SectionWrapper>
            </ProtectedRoute>
            <ProtectedRoute path="/fitness/fitness-planner">
              <SectionWrapper>
                <FitnessPlanner />
              </SectionWrapper>
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
