import React from "react";
import SheetsComponent from "../sheets/SheetsComponent";

const MealPlanner = () => {
  return (
    <SheetsComponent
      field="food"
      colorScheme="red"
      title="Meal Planner"
      subtext="Click the button below to check out the Meal Planner in the program sheet."
      sheetId="#gid=679021059"
      buttonText="Meal Planner"
    />
  );
};

export default MealPlanner;
