import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";
import AppWrapper from "../layout/AppWrapper";
import SignupForm from "../../pages/signup/SignupForm";
import LoginForm from "../../pages/login/LoginForm";
import UserProfile from "../../pages/user/UserProfile";
import Resources from "../resources/Resources";
import { Milestones, Beliefs, BodyCalculator } from "../home";
import { System, SwaggerStockpile, Sleep, Habits } from "../focus";
import { FastingGuide, FastingWindow } from "../../components/fasting";
import { CalorieRequirements, FoodList, MealPlanner } from "../food";
import { FitnessActivities, FitnessPlanner } from "../fitness";
import PasswordResetRequest from "../../pages/password/PasswordResetRequest";
import PasswordReset from "../../pages/password/PasswordReset";

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
        <AppWrapper component={<Milestones />} tabs />
      </ProtectedRoute>
      <ProtectedRoute path="/home/beliefs">
        <AppWrapper component={<Beliefs />} tabs />
      </ProtectedRoute>
      <ProtectedRoute path="/home/body-calculator">
        <AppWrapper component={<BodyCalculator />} tabs />
      </ProtectedRoute>

      <ProtectedRoute path="/focus" exact>
        <Redirect to="/focus/system" />
      </ProtectedRoute>
      <ProtectedRoute path="/focus/system">
        <AppWrapper component={<System />} tabs />
      </ProtectedRoute>
      <ProtectedRoute path="/focus/swagger">
        <AppWrapper component={<SwaggerStockpile />} tabs />
      </ProtectedRoute>
      <ProtectedRoute path="/focus/sleep">
        <AppWrapper component={<Sleep />} tabs />
      </ProtectedRoute>
      <ProtectedRoute path="/focus/habits">
        <AppWrapper component={<Habits />} tabs />
      </ProtectedRoute>

      <ProtectedRoute path="/fasting" exact>
        <Redirect to="/fasting/fasting-window" />
      </ProtectedRoute>
      <ProtectedRoute path="/fasting/fasting-window">
        <AppWrapper component={<FastingWindow />} tabs />
      </ProtectedRoute>
      <ProtectedRoute path="/fasting/fasting-guide">
        <AppWrapper component={<FastingGuide />} tabs />
      </ProtectedRoute>

      <ProtectedRoute path="/food" exact>
        <Redirect to="/food/calories" />
      </ProtectedRoute>
      <ProtectedRoute path="/food/calories">
        <AppWrapper component={<CalorieRequirements />} tabs />
      </ProtectedRoute>
      <ProtectedRoute path="/food/food-list">
        <AppWrapper component={<FoodList />} tabs />
      </ProtectedRoute>
      <ProtectedRoute path="/food/meal-planner">
        <AppWrapper component={<MealPlanner />} tabs />
      </ProtectedRoute>

      <ProtectedRoute path="/fitness" exact>
        <Redirect to="/fitness/fitness-activities" />
      </ProtectedRoute>
      <ProtectedRoute path="/fitness/fitness-activities">
        <AppWrapper component={<FitnessActivities />} tabs />
      </ProtectedRoute>
      <ProtectedRoute path="/fitness/fitness-planner">
        <AppWrapper component={<FitnessPlanner />} tabs />
      </ProtectedRoute>
      <ProtectedRoute path="/resources">
        <AppWrapper component={<Resources />} tabs />
      </ProtectedRoute>
      <ProtectedRoute path="/profile" exact>
        <AppWrapper component={<UserProfile />} />
      </ProtectedRoute>
      <Route path="/reset-password/:token" exact>
        <PasswordReset />
      </Route>
      <Route path="/reset-password" exact>
        <PasswordResetRequest />
      </Route>

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
