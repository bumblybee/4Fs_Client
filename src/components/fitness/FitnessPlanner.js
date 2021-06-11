import React from "react";
import SheetsComponent from "../sheets/SheetsComponent";

const FitnessPlanner = () => {
  return (
    <SheetsComponent
      field="fitness"
      colorScheme="purple"
      title="Fitness Planner"
      subtext="Click the button below to check out the Fitness Planner in the program sheet."
      sheetId="#gid=1062021121"
      buttonText="Fitness Planner"
    />
  );
};

export default FitnessPlanner;
