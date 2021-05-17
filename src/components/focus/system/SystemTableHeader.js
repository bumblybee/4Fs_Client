import React, { useEffect, useState } from "react";
import {
  StyledStartDateContainer,
  StyledButton,
  StyledDatePickerWrapper,
  StyledDatePicker,
} from "./StyledSystem";

const SystemTableHeader = () => {
  const [date, setDate] = useState(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  //  const makeData = (e) => {
  //    if (e.target.value !== "" && props.accessor !== "startDate") {
  //      props.onSave(
  //        {
  //          [props.accessor]: e.target.value,
  //        },
  //        props.id
  //      );
  //    }
  //  };

  // useEffect(() => {
  //   setDate(props.val);
  // }, [props.val]);

  return (
    <div style={{ marginBottom: "0.5rem" }}>
      <div
        style={{
          width: "80%",
          margin: "0 auto 1rem",
        }}
      >
        {/* Dynamically render choose start date text, then input new pratice based on if in progress or not */}
        Choose the date you'd like to start tracking practices. Input your new
        practice and define a goal for the amount of times you wish to complete
        it per week. Check off each day you perform the practice.
      </div>
      <StyledStartDateContainer>
        {/* <StyledDatePickerWrapper> */}
        <label>Start date:</label>
        <StyledDatePicker
          value={date || ""}
          onChange={handleChange}
          // onBlur={makeData}
          type="date"
          date={date}
        />
        {/* </StyledDatePickerWrapper> */}
        <StyledButton>Start</StyledButton>
      </StyledStartDateContainer>
    </div>
  );
};

export default SystemTableHeader;
