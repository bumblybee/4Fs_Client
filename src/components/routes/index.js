import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";
import SectionWrapper from "../layout/SectionWrapper";
import SignupForm from "../../pages/signup/SignupForm";
import LoginForm from "../../pages/login/LoginForm";
import Resources from "../resources/Resources";
import { Milestones, Beliefs, BodyCalculator } from "../home";
import { System, SwaggerStockpile } from "../focus";
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
        <SectionWrapper component={<Milestones />} />
      </ProtectedRoute>
      <ProtectedRoute path="/home/beliefs">
        <SectionWrapper component={<Beliefs />} />
      </ProtectedRoute>
      <ProtectedRoute path="/home/body-calculator">
        <SectionWrapper component={<BodyCalculator />} />
      </ProtectedRoute>

      <ProtectedRoute path="/focus" exact>
        <Redirect to="/focus/system" />
      </ProtectedRoute>
      <ProtectedRoute path="/focus/system">
        <SectionWrapper component={<System />} />
      </ProtectedRoute>
      <ProtectedRoute path="/focus/swagger">
        <SectionWrapper component={<SwaggerStockpile />} />
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
        <SectionWrapper component={<FastingGuide />} />
      </ProtectedRoute>

      <ProtectedRoute path="/food" exact>
        <Redirect to="/food/calories" />
      </ProtectedRoute>
      <ProtectedRoute path="/food/calories">
        <SectionWrapper component={<CalorieRequirements />} />
      </ProtectedRoute>
      <ProtectedRoute path="/food/food-list">
        <SectionWrapper component={<FoodList />} />
      </ProtectedRoute>
      <ProtectedRoute path="/food/meal-planner">
        <SectionWrapper component={<MealPlanner />} />
      </ProtectedRoute>

      <ProtectedRoute path="/fitness" exact>
        <Redirect to="/fitness/fitness-activities" />
      </ProtectedRoute>
      <ProtectedRoute path="/fitness/fitness-activities">
        <SectionWrapper component={<FitnessActivities />} />
      </ProtectedRoute>
      <ProtectedRoute path="/fitness/fitness-planner">
        <SectionWrapper component={<FitnessPlanner />} />
      </ProtectedRoute>
      <ProtectedRoute path="/resources">
        <SectionWrapper component={<Resources />} />
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
