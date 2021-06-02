import React from "react";
import SheetsComponent from "../sheets/SheetsComponent";

const FitnessPlanner = () => {
  return (
    <SheetsComponent
      field="fitness"
      colorScheme="purple"
      buttonText="Google Sheets"
      title="Fitness Planner"
      subtext="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et voluptate voluptates, dolor aspernatur maiores qui."
    />
  );
};

export default FitnessPlanner;
