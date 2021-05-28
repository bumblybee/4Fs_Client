import React, { useState } from "react";
import generateCellComponent from "../../utils/generateCellComponent";
import useCRUD from "../../hooks/useCRUD";
import { getFastingProgress } from "../../api/fasting/fastingApi";
import moment from "moment";
import { Icon } from "semantic-ui-react";
import { StyledTable } from "./StyledFasting";

const FastingProgress = () => {
  const [fastingProgress] = useCRUD(getFastingProgress);
  const [showProgress, setShowProgress] = useState(false);

  const columns = [
    { label: "Date", key: "date", width: 1 },

    { label: "Goal", key: "goal", width: 10 },
  ];

  const rows = () => {
    const rowData = fastingProgress.map((item) => ({
      date: {
        cellComponent: generateCellComponent("static", {
          val: moment(item.date).format("MM/DD/YY"),
          className: "fasting-progress",
          alignment: "flex-start",
          alignItems: "flex-start",
        }),
      },
      goal: {
        cellComponent: generateCellComponent("progress", {
          alignment: "flex-start",
          val: item.performed,
          className: "",
        }),
      },
    }));

    return rowData;
  };

  return (
    rows && (
      <StyledTable
        aligntext="left"
        fontsize="0.9rem"
        color="#21BA45"
        columns={columns}
        rows={rows()}
        celled
        compact="very"
        maxHeight="10rem"
      />
    )
  );
};

export default FastingProgress;
