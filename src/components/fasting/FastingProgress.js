import React, { useState } from "react";
import generateCellComponent from "../../utils/generateCellComponent";

import moment from "moment";
import { StyledTable } from "./StyledFasting";

const FastingProgress = ({ fastingProgress }) => {
  const columns = [
    { label: "Date", key: "date", width: 1 },

    { label: "Performed", key: "performed", width: 6 },
  ];

  const rows = () => {
    const rowData = fastingProgress.map((item) => ({
      date: {
        cellComponent: generateCellComponent("static", {
          val: moment(item.date).format("MM/DD/YY"),
          className: "fasting-progress",
          alignment: "center",
          alignItems: "flex-start",
          className: "progress-date",
        }),
      },
      performed: {
        cellComponent: generateCellComponent("progress", {
          alignment: "center",
          aligntext: "center",
          val: item.performed * 100,
          goal: item.goalWindow,
          day: item.todayWindow,
          className: "progress-bar",
        }),
      },
    }));

    return rowData;
  };

  return (
    rows && (
      <StyledTable
        className="fasting-progress"
        aligntext="center"
        fontsize="0.9rem"
        color="#1B1C1D"
        columns={columns}
        rows={rows()}
        striped
        compact="very"
        maxHeight="9rem"
        // inverted
      />
    )
  );
};

export default FastingProgress;
