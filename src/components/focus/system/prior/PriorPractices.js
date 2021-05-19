import React, { useState } from "react";
import moment from "moment";
import useCRUD from "../../../../hooks/useCRUD";
import { getPriorWeeks } from "../../../../api/focus/practicesApi";
import generateCellComponent from "../../../../utils/generateCellComponent";
import { Accordion, Icon, Segment } from "semantic-ui-react";
import TableComponent from "../../../table/TableComponent";

// TODO: use generateCellComponent and pass props to align rows and cols, color performed if hit goal

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

  console.log(rows);

  return (
    <div style={{ width: showWeeks ? "50%" : "12%" }}>
      <Segment
        attached={showWeeks ? "top" : ""}
        basic
        style={{
          color: "#800080",
          fontWeight: "600",
          boxShadow: "none",
          cursor: "pointer",
          padding: "0.5rem 0.2rem",
          fontFamily: "Lato",
        }}
        onClick={() => setShowWeeks(!showWeeks)}
      >
        <Icon
          name={showWeeks ? "caret down" : "caret right"}
          style={{ cursor: "pointer" }}
          onClick={() => setShowWeeks(!showWeeks)}
        />
        Progress
      </Segment>
      {showWeeks && (
        <Accordion
          style={{
            minHeight: "min-content",
            maxHeight: "120px",
            overflowY: "auto",
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
          }}
          styled
          fluid
        >
          {!priorWeeks.length && (
            <Accordion.Title>No previous weeks to show</Accordion.Title>
          )}
          {priorWeeks.map((week, idx) => (
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
                <TableComponent
                  aligntext="center"
                  fontsize="0.9rem"
                  compact
                  color="purple"
                  columns={columns}
                  rows={rows[idx]}
                  style={{ width: "85%" }}
                />
              </Accordion.Content>
            </>
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default PriorPractices;
