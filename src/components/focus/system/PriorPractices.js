import React from "react";
import useCRUD from "../../../hooks/useCRUD";
import { getPriorPractices } from "../../../api/focus/practicesApi";

const PriorPractices = () => {
  const [priorPractices] = useCRUD(getPriorPractices);
  console.log(priorPractices);
  return <div></div>;
};

export default PriorPractices;
