import React, { useState } from "react";
import generateCellComponent from "../../utils/generateCellComponent";

import moment from "moment";
import { Icon } from "semantic-ui-react";
import { StyledTable } from "./StyledFasting";

const FastingProgress = ({ fastingProgress }) => {
  const [showProgress, setShowProgress] = useState(false);

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
        }),
      },
      performed: {
        cellComponent: generateCellComponent("progress", {
          alignment: "center",
          aligntext: "center",
          val: item.performed * 100,
          goal: item.goalWindow,
          day: item.todayWindow,
          className: "",
        }),
      },
    }));

    return rowData;
  };

  return (
    rows && (
      <StyledTable
        aligntext="center"
        fontsize="0.9rem"
        color="grey"
        columns={columns}
        rows={rows()}
        // celled
        compact="very"
        maxHeight="9rem"
      />
    )
  );
};

export default FastingProgress;
