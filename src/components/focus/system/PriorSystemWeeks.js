import React from "react";
import useCRUD from "../../../hooks/useCRUD";
import { getPriorPractices } from "../../../api/focus/practicesApi";

const PriorSystemWeeks = () => {
  const [priorSystems] = useCRUD(getPriorPractices);
  console.log(priorSystems);
  return <div></div>;
};

export default PriorSystemWeeks;
