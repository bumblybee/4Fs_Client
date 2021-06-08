import React from "react";
import SheetsComponent from "../sheets/SheetsComponent";

const FitnessPlanner = () => {
  return (
    <SheetsComponent
      field="fitness"
      colorScheme="purple"
      title="Fitness Planner"
      subtext="Use the fitness planner to increase your energy consumption throughout the day."
      sheetId="#gid=1062021121"
    />
  );
};

export default FitnessPlanner;
