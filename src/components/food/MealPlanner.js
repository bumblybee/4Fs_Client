import React from "react";
import SheetsComponent from "../sheets/SheetsComponent";

const MealPlanner = () => {
  return (
    <SheetsComponent
      field="food"
      colorScheme="red"
      title="Meal Planner"
      subtext="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et voluptate voluptates."
      sheetId="#gid=679021059"
    />
  );
};

export default MealPlanner;
