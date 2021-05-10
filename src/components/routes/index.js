import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";
import AppWrapper from "../layout/AppWrapper";
import SignupForm from "../../pages/signup/SignupForm";
import LoginForm from "../../pages/login/LoginForm";
import Resources from "../resources/Resources";
import { Milestones, Beliefs, BodyCalculator } from "../home";
import { System, SwaggerStockpile, Sleep } from "../focus";
import { FastingGuide, FastingWindow } from "../../components/fasting";
import { CalorieRequirements, FoodList, MealPlanner } from "../food";
import { FitnessActivities, FitnessPlanner } from "../fitness";

const Routes = () => {
  return (
    <Switch>
      <ProtectedRoute path="/" exact>
        <Redirect to="/home" />
      </ProtectedRoute>
      <ProtectedRoute path="/home" exact>
        <Redirect to="/home/milestones" />
      </ProtectedRoute>
      <ProtectedRoute path="/home/milestones">
        <AppWrapper component={<Milestones />} />
      </ProtectedRoute>
      <ProtectedRoute path="/home/beliefs">
        <AppWrapper component={<Beliefs />} />
      </ProtectedRoute>
      <ProtectedRoute path="/home/body-calculator">
        <AppWrapper component={<BodyCalculator />} />
      </ProtectedRoute>

      <ProtectedRoute path="/focus" exact>
        <Redirect to="/focus/system" />
      </ProtectedRoute>
      <ProtectedRoute path="/focus/system">
        <AppWrapper component={<System />} />
      </ProtectedRoute>
      <ProtectedRoute path="/focus/swagger">
        <AppWrapper component={<SwaggerStockpile />} />
      </ProtectedRoute>
      <ProtectedRoute path="/focus/sleep">
        <AppWrapper component={<Sleep />} />
      </ProtectedRoute>
      <ProtectedRoute path="/focus/habits">
        <AppWrapper></AppWrapper>
      </ProtectedRoute>

      <ProtectedRoute path="/fasting" exact>
        <Redirect to="/fasting/fasting-window" />
      </ProtectedRoute>
      <ProtectedRoute path="/fasting/fasting-window">
        <AppWrapper></AppWrapper>
      </ProtectedRoute>
      <ProtectedRoute path="/fasting/fasting-guide">
        <AppWrapper component={<FastingGuide />} />
      </ProtectedRoute>

      <ProtectedRoute path="/food" exact>
        <Redirect to="/food/calories" />
      </ProtectedRoute>
      <ProtectedRoute path="/food/calories">
        <AppWrapper component={<CalorieRequirements />} />
      </ProtectedRoute>
      <ProtectedRoute path="/food/food-list">
        <AppWrapper component={<FoodList />} />
      </ProtectedRoute>
      <ProtectedRoute path="/food/meal-planner">
        <AppWrapper component={<MealPlanner />} />
      </ProtectedRoute>

      <ProtectedRoute path="/fitness" exact>
        <Redirect to="/fitness/fitness-activities" />
      </ProtectedRoute>
      <ProtectedRoute path="/fitness/fitness-activities">
        <AppWrapper component={<FitnessActivities />} />
      </ProtectedRoute>
      <ProtectedRoute path="/fitness/fitness-planner">
        <AppWrapper component={<FitnessPlanner />} />
      </ProtectedRoute>
      <ProtectedRoute path="/resources">
        <AppWrapper component={<Resources />} />
      </ProtectedRoute>

      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/signup">
        <SignupForm />
      </Route>
    </Switch>
  );
};

export default Routes;
