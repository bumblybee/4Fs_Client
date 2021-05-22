import React, { useState } from "react";
import moment from "moment";
import useCRUD from "../../../../hooks/useCRUD";
import { getPracticeProgress } from "../../../../api/focus/practicesApi";
import generateCellComponent from "../../../../utils/generateCellComponent";
import { Icon } from "semantic-ui-react";
import {
  StyledProgressToggle,
  StyledProgressWrapper,
  StyledProgressTable,
} from "./StyledPriorPractices";

const PriorPractices = () => {
  const [showWeeks, setShowWeeks] = useState(false);
  const [practiceProgress] = useCRUD(getPracticeProgress);

  const columns = [
    { label: "Week", key: "dates", width: 2 },
    { label: "Practice", key: "practice", width: 3 },
    { label: "Goal", key: "goal", width: 2 },
    { label: "Performed", key: "performed", width: 2 },
  ];

  const rows = (datesRow) => {
    const rowData = practiceProgress.map((practice) => ({
      dates: {
        cellComponent: generateCellComponent("static", {
          val: `${moment(practice.practice_week.startDate).format("MM/DD")} -
            ${moment(practice.practice_week.endDate).format("MM/DD 'YY")}`,
          alignment: "center",
          className: "system-progress-week",
        }),
      },
      practice: {
        cellComponent: generateCellComponent("static", {
          val: practice.practice,
          alignment: "center",
        }),
      },
      goal: {
        cellComponent: generateCellComponent("static", {
          alignment: "center",
          val: practice.goal,
        }),
      },
      performed: {
        cellComponent: generateCellComponent("static", {
          val: practice.performed,
          alignment: "center",
          condition: practice.performed >= practice.goal,
          textweight: "600",
        }),
      },
    }));

    return rowData;
  };

  return (
    <StyledProgressWrapper showWeeks={showWeeks}>
      <StyledProgressToggle
        // attached={showWeeks ? "top" : ""}
        basic
        showWeeks={showWeeks}
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
            <p style={{ paddingLeft: "1.5rem" }}>No previous weeks to show</p>
          ) : (
            <StyledProgressTable
              aligntext="center"
              fontsize="0.9rem"
              compact
              color="green"
              columns={columns}
              rows={rows()}
            />
          )}
        </>
      )}
    </StyledProgressWrapper>
  );
};

export default PriorPractices;
