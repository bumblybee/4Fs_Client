import React, { useState } from "react";
import generateCellComponent from "../../utils/generateCellComponent";
import useCRUD from "../../hooks/useCRUD";
import { getFastingProgress } from "../../api/fasting/fastingApi";
import TableComponent from "../table/TableComponent";

const FastingProgress = () => {
  const [fastingProgress] = useCRUD(getFastingProgress);

  const columns = [
    { label: "Date", key: "date", width: 3 },

    { label: "Goal", key: "goal", width: 9 },
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
    <TableComponent
      aligntext="left"
      fontsize="0.9rem"
      compact
      color="green"
      columns={columns}
      rows={rows()}
      width="40%"
    />
  );
};

export default FastingProgress;
