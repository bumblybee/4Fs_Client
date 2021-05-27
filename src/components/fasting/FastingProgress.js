import React, { useState } from "react";
import generateCellComponent from "../../utils/generateCellComponent";
import useCRUD from "../../hooks/useCRUD";
import { getFastingProgress } from "../../api/fasting/fastingApi";
import TableComponent from "../table/TableComponent";
import { Icon } from "semantic-ui-react";
import { StyledTable } from "./StyledFasting";

const FastingProgress = () => {
  const [fastingProgress] = useCRUD(getFastingProgress);
  const [showProgress, setShowProgress] = useState(false);

  const columns = [
    { label: "Date", key: "date", width: 2 },

    { label: "Goal", key: "goal", width: 10 },
  ];

  const rows = () => {
    const rowData = fastingProgress.map((item) => ({
      date: {
        cellComponent: generateCellComponent("static", {
          val: item.date,
          alignment: "left",
        }),
      },
      goal: {
        cellComponent: generateCellComponent("static", {
          alignment: "center",
          val: item.goal,
          className: "",
        }),
      },
    }));

    return rowData;
  };

  return (
    rows && (
      <StyledTable
        // aligntext="left"
        fontsize="0.9rem"
        color="green"
        columns={columns}
        rows={rows()}
        // width="80%"
        basic="very"
      />
    )
  );
};

export default FastingProgress;
