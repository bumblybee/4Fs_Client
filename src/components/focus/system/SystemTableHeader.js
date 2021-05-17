import React, { useEffect, useState } from "react";
import moment from "moment";

import {
  StyledStartDateContainer,
  StyledButton,
  StyledDatePicker,
} from "./StyledSystem";

const SystemTableHeader = ({ currWeek, handleStartCurrWeek }) => {
  const [date, setDate] = useState(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const handleStartWeek = () => {
    const week = handleStartCurrWeek({ startDate: date });
    console.log(week);
  };

  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <div
        style={{
          width: "80%",
          margin: "0 auto 1rem",
        }}
      >
        {/* Dynamically render choose start date text, then input new practice based on if in progress or not - */}
        {currWeek.startDate ? (
          <p>
            Input your new practice and define a goal for the amount of times
            you wish to complete it per week. Check off each day you perform the
            practice.
          </p>
        ) : (
          <p>Choose the date you'd like to begin tracking your practices. </p>
        )}
      </div>
      <StyledStartDateContainer>
        {currWeek.startDate ? (
          <div>
            {moment(currWeek.startDate).format("MM/DD/YYYY")} -{" "}
            {moment(currWeek.endDate).format("MM/DD/YYYY")}
          </div>
        ) : (
          <>
            {/* <label>Start date:</label> */}
            <StyledDatePicker
              value={date || ""}
              onChange={handleChange}
              type="date"
              date={date}
            />
            <StyledButton inverted onClick={handleStartWeek}>
              Start
            </StyledButton>
          </>
        )}
      </StyledStartDateContainer>
    </div>
  );
};

export default SystemTableHeader;
