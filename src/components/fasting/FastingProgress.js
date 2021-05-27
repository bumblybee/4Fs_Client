import React, { useState } from "react";
import generateCellComponent from "../../utils/generateCellComponent";
import useCRUD from "../../hooks/useCRUD";
import { getFastingProgress } from "../../api/fasting/fastingApi";
import TableComponent from "../table/TableComponent";
import { Icon } from "semantic-ui-react";
import { StyledProgressToggle } from "./StyledFasting";

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
    <>
      <StyledProgressToggle
        basic
        showProgress={showProgress}
        onClick={() => setShowProgress(!showProgress)}
      >
        <Icon
          name={showProgress ? "caret down" : "caret right"}
          onClick={() => setShowProgress(!showProgress)}
        />
        Progress
      </StyledProgressToggle>
      {showProgress && (
        <>
          {!fastingProgress.length ? (
            <p style={{ paddingLeft: "1.5rem" }}>No previous weeks to show</p>
          ) : (
            <TableComponent
              aligntext="left"
              fontsize="0.9rem"
              compact
              color="green"
              columns={columns}
              rows={rows()}
              width="80%"
            />
          )}
        </>
      )}
    </>
  );
};

export default FastingProgress;
