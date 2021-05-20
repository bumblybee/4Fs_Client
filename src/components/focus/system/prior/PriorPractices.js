import React, { useState } from "react";
import moment from "moment";
import useCRUD from "../../../../hooks/useCRUD";
import { getPriorWeeks } from "../../../../api/focus/practicesApi";
import generateCellComponent from "../../../../utils/generateCellComponent";
import { Accordion, Icon } from "semantic-ui-react";
import {
  StyledProgressToggle,
  StyledAccordion,
  StyledProgressWrapper,
  StyledProgressTable,
} from "./StyledPriorPractices";

const PriorPractices = () => {
  const [showWeeks, setShowWeeks] = useState(false);
  const [priorWeeks] = useCRUD(getPriorWeeks);
  const [activeItem, setActiveItem] = useState(null);

  const columns = [
    { label: "Practice", key: "practice" },
    { label: "Goal", key: "goal" },
    { label: "Performed", key: "performed" },
  ];

  const rows = priorWeeks.map((week) => {
    return week.practices.map((practice) => ({
      practice: {
        cellComponent: generateCellComponent("static", {
          val: practice.practice,
          alignment: "center",
        }),
      },
      goal: {
        cellComponent: generateCellComponent("", { val: practice.goal }),
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
  });

  return (
    <StyledProgressWrapper showWeeks={showWeeks}>
      <StyledProgressToggle
        attached={showWeeks ? "top" : ""}
        basic
        onClick={() => setShowWeeks(!showWeeks)}
      >
        <Icon
          name={showWeeks ? "caret down" : "caret right"}
          onClick={() => setShowWeeks(!showWeeks)}
        />
        Progress
      </StyledProgressToggle>
      {showWeeks && (
        <StyledAccordion styled fluid>
          {!priorWeeks.length && (
            <Accordion.Title>No previous weeks to show</Accordion.Title>
          )}
          {priorWeeks.map(
            (week, idx) =>
              // If we have data for row at idx, render
              rows[idx][0] && (
                <>
                  <Accordion.Title
                    key={idx}
                    active={activeItem === idx}
                    onClick={() => setActiveItem(activeItem === idx ? -1 : idx)}
                  >
                    <Icon name="dropdown" />
                    {moment(week.startDate).format("MM/DD/YY")} -{" "}
                    {moment(week.endDate).format("MM/DD/YY")}
                  </Accordion.Title>

                  <Accordion.Content
                    style={{
                      overflowY: "auto",
                    }}
                    active={activeItem === idx}
                  >
                    <StyledProgressTable
                      aligntext="center"
                      fontsize="0.9rem"
                      compact
                      color="purple"
                      columns={columns}
                      rows={rows[idx]}
                    />
                  </Accordion.Content>
                </>
              )
          )}
        </StyledAccordion>
      )}
    </StyledProgressWrapper>
  );
};

export default PriorPractices;
