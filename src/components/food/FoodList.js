import React from "react";
import SheetsComponent from "../sheets/SheetsComponent";

const FoodList = () => {
  return (
    <SheetsComponent
      colorScheme="orange"
      title="Food List"
      subtext="Click the button below to check out the Food List in the program sheet."
      sheetId="#gid=1557042622"
      buttonText="Food List"
    />
  );
};

export default FoodList;
