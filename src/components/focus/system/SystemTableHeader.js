import React, { useEffect, useState } from "react";
import { startWeek } from "../../../api/focus/systemApi";
import {
  StyledStartDateContainer,
  StyledButton,
  StyledDatePicker,
} from "./StyledSystem";

const SystemTableHeader = ({ currWeek }) => {
  const [date, setDate] = useState(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const handleStartWeek = async () => {
    const week = await startWeek({ startDate: date });
    console.log(week);
  };

  // getWeek();

  useEffect(() => {
    // getWeek();
  }, []);

  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <div
        style={{
          width: "80%",
          margin: "0 auto 1rem",
        }}
      >
        {/* Dynamically render choose start date text, then input new pratice based on if in progress or not - Choose the date you'd like to start tracking practices.*/}
        Input your new practice and define a goal for the amount of times you
        wish to complete it per week. Check off each day you perform the
        practice.
      </div>
      <StyledStartDateContainer>
        {currWeek.startDate ? (
          <div>
            {currWeek.startDate} - {currWeek.endDate}
          </div>
        ) : (
          <>
            <label>Start date:</label>
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
