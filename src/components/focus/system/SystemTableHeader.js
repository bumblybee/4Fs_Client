import React, { useState } from "react";
import moment from "moment";
import { startWeek, deleteCurrentWeek } from "../../../api/focus/practicesApi";
import {
  StyledStartDateContainer,
  StyledButton,
  StyledDatePicker,
} from "./StyledSystem";

const SystemTableHeader = ({ currWeek, setCurrWeek, setCurrPractices }) => {
  const [date, setDate] = useState(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const handleStartWeek = async () => {
    const week = await startWeek({ startDate: date });
    setCurrWeek(week.data);
    setCurrPractices(week.data.practices);
  };

  const handleDeleteWeek = async () => {
    if (window.confirm("Are you sure you want to reset the current week?")) {
      await deleteCurrentWeek(currWeek.id);

      setDate(null);
      setCurrWeek({ id: null, startDate: null, endDate: null });
      setCurrPractices([]);
    }
  };

  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <div
        style={{
          width: "70%",
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
          <p>Choose a start date to begin tracking your practices. </p>
        )}
      </div>
      <StyledStartDateContainer>
        {currWeek.startDate ? (
          <>
            <div>
              {moment(currWeek.startDate).format("MM/DD/YYYY")} -{" "}
              {moment(currWeek.endDate).format("MM/DD/YYYY")}
            </div>
            <StyledButton size="small" onClick={handleDeleteWeek}>
              Reset
            </StyledButton>
          </>
        ) : (
          <>
            <StyledDatePicker
              value={date || ""}
              onChange={handleChange}
              type="date"
              date={date}
              min={moment().format("YYYY-MM-DD")}
            />
            <StyledButton onClick={handleStartWeek}>Start</StyledButton>
          </>
        )}
      </StyledStartDateContainer>
    </div>
  );
};

export default SystemTableHeader;
