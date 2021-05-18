import React from "react";
import useCRUD from "../../../hooks/useCRUD";
import { getPriorSystems } from "../../../api/focus/systemApi";

const PriorSystemWeeks = () => {
  const [priorSystems] = useCRUD(getPriorSystems);
  console.log(priorSystems);
  return <div></div>;
};

export default PriorSystemWeeks;
