import React, { useState, useEffect } from "react";
import useCRUD from "../../../hooks/useCRUD";
import { getPriorPractices } from "../../../api/focus/practicesApi";
import { Accordion, Icon } from "semantic-ui-react";

const PriorPractices = () => {
  const [priorPractices] = useCRUD(getPriorPractices);
  const weeks = priorPractices.map((practice) => ({
    startDate: practice.practice_week.startDate,
    endDate: practice.practice_week.endDate,
  }));

  // Overflow removes border on accordian - style manually
  return (
    <div style={{ height: "140px", overflowY: "auto" }}>
      <Accordion styled>
        {weeks.map((week) => (
          <Accordion.Title>
            <Icon name="dropdown" />
            {week.startDate}-{week.endDate}
          </Accordion.Title>
        ))}
      </Accordion>
    </div>
  );
};

export default PriorPractices;
