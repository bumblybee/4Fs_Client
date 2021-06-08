import React from "react";
import SheetsComponent from "../sheets/SheetsComponent";

const FoodList = () => {
  return (
    <SheetsComponent
      colorScheme="orange"
      title="Food List"
      subtext="Use the list to determine if your food is alkaline, neutral or acidic."
      sheetId="#gid=1557042622"
    />
  );
};

export default FoodList;
