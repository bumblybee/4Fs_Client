import React, { useState } from "react";
import moment from "moment";
import useCRUD from "../../../../hooks/useCRUD";
import { getPriorPractices } from "../../../../api/focus/practicesApi";
import generateCellComponent from "../../../../utils/generateCellComponent";
import { Segment, Icon } from "semantic-ui-react";
import {
  StyledProgressToggle,
  StyledAccordion,
  StyledProgressWrapper,
  StyledProgressTable,
} from "./StyledPriorPractices";

const PriorPractices = () => {
  const [showWeeks, setShowWeeks] = useState(false);
  const [priorPractices] = useCRUD(getPriorPractices);
  // const [activeItem, setActiveItem] = useState(null);

  const columns = [
    { label: "Week", key: "dates", width: 3 },
    { label: "Practice", key: "practice", width: 3 },
    { label: "Goal", key: "goal", width: 2 },
    { label: "Performed", key: "performed", width: 2 },
  ];

  const rows = priorPractices.map((practice) => ({
    dates: {
      cellComponent: generateCellComponent("static", {
        val: `${moment(practice.practice_week.startDate).format("MM/DD/YY")} -
            ${moment(practice.practice_week.endDate).format("MM/DD/YY")}`,
        alignment: "center",
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
          {!priorPractices.length && <p>No previous weeks to show</p>}
          <StyledProgressTable
            aligntext="center"
            fontsize="0.9rem"
            compact
            color="green"
            columns={columns}
            rows={rows}
          />
        </>
      )}
    </StyledProgressWrapper>
  );
};

export default PriorPractices;
