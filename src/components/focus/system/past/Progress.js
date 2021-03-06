import React, { useState } from "react";
import moment from "moment";
import useCRUD from "../../../../hooks/useCRUD";
import { getPracticeProgress } from "../../../../api/focus/practicesApi";
import generateCellComponent from "../../../../utils/generateCellComponent";
import TableComponent from "../../../table/TableComponent";

import { Icon } from "semantic-ui-react";
import { StyledProgressToggle, StyledProgressText } from "./StyledProgress";

const Progress = () => {
  const [showWeeks, setShowWeeks] = useState(false);
  const [practiceProgress] = useCRUD(getPracticeProgress);

  const columns = [
    { label: "Week", key: "dates", width: 3 },
    { label: "Practice", key: "practice", width: 3 },
    { label: "Goal", key: "goal", width: 1 },
    { label: "Performed", key: "performed", width: 1 },
  ];

  const rows = () => {
    const rowData = practiceProgress.map((practice) => ({
      dates: {
        cellComponent: generateCellComponent("static", {
          val: `${moment(practice.practice_week.startDate).format("MMM D")} -
            ${moment(practice.practice_week.endDate).format("MMM D 'YY")}`,
          alignment: "left",
          className: "system-progress-week dates",
        }),
      },
      practice: {
        cellComponent: generateCellComponent("static", {
          val: practice.practice,
          alignment: "left",
          className: "system-progress-week",
        }),
      },
      goal: {
        cellComponent: generateCellComponent("static", {
          alignment: "center",
          val: practice.goal,
          className: "system-progress-week goal",
        }),
      },
      performed: {
        cellComponent: generateCellComponent("static", {
          val: practice.performed,
          alignment: "center",
          condition:
            practice.performed >= practice.goal && practice.performed !== 0,
          className: "system-progress-week performed",
        }),
      },
    }));

    return rowData;
  };

  return (
    <>
      <StyledProgressToggle
        basic
        showweeks={showWeeks}
        onClick={() => setShowWeeks(!showWeeks)}
      >
        <Icon
          name={showWeeks ? "caret down" : "caret right"}
          onClick={() => setShowWeeks(!showWeeks)}
        />
        Progress
      </StyledProgressToggle>
      {showWeeks && (
        <>
          {!practiceProgress.length ? (
            <StyledProgressText>No previous weeks to show</StyledProgressText>
          ) : (
            <TableComponent
              className="system-progress"
              aligntext="left"
              fontsize="0.9rem"
              compact
              color="#b463b4"
              columns={columns}
              rows={rows()}
              width="40%"
            />
          )}
        </>
      )}
    </>
  );
};

export default Progress;
