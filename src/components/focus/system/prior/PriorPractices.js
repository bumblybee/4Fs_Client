import React, { useState } from "react";
import moment from "moment";
import useCRUD from "../../../../hooks/useCRUD";
import {
  getPriorPractices,
  getPriorWeeks,
} from "../../../../api/focus/practicesApi";
import { Accordion, Icon, Segment } from "semantic-ui-react";
import TableComponent from "../../../table/TableComponent";

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
        cellComponent: <div>{practice.practice}</div>,
      },
      goal: { cellComponent: <div>{practice.goal}</div> },
      performed: {
        cellComponent: <div>{practice.performed}</div>,
      },
    }));
  });

  console.log(rows);

  return (
    <div style={{ height: "150px", width: "40.9%" }}>
      <Segment
        attached={showWeeks ? "top" : ""}
        style={{
          borderTop: "2px solid #800080",
          color: "#800080",
          fontWeight: "600",
          boxShadow: "none",
        }}
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
            height: "100px",
            overflowY: "auto",
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
          }}
          styled
          fluid
        >
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
                style={{ overflowY: "auto" }}
                active={activeItem === idx}
              >
                <TableComponent
                  aligntext="center"
                  fontsize="0.9rem"
                  compact
                  color="purple"
                  columns={columns}
                  rows={rows[idx]}
                  style={{ width: "90%" }}
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
