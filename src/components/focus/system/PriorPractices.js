import React, { useState } from "react";
import moment from "moment";
import useCRUD from "../../../hooks/useCRUD";
import { getPriorPractices } from "../../../api/focus/practicesApi";
import { Accordion, Icon, Segment } from "semantic-ui-react";

const PriorPractices = () => {
  const [showWeeks, setShowWeeks] = useState(false);
  const [priorPractices] = useCRUD(getPriorPractices);
  const weeks = priorPractices.map((practice) => ({
    startDate: practice.practice_week.startDate,
    endDate: practice.practice_week.endDate,
  }));

  // Overflow removes border on accordion - style manually
  return (
    <div style={{ height: "140px", width: "50%" }}>
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
            height: "80px",
            overflowY: "auto",
            borderTopLeftRadius: "0",
            borderTopRightRadius: "0",
          }}
          styled
          fluid
        >
          {weeks.map((week) => (
            <Accordion.Title>
              <Icon name="dropdown" />
              {moment(week.startDate).format("MM/DD/YY")} -{" "}
              {moment(week.endDate).format("MM/DD/YY")}
            </Accordion.Title>
          ))}
        </Accordion>
      )}
    </div>
  );
};

export default PriorPractices;
